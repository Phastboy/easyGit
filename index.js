#!/usr/bin/env node

const { program } = require("./cliSetup");
const { initCommand } = require("./src/commands/init");
const { statusCommand } = require("./src/commands/status");
const { stageCommand } = require("./src/commands/add");
const { commitCommand } = require("./src/commands/commit");
const { stagedDiffCommand } = require("./src/commands/stagedDiff");

program.addCommand(initCommand);
program.addCommand(statusCommand);
program.addCommand(stageCommand);
program.addCommand(commitCommand);
program.addCommand(stagedDiffCommand);

program.parseAsync();
