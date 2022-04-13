// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # [${data.title}]
  ## [Description](${data.description})
  # Table of Contents
  ### 1. [Description](${data.description}).
  ### 2. [Installation](${data.installation}).
  ### 3. [Usage](${data.usage}).
  ### 4. [License](${data.license}).
  ### 5. [Contibuting](${data.contributing}).
  ### 6. [Tests](${data.tests}).
  ### 7. [Questions](My name is ${data.contactName}. If you have questions please follow these directions to contact me: ${data.contactDirections}. If you've read these directions and agree to follow them then please email me at ${data.contactEmail}. Thank you; I hope you'll enjoy using this application.).
  ## Installation
  ## Usage
  ## License
  ## Contributing
  ## Tests
  ## Questions
`;
}

module.exports = generateMarkdown;
