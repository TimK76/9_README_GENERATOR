// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "Title",
    message: "What is the title of your project?"
},
{   type: "input",
    name: "Description",
    message: "Please write your project description here?"
},
{   type: "input",
    name: "Table of Contents",
    message: "What sections should be added to your table of contents?"
},
{   type: "input",
    name: "Installation",
    message: "How will your users install the project on their machines?"
},
{   type: "input",
    name: "Usage",
    message: "What is the usage of this project?"
},
{   type: "checkbox",
    name: "License",
    message: "which license would you like to apply to this project?",
    choices: "Academic Free License v3.0, Educational Community License v2.0, MIT, Mozilla Public License 2.0"
},
{   type: "input",
    name: "Contributers",
    message: "whom would you like to credit for their contributions?",
},
{   type: "input",
    name: "Tests",
    message: "what tests have been run",
},
{   type: "list",
    name: "Questions",
    message: "Please include your contact information including the minimum of your name and email along with directions for how future users may contact you with their questions on the project.",
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
console.log(hello, Tim)