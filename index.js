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
        message: "What is your git hub username"
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
    inquirer.prompt(questions)
    // inquirer callback
    .then( answers => {

        //Saving user username
        const userName = answers.username

        //Building user github api url
        const gitUrl = `https://api.github.com/users/${userName}` 

        return axios.get(gitUrl)

    })
    // axios callback
    .then((githubResponse)=>{
        console.log(githubResponse.data)
    })
    .catch(error =>{
        console.log(error)
    })
}

init();
