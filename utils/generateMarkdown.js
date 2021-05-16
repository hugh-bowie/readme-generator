// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  let licenseBadge;
  switch (license) {
    case "APACHE_2.0":
      licenseBadge = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
      break;
    case "GPL_3.0":
      licenseBadge = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      break;
    case 'MIT':
      licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    case 'Mozilla':
      licenseBadge = 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
      break;
  }
  return licenseBadge;

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  let licenseLink;
  switch (license) {
    case "APACHE_2.0":
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
      break;
    case "GNU GPL3":
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
      break;
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla':
      licenseLink = 'https://www.mozilla.org/en-US/MPL/';
      break;
  }
  return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license === "None") {
    return "No";
  } else {
    return license;
  }
}

// Convert title link into markdown fmt
const titleLinkGenerator = (title) => {
  const titleLinkNoSpace = title.replace(/\s/g, "-");
  const titleLinkFinal = titleLinkNoSpace.toLowerCase();
  return titleLinkFinal;
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `

  # ${data.title}


  ![${renderLicenseSection(data.license)} license](${renderLicenseBadge(data.license)})
  
  
  ## Table of Contents:

  1. [${data.title}](#${titleLinkGenerator(data.title)})
  2. [Description](###description)
  3. [Installation](###installation) 
  4. [Usage](###usage) 
  5. [Contributing](###contributing)
  6. [Tests](###tests)
 


  ## Description 


  ${data.description}


  ## Installation


  ${data.installation}


  ## Useage 


  ${data.useage}


  ## Contribution


  ${data.contribution}


  ## Testing


  ${data.tests}


  ## License Link


  ${renderLicenseSection(data.license)} license
  ${renderLicenseLink(data.license)}
  
  
  ## Questions


  If you wish to contribute to this application please send a request to me at: ${data.email}.
  Or you can also send an issue via github to me at: [Git](github.com/${data.github}/)

  
`
}

module.exports = generateMarkdown;
