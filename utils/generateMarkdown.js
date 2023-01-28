const licenses = {
  MIT: {
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "https://opensource.org/licenses/MIT",
    notice: "This project is licensed under the MIT License."
  },
  GPL: {
    badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    link: "https://www.gnu.org/licenses/gpl-3.0",
    notice: "This project is licensed under the GNU General Public License v3.0."
  },
  Apache: {
    badge: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "https://opensource.org/licenses/Apache-2.0",
    notice: "This project is licensed under the Apache License 2.0."
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  return license in licenses ? licenses[license].badge : "";
}

function renderLicenseLink(license) {
  return license in licenses ? licenses[license].link : "";
}

function renderLicenseSection(license) {
  return license in licenses ? licenses[license].notice : "";
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.link)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions, please contact me at [${data.email}](mailto:${data.email}).

You can also view my GitHub profile [here](https://github.com/${data.username}).

`;
}

module.exports = generateMarkdown;



function renderLicenseBadge(license) { if (!license || license === "None") {
  return "";
}
return shields.badge({
  text: `license-${license.toLowerCase()}`,
  color: "blue",
  link: `https://opensource.org/licenses/${license}`,
});
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === "None") {
    return "";
  }
  return `[${license}](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "None") {
    return "";
  }
  return `## License
This project is licensed under the ${renderLicenseSection(license)} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
