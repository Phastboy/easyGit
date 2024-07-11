const simpleGit = require("simple-git");
const { Command } = require('commander');
const  handleError = require('../utils/errorHandler');
const { hasStagedChanges } = require("../gitUtils/status");
const { execSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

// Get the commit message from the user
async function getCommitMessage(options) {
    // If a message is provided as an option, use it
    if (options.message) {
        return options.message;
    }

    const editor = process.env.EDITOR || 'vim';
    // Create a temporary file to store the commit message
    const tempFilePath = path.join(os.tmpdir(), `commit-msg-${Date.now()}`);
    execSync(`${editor} ${tempFilePath}`, { stdio: 'inherit' });

    const message = fs.readFileSync(tempFilePath, { encoding: 'utf8' });
    fs.unlinkSync(tempFilePath); // Clean up the temporary file
    return message;
}

const program = new Command();
const commitCommand = program
    .command('commit [files...]')
    .description('Commit files with a custom message. If no files are specified, all staged changes will be committed.')
    .option('-m, --message <message>', 'Commit message')
    .action(async (files, options) => {
        const git = simpleGit();
        const hasStaged = await hasStagedChanges();

        if (!files.length && !hasStaged) {
            console.log("No staged changes to commit.");
            return;
        }

        const message = await getCommitMessage(options);
        if (!message.trim()) {
            console.log("Commit message is empty. Aborting commit.");
            return;
        }

        const commitAction = files.length ? git.commit(message, files) : git.commit(message);

        commitAction.then(result => {
            console.log(`Files committed successfully: ${result.commit}`);
        }).catch(err => {
            handleError(err);
        });
    });

module.exports = { commitCommand };