// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write your project description here?",
    },
    {
        type: "input",
        name: "installation",
        message: "How will your users install the project on their machines?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this project?",
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to apply to this project?",
        choices: ["Apache", "Boost", "MIT", "Mozilla Public License 2.0", "none"],
    },
    {
        type: "input",
        name: "contributing",
        message: "How may others contribute to this project?",
    },
    {
        type: "input",
        name: "tests",
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
