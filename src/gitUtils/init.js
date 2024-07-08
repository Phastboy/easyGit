const git = require("simple-git")();
const { green, red } = require("colorette");
const log = console.log;

// Initialize a new git repository
async function init() {
  try {
    const isRepo = await git.checkIsRepo();
    if (isRepo) {
      log(green("Already a git repository"));
      return;
    }
    await git.init();
    log(green("Initialized a new git repository"));
  } catch (err) {
    throw new Error(red("Failed to initialize a new git repository"));
  }
}

module.exports = init;
