const { getStatus } = require("../gitUtils/status");
const { Command } = require("commander");
const { red, green } = require("colorette");

const log = console.log;

async function status() {
  const { not_added, created, deleted, modified, renamed, files, staged } =
    await getStatus();

  const untracked = {
    message: "untracked files: ",
    files: [...not_added],
  };

  const unStaged = [
    ...new Set([...created, ...deleted, ...modified, ...renamed]),
  ];

  const readyToBeCommitted = {
    message: "Changes to be committed:",
    files: [...new Set([...staged])],
  };

  const unStagedObj = {
    message: "Changes not staged for commit:",
    files: [...unStaged],
  };

  const hasChanges = files.length > 0;

  return {
    untracked,
    readyToBeCommitted,
    unStagedObj,
    hasChanges,
  };
}

const program = new Command();
const statusCommand = program
  .command("status")
  .description(
    "List changes to be committed and changes not staged for commit, and untracked files",
  )
  .action(async () => {
  const { untracked, readyToBeCommitted, unStagedObj } = await status();

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
    logList(unStagedObj.message, unStagedObj.files, red);
  }
});

module.exports = { statusCommand };

