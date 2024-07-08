#!/usr/bin/env node

const { program } = require("./cliSetup");
const { initCommand } = require("./src/commands/init");

program.addCommand(initCommand);

program.parseAsync();
