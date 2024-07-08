const simpleGit = require("simple-git");

const git = simpleGit();

// function to return staged files
const getStagedFiles = async () => {
  const status = await git.status();
  return status.staged;
}

(async () => {
  const stagedFiles = await getStagedFiles();
  console.log(stagedFiles);
})();

module.exports = getStagedFiles;
