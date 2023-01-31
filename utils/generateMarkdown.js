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
  const licenses = {
    MIT: {
      badge: "https://img.shields.io/badge/License-MIT-yellow.svg"
    },
    GPL: {
      badge: "https://img.shields.io/badge/License-GPL-blue.svg"
    },
    Apache: {
      badge: "https://img.shields.io/badge/License-Apache%202.0-green.svg"
    }
  };
  return license in licenses ? licenses[license].badge : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  const licenses = {
    MIT: {
      link: "https://opensource.org/licenses/MIT"
    },
    GPL: {
      link: "https://www.gnu.org/licenses/gpl-3.0.en.html"
    },
    Apache: {
      link: "https://www.apache.org/licenses/LICENSE-2.0"
    }
  };
  return license in licenses ? licenses[license].link : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  const licenses = {
    MIT: {
      notice: `MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    },
    GPL: {
      notice: `GNU General Public License v3.0

Copyright (c) [year] [fullname]

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`
    },
    Apache: {
      notice: `Apache License 2.0

Copyright [year] [fullname]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
    }
  };

  return license in licenses ? licenses[license].notice : "";
}

// TODO: Create a function to generate markdown for README

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



