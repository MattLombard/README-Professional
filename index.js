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
  },
  {
    type: 'input',
    message: 'Re-enter password to confirm:',
    name: 'confirm',
  },
  {
    type: 'input',
    message: 'What is your user name?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your password?',
    name: 'password',
  },
  {
    type: 'input',
    message: 'Re-enter password to confirm:',
    name: 'questions',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
