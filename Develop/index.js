// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "Description",
        message: "Please write your project description here?",
    },
    {
        type: "input",
        name: "Installation",
        message: "How will your users install the project on their machines?",
    },
    {
        type: "input",
        name: "Usage",
        message: "What is the usage of this project?",
    },
    {
        type: "checkbox",
        name: "License",
        message: "Which license would you like to apply to this project?",
        choices: ["Academic Free License v3.0", "Educational Community License v2.0", "MIT", "Mozilla Public License 2.0"],
    },
    {
        type: "input",
        name: "Contributing",
        message: "How may others contribute to this project?",
    },
    {
        type: "input",
        name: "Tests",
        message: "Please enter testing instructions.",
    },
    {
        type: "input",
        name: "contactName",
        message: "Please include your name for users who need to contact you with their questions.",
    },
    {
        type: "input",
        name: "contactEmail",
        message: "Please include your email for users who need to contact you with their questions.",
    },
    {
        type: "input",
        name: "contactDirections",
        message: "Please include directions for users who need to contact you with their questions.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answer) => {
            console.log(answer)
            writeToFile('/dist/README.md', generateMarkdown(answer))
        })
}
// Function call to initialize app
init();
