const readline = require('readline');
const fs = require('fs');

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
            rl.question("Enter a license for your project (e.g. MIT): ", (answer) => {
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
                  readme += `## Table of Contents\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)\n\n`;
                  readme += `## Installation\n${data.installation}\n\n`;
                  readme += `## Usage\n${data.usage}\n\n`;
                  readme += `## License\nThis project is covered under the ${data.license} license.\n\n`;
                  readme += `## Contributing\n${data.contributing}\n\n`;
                  readme += `## Tests\n${data.tests}\n\n`;
                  readme += `## Questions\nIf you have any questions, you can reach me at ${data.email}.\nYou can also find me on GitHub at https://github.com/${data.github}.`;

                  // Write README to file
                  fs.writeFileSync('README.md', readme);

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
