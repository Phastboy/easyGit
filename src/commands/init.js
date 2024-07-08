const { Command } = require("commander");
const init = require("../gitUtils/init");

const program = new Command();
const initCommand = program
  .command("init")
  .description("Initialize a new git repository")
  .action(async () => {
    await init();
  });

module.exports = { initCommand };
