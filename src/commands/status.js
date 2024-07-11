const { getStatus, hasChanges } = require("../gitUtils/status");
const { Command } = require("commander");
const { red, green, yellow } = require("colorette");

const log = console.log;

async function status() {
  const { not_added, created, deleted, modified, renamed, staged, files } =
    await getStatus();

  const untracked = {
    message: "Untracked files:",
    files: [...not_added],
  };

  const unstagedChanges = [
    ...new Set([...created, ...deleted, ...modified, ...renamed]),
  ].filter(
    (file) =>
      !staged.includes(file) ||
      files.some((f) => f.path === file && f.working_dir !== " "),
  ); // Include files that have both staged and unstaged changes

  const readyToBeCommitted = {
    message: "Changes to be committed:",
    files: [...staged],
  };

  const unStagedObj = {
    message: "Changes not staged for commit:",
    files: [...unstagedChanges],
  };

  return {
    untracked,
    readyToBeCommitted,
    unStagedObj,
  };
}

const program = new Command();
const statusCommand = program
  .command("status")
  .description(
    "List changes to be committed, changes not staged for commit, and untracked files",
  )
  .action(async () => {
    const { untracked, readyToBeCommitted, unStagedObj } = await status();

    const changes = await hasChanges();
    if (!changes) {
      log(green("nothing to commit, working tree clean"));
      log(await getStatus());
      return;
    }

    const logList = (message, files, color) => {
      log(message);
      files.forEach((file, index) => log(color(`${index + 1}. ${file}`)));
    };

    if (untracked.files.length > 0) {
      logList(untracked.message, untracked.files, red);
    }

    if (readyToBeCommitted.files.length > 0) {
      logList(readyToBeCommitted.message, readyToBeCommitted.files, green);
    }

    if (unStagedObj.files.length > 0) {
      logList(unStagedObj.message, unStagedObj.files, yellow);
    }
  });

module.exports = { statusCommand };
