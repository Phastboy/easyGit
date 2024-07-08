const { Command } = require("commander");

const program = new Command();

program.name("easyGit").version("1.0.0").description("A simple git CLI");

module.exports = { program };
