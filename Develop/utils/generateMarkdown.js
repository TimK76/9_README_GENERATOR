// TODO: Create a function that returns a license badge based on which license is passed in
function license() {

  // "Apache License, Version 2.0", https://opensource.org/licenses/Apache-2.0
  // "GNU General Public License", https://opensource.org/licenses/gpl-license
  // "MIT", https://opensource.org/licenses/MIT
  // "Mozilla Public License 2.0", https://opensource.org/licenses/MPL-2.0
}
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
