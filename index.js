const readline = require('readline');
const fs = require('fs');

const licenses = {
  MIT: {
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    link: "https://opensource.org/licenses/MIT",
    notice: "This project is licensed under the MIT License."
  },
  GPL: {
    badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    link: "https://www.gnu.org/licenses/gpl-3.0",
    notice: "This project is licensed under the GNU General Public License v3.0."
  },
  Apache: {
    badge: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]",
    link: "https://opensource.org/licenses/Apache-2.0",
    notice: "This project is licensed under the Apache License 2.0."
  }
};

// Generate license info based on snswer
function printLicenseInfo(data) {
  let license = licenses[data.license];
  if (!license) {
    return "";
  }
  return `## License\n${data.license} ${license.badge} ${license.link}\n\n`;
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let data = {};

// Prompt for project title
rl.question("What is the title of your project? ", (answer) => {
  data.title = answer;

  // Prompt for description
  rl.question("Enter a brief description of your project: ", (answer) => {
    data.description = answer;

    // Prompt for installation instructions
    rl.question("Enter installation instructions: ", (answer) => {
      data.installation = answer;

      // Prompt for usage information
      rl.question("Enter usage information: ", (answer) => {
        data.usage = answer;

        // Prompt for contribution guidelines
        rl.question("Enter contribution guidelines: ", (answer) => {
          data.contributing = answer;

          // Prompt for test instructions
          rl.question("Enter test instructions: ", (answer) => {
            data.tests = answer;

            // Prompt for license
            rl.question("Enter a license for your project (MIT, GPL, Apache): ", (answer) => {
              data.license = answer;

              // Prompt for GitHub username
              rl.question("Enter your GitHub username: ", (answer) => {
                data.github = answer;

                // Prompt for email address
                rl.question("Enter your email address: ", (answer) => {
                  data.email = answer;

                  // Generate README
                  let readme = `# ${data.title}\n\n`;
                  readme += `## Description\n${data.description}\n\n`;
                  readme += `${printLicenseInfo(data)}\n\n`;
                  readme += `## Table of Contents\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)\n\n`;
                  readme += `## Installation\n${data.installation}\n\n`;
                  readme += `## Usage\n${data.usage}\n\n`;                  
                  readme += `## Contributing\n${data.contributing}\n\n`;
                  readme += `## Tests\n${data.tests}\n\n`;
                  readme += `## Questions\nIf you have any questions, you can reach me at ${data.email}.\nYou can also find me on GitHub at https://github.com/${data.github}.`;

                  // Write README to file
                  fs.writeFileSync('generatedMarkdown.md', readme);

                  console.log("README generated!");
                  rl.close();
                });
              });
            });
          });
        });
      });
    });
  });
});

