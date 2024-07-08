#!/usr/bin/env node

const { program } = require("./cliSetup");
const { initCommand } = require("./src/commands/init");
const { statusCommand } = require("./src/commands/status");

program.addCommand(initCommand);
program.addCommand(statusCommand);

program.parseAsync();
