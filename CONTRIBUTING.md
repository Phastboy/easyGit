# Contributing to easyGit

Thank you for your interest in contributing to easyGit! This document provides guidelines for contributions to help ensure a seamless collaboration process.

## Getting Started

- **Fork the repository** and clone your fork to your local machine.
- **Install dependencies** by running `npm install` in the project root.

## Making Changes

1. **Create a new branch** for your changes. Use a descriptive name that reflects the nature of your contribution.
2. **Make your changes**. Here are some areas where you can help:
   - **Feature Development**: Implement new features or improve existing ones. Recent additions include the `init` command for initializing git repositories and a global installation script for the CLI tool.
   - **Bug Fixes**: Identify and fix issues in the application.
   - **Documentation**: Improve or add to the README, CONTRIBUTING, or any other documentation.
3. **Test your changes** thoroughly. Ensure that your changes do not break existing functionality.
4. **Commit your changes**. Use meaningful commit messages that clearly describe the changes made. Follow the commit message format: `type: description`. For example, `feat: add 'clone' command to CLI`.

## Submitting Changes

1. **Push your changes** to your fork.
2. **Submit a pull request** to the main repository. Include a clear description of the changes and any relevant issue numbers.
3. **Respond to feedback**. Your pull request will be reviewed by the maintainers, who may suggest changes. Engage in the discussion to ensure your contributions are merged.

## Guidelines

- **Follow the coding style** of the project. This includes using consistent naming conventions, commenting your code where necessary, and following any linting rules.
- **Update the documentation** if you're adding or changing features.
- **Engage with the community**. If you have questions or need help, don't hesitate to ask in issues or discussions.

## Setup and Installation

For those looking to contribute to the CLI tool's setup and installation process, recent commits have introduced several key features:

- A global installation script (`install.sh`) for the CLI tool using _npm_.
- Integration of CLI commands in the main entry point (`index.js`).
- Addition of the `init` command to initialize new git repositories.

Refer to the commit history for detailed information on these features and consider contributing to their development or improvement.

## Thank You

Your contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
