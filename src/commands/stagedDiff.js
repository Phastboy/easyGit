// command to show diff of staged files
const { Command } = require('commander');
const simpleGit = require("simple-git");
const { hasStagedChanges } = require("../gitUtils/status");

const program = new Command();
const stagedDiffCommand = program
    .command('stagedDiff')
    .description('Show the diff of staged files.')
    .action(async () => {
        const git = simpleGit();
        const stagedDiff = await git.diff(['--cached']);
        const hasStaged = await hasStagedChanges();
        if (!hasStaged) {
            console.log("No staged changes to show.");
            return;
        }
        console.log(stagedDiff);
    });

module.exports = { stagedDiffCommand };