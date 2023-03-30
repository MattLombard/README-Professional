// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeIcon;
  if (license === 'MIT') {
    badgeIcon = '(https://img.shields.io/badge/License-MIT)';
  } else if (license === 'IBM') {
    badgeIcon = '(https://img.shields.io/badge/License-IPL_1.0)';
  } else if (license === 'ISC') {
    badgeIcon = '(https://img.shields.io/badge/License-ISC)';
  } else {
    badgeIcon = '';
  }
  return badgeIcon;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if (license === 'MIT') {
    licenseLink = '(https://opensource.org/licenses/MIT)';
  } else if (license === 'IBM') {
    licenseLink = '(https://opensource.org/licenses/IPL-1.0)';
  } else if (license === 'ISC') {
    licenseLink = '(https://opensource.org/licenses/ISC)';
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
    renderedLicense = `## License\n This application is covered under ${license} license. Here is a link for more information about this license ${renderLicenseLink(
      license
    )}\n`;
  }
  return renderedLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n



`;
}

module.exports = generateMarkdown;
