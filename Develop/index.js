// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "Title",
            message: "What is the title of your project?",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "Description",
            message: "Please write your project description here?",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "Installation",
            message: "How will your users install the project on their machines?",
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please include installation directions for your users.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "Usage",
            message: "What is the usage of this project?",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Usage information is required.");
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            name: "License",
            message: "Which license would you like to apply to this project?",
            choices: ["Apache License, Version 2.0", "GNU General Public License", "MIT", "Mozilla Public License 2.0"],
            validate: licenseChoices => {
                if (licenseChoices) {
                    return true;
                } else {
                    console.log('One Licence must be selected.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "Contributing",
            message: "How may others contribute to this project?",
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log("Contribution guidelines are required.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "Tests",
            message: ("Please enter testing instructions."),
            validate: testsInput => {
                if(testsInput) {
                    return true;
                } else {
                    console.log("Testing instructions are required.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contactUsername",
            message: "Please include your Github username for users who need to contact you with their questions.",
            validate: contactNameInput => {
                if (contactNameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false
                }
            }
        },
        {
            type: "input",
            name: "contactEmail",
            message: "Please include your email for users who need to contact you with their questions.",
            validate: contactEmailInput => {
                if (contactEmailInput) {
                    return true;
                } else {
                    console.log('Please enter your email.');
                    return false
                }
            }
        },
        {
            type: "input",
            name: "contactDirections",
            message: "Please include directions for users who need to contact you with their questions.",
            validate: contactDirectionsInput => {
                if (contactDirectionsInput) {
                    return true;
                } else {
                    console.log('Please enter directions for users needing to contact you with their questions about this project');
                    return false
                }
            }
        },
])};

    // TODO: Create a function to write README file
    function writeToFile(fileName, data) { }

    // TODO: Create a function to initialize app
    function init() { }

    // Function call to initialize app
    init();

    questions();