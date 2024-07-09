const { green } = require('colorette');
const {Command} = require('commander');
const simpleGit = require('simple-git');

const program = new Command();
const stageCommand=program.command('add <file>')
    .description('Stage a file')
    .action((file) => {
        const git = simpleGit();
        git.add(file, (err) => {
            if (err) {
                console.error('Failed to stage file:', err);
            } else {
                console.log(green('File staged successfully'));
            }
        });
    });

module.exports = { stageCommand };