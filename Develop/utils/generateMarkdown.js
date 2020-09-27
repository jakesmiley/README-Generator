// function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}


  ## Table of Contents
  * [Description][#description]
  * [Installation][#installation]
  * [Usage][#usage]
  * [License][#license]
  * [Contributing][#contributing]
  * [tests]
  * [Contact][#contact]
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Licensing
  ${data.license}

  ## Badge
  ${data.badge}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Contact
    GitHub: [${data.userName}](https://github.com/jakesmiley)

    Email: [${data.email}]

`;
}

module.exports = generateMarkdown;
