// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Check which license was passed in
function renderLicenseBadge(license) {
  let badgeIcon;
  if (license === 'MIT') {
    badgeIcon = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'IBM') {
    badgeIcon = '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)';
  } else if (license === 'ISC') {
    badgeIcon = '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
  } else {
    badgeIcon = '';
  }
  return badgeIcon;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Check which license was passed in
function renderLicenseLink(license) {
  let licenseLink;
  if (license === 'MIT') {
    licenseLink = '[MIT license](https://www.mit.edu/~amini/LICENSE.md)';
  } else if (license === 'IBM') {
    licenseLink = '[IBM license](https://www.ibm.com/about/software-licensing/licensing/license_information_documents)';
  } else if (license === 'ISC') {
    licenseLink = '[ISC license](https://www.isc.org/licenses/)';
  } else {
    licenseLink = '';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let renderedLicense;
  if (license !== 'none') {
    renderedLicense = `## License\n This application is covered under ${license} license.\n
     Here is a link for more information about this license ${renderLicenseLink(license)}\n`;
  }
  return renderedLicense;
}

// TODO: Create a function to generate markdown for README
// Check if there is a license specified and, if so, display the license badge
function generateMarkdown(data) {
  let badgeDisplay;
  if (renderLicenseSection(data.license) === '') {
    badgeDisplay = '';
  } else {
    badgeDisplay = `${renderLicenseBadge(data.license)}`;
  }
  // Return the README markdown string with placeholders for the data provided by the user
  return `# ${data.title}
  ${badgeDisplay}
  ## description
  ${data.description}
  ## table of contents
  * [description](#description)
  * [installation](#installation)
  * [usage](#usage)
  * [license](#License)
  * [contribution](#contribution)
  * [test](#test)
  * [questions](#questions)

  ## installation
  ${data.installation}
  ## usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## contribution
  ${data.contributing}
  ## test
  ${data.test}
  ## questions
  Github profile- ${data.github}. Link to profile [Github profile](https://github.com/${data.github}).\n
  For any other questions you can reach me at ${data.email}
`;
}

module.exports = generateMarkdown;
