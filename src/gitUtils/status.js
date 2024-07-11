const git = require("simple-git")();

// get repository status
const getStatus= async () => {
  return git.status();
};

// check if there are changes in the repository
const hasChanges = async () => {
  const { files } = await getStatus();
  return files.length > 0;
};

const hasStagedChanges= async () =>{
  const { staged } = await getStatus();
  return staged.length > 0;
};

// export the functions
module.exports = {
  getStatus,
  hasChanges,
  hasStagedChanges
};