// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadgeLinks = {
  "MIT": "(https://img.shields.io/badge/License-MIT-yellow.svg)",
  "Unlicense": " ",
  "Apache 2.0": "(https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
  "GNU v3": "(https://img.shields.io/badge/License-GPLv3-blue.svg)",
  "BSD 3-Clause": "(https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)",
  "Mozilla Public License 2.0": "(https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)"
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licenseLinks = {
  "MIT": "(https://opensource.org/licenses/MIT)",
  "Unlicense": " ",
  "Apache 2.0": "(https://opensource.org/licenses/Apache-2.0)",
  "GNU v3": "(https://www.gnu.org/licenses/gpl-3.0)",
  "BSD 3-Clause": "(https://opensource.org/licenses/BSD-3-Clause)",
  "Mozilla Public LIcense 2.0": "(https://opensource.org/licenses/MPL-2.0)",
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // set url for license badge
  data.licenseBadge = licenseBadgeLinks[data.license];
  data.licenseLink = licenseLinks[data.license];

  // return markdown content
  return `# ${data.title}
![]${data.licenseBadge}
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install dependencies, run the following:
\`
${data.install}
\`

## Usage
${data.usage}

## License
This repository is licensed under the ${data.license}: ${data.licenseLink} license.

## Contributing
${data.contributions}

## Tests
To run tests, run the following:
\`
${data.test}
\`

## Questions
Questions about this repository? Please contact me at [${data.email}](mailto:${data.email}). View more of my work in GitHub at [${data.name}](https://github.com/${data.name}) 
`;
}
// module.exports the markdown generation;
module.exports = generateMarkdown;

