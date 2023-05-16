// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License[0] !== "None") {
 // if (license!== "None") {
    return `![Github license](https://img.shields.io/badge/license-${License}-red.svg)`;
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if(License[0] !== "None") {
  return ` ![NPM license] (https://img.shields.io/npm/l/MIT)`;
  }
else {
  return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
${renderLicenseBadge(data.License)}

  ## Description
  ${data.Description}

  ## Table Of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](contributors)
  * [Tests](tests)
  * [Questions](questions)

  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## License
  ${data.License}
  ## Creator
  ${data.GitHub} 
  ## Contributors
  ${data.Contributors}
  ## Tests
  ${data.Test}
  ## Questions
  ${data.Questions}

`;
}

module.exports = generateMarkdown;
