// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter the title of your project.',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Choose the license for your README, if none select none.',
    name: 'license',
    choices: ['MIT', 'IBM', 'ISC', 'none'],
  },
  {
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'test',
  },
  {
    type: 'input',
    message: 'What is your github username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
];

// TODO: Create a function to write README file
let fileName = 'practiceREADME.md';

function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) => {
    err ? console.error(err) : console.log('README made');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => writeToFile(fileName, generateMarkdown(response)));
}

// Function call to initialize app
init();
