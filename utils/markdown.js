

const generate = function(userAnswers, githubResponse){
    return `
# ${userAnswers.projectTitle}
 
[![License: ${userAnswers.projectLicense}](https://img.shields.io/badge/License-${userAnswers.projectLicense}-blue.svg)](https://github.com/macias-daniel/good-readme-generator)

## Description

${userAnswers.projectDesc}

## Table Of Contents

* [Installation](#Installation)

* [Usage](#Usage)

* [License](#License)

* [Contributing](#Contributing)

* [Tests](#Tests)

* [Questions](#Questions)

## Installation
${userAnswers.projectInstall}

## Usage
${userAnswers.projectUsage}

## License
This project is licensed under: ${userAnswers.projectLicense}

## Contributing 
${userAnswers.projectContrib}

## Tests
${userAnswers.projectTests}

## Questions
<img src= "${githubResponse.data.avatar_url}" alt= "${userAnswers.username}'s avatar" width="100">

Contact me at ${userAnswers.userEmail} if you have any questions about my project!
`
}

module.exports = {
    generate: generate
}