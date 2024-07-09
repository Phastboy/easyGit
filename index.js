#!/usr/bin/env node

const { program } = require("./cliSetup");
const { initCommand } = require("./src/commands/init");
const { statusCommand } = require("./src/commands/status");
const { stageCommand } = require("./src/commands/add");
const { commitCommand } = require("./src/commands/commit");

program.addCommand(initCommand);
program.addCommand(statusCommand);
program.addCommand(stageCommand);
program.addCommand(commitCommand);

program.parseAsync();
