// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if (license === MIT) {
    licenseLink = '(https://opensource.org/licenses/MIT)';
  } else if (license === IBM) {
    licenseLink = '(https://opensource.org/licenses/IPL-1.0)';
  } else if (license === ISC) {
    licenseLink = '(https://opensource.org/licenses/ISC)';
  } else {
    link = '';
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n


`;
}

module.exports = generateMarkdown;
