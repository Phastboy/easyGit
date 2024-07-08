const { Command } = require("commander");
const handleError = require("./src/utils/errorHandler");
const { red } = require("colorette");

const log = console.log;
const program = new Command();

program.name("easyGit").version("1.0.0").description("A simple git CLI");

// Log unhandled promise rejections
process.on("unhandledRejection", (reason) => {
  log(red("Unhandled Rejection:"), reason);
  handleError(reason);
});

module.exports = { program };
