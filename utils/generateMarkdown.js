// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License !== "None") {
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
 {
       return `[License Info](https://choosealicense.com/licenses/)`;
    
   }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ${renderLicenseLink(license)}

  ${renderLicenseBadge(license)}
  `
  // if (License !== "None") {
  //   // if (license!== "None") {
  //      return `![GitLab license](https://img.shields.io/gitlab/license/MIT${License}-blure.svg)`;
  //    }
  //    else {
  //      return "";
  //    }
}

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
  ${renderLicenseSection(data.License)}

  ## Creator
  ${data.GitHub} 
  [Contributors Profile](https://github.com/${data.GitHub} )

  ## Contributors
  ${data.Contributors}

  ## Tests
  ${data.Test}

  ## Questions
  Feel free to reach out for any questions related to this prpject
  ${data.Email}

`;
}

module.exports = generateMarkdown;
