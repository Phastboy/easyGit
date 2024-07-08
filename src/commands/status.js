const { getStatus } = require("../gitUtils/status");
const { Command } = require("commander");

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

    if (untracked.files.length > 0) {
      log(untracked.message, untracked.files);
    }

    if (readyToBeCommitted.files.length > 0) {
      log(readyToBeCommitted.message, readyToBeCommitted.files);
    }

    if (unStagedObj.files.length > 0) {
      log(unStagedObj.message, unStagedObj.files);
    }
  });

module.exports = { statusCommand };

