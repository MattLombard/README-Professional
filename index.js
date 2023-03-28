// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter README Title',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter the description of your README',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Enter the installation for your README',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Enter the usage information for your README',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Enter the license for your README',
    name: 'license',
    choices: ['MIT', 'Microsoft Public License', 'Apache license 2.0'],
  },
  {
    type: 'input',
    message: 'Enter the contributing guidelines for your README',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Enter the test instructions for your README',
    name: 'test',
  },
  {
    type: 'input',
    message: 'Enter your github username for your README',
    name: 'github',
  },
  {
    type: 'input',
    message: 'Enter your email address',
    name: 'email',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
