// TODO: import fs, path and inquirer modules
const inquirer = require("inquirer")
const axios = require("axios")

// TODO: import api and generateMarkdown modules from ./utils/

// TODO: Add inquirer question objects to questions array. This should
// include all the necessary questions for the user.
// Example question:
// {
//   type: "input",
//   name: "github",
//   message: "What is your GitHub username?"
// }
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your git hub username?"
    },
    {
        type: "input",
        name: "userEmail",
        message: "Enter your email so users can contact you for questions"
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "projectDesc",
        message: "What is your project's description?"
    },
    {
        type: "input",
        name: "projectInstall",
        message: "What should your user know about installing your project / Does it have any dependencies?"
    },
    {
        type: "input",
        name: "projectUsage",
        message: "What should the user know about using your project?"
    },
    {
        type: "input",
        name: "projectLicense",
        message: "What kind of license does your project have? "
    },
    {
        type: "input",
        name: "projectContrib",
        message: "What should the user know about contributing?"
    },
    {
        type: "input",
        name: "projectTests",
        message: "How do you run tests for your project?"
    }
    
];

// TODO: Write function to synchronously write data in the
// current working directory to file named for the fileName parameter.
// The data parameter is the text to write to the file.
function writeToFile(fileName, data) {
}

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.
function init() {

    //User inquirer prompt answers to be saved globally 
    let userAnswers;

    inquirer.prompt(questions)

    // inquirer callback
    .then( answers => {

        //Saving user answers globally 
        userAnswers = answers

        //Building user github api url
        const gitUrl = `https://api.github.com/users/${userAnswers.username}` 

        //Make and return axios call
        return axios.get(gitUrl)

    })

    // axios callback
    .then((githubResponse)=>{


        const markdownFile = 
        `
        # ${userAnswers.projectTitle}

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
        ${userAnswers.projectLicense}

        ## Contributing 
        ${userAnswers.projectContrib}

        ## Tests
        ${userAnswers.projectTests}
        
        ## Questions
        Contact me at ${userAnswers.userEmail} if you have any questions about my project!

        `


        console.log(markdownFile)
    })

    .catch(error =>{

        console.log(error)

    })
}





init();
