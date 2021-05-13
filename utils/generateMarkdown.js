// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':

      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0);'

    case 'Boost':

      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';

    case 'GNUGPLv3':

      return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0) ';

    case 'Mozilla':

      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';

    case 'MIT':

      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    default:
      return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':

      return '[**Apache License 2.0**](https://choosealicense.com/licenses/apache-2.0/) - A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';

    case 'Boost':

      return '[**Boost Software License 1.0**](https://choosealicense.com/licenses/bsl-1.0/) - A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';

    case 'GNU GPLv3':

      return '[**GNU GPLv3**](https://choosealicense.com/licenses/gpl-3.0/) - Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.';

    case 'Mozilla':

      return '[**Mozilla Public License 2.0**](https://choosealicense.com/licenses/mpl-2.0/) - Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.';

    case 'MIT':

      return '[**MIT License**](https://choosealicense.com/licenses/mit/) - A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  switch (license) {
    case 'Apache':
      return `${renderLicenseLink(license)} License Version 2.0, January 2004
  https://www.apache.org/licenses/LICENSE-2.0`;
    case 'Boost':
      return `${renderLicenseLink(license)} Boost Software License - Version 1.0 - August 17th, 2003
  https://www.boost.org/LICENSE_1_0.txt`;
    case 'GNU GPLv3':
      return `${renderLicenseLink(license)} GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
  https://www.gnu.org/licenses/gpl-3.0.en.html`;
    case 'Mozilla':
      return `${renderLicenseLink(license)} Mozilla Public License Version 2.0
  https://www.mozilla.org/en-US/MPL/2.0/`;

    case 'MIT':
      return `${renderLicenseLink(license)} Copyright 2021 ${name} 
  https://opensource.org/licenses/MIT` ;
  }

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    
    ## Description

    ### ${data.description}
    
    ---
    
    ## Table of Contents

    *[Description](#description)
    *[Installation](#install)
    *[Useage](#useage)
    *[Contribution](#contribute)
    *[Languages](#languages)
    *[Testing](#test)
    *[License](#license)
    

    ---

    ## Description

    ${data.description}

    ## Installation

    ${data.installation}

    ## Usage
    
    ${data.usage}

    ## Contribution 
    
    ${data.contribution}

    ## Languages

    ${data.languages}

    ## Testing

    ${data.test}

    ## License

    ${renderLicenseSection(data.license, data.name)}

`;
  }
}
module.exports = generateMarkdown;
