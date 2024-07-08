const git = require("simple-git")();

// get repository status
const getStatus= async () => {
  return git.status();
}

// test getStatus function
(async () => {
  console.log(await getStatus());
})();

// check if there are changes in the repository
const hasChanges = async () => {
  const { files } = await getStatus();
  return files.length > 0;
}

// test hasChanges function
(async () => {
  console.log(await hasChanges());
}
)();

// export the functions
module.exports = {
  getStatus,
  hasChanges
}