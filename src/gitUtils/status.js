const git = require("simple-git")();

const log = console.log;

// log status to console
(async () => {
  log(await git.status());
})();

// function to return staged files
const getStagedFiles = async () => {
  return (await git.status()).staged;
}

// check if there is something to commit
const canCommit = async () => {
  return (await getStagedFiles()).length > 0;
}

// function to return all untracked files
const getUntrackedFiles = async () => {
  return (await git.status()).not_added;
}

// check for changes in the repository
const hasChanges = async () => {
  return (await getUntrackedFiles()).length > 0;
}

// export all functions
module.exports = { 
  getStagedFiles, 
  getUntrackedFiles, 
  canCommit, 
  hasChanges 
};
