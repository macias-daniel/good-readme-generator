// TODO: import fs, path and inquirer modules
const inquirer = require("inquirer")
const axios = require("axios")
const fs = require("fs")
const markdownGen = require("./markdown")

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

function writeToFile(fileName, data) {
    fs.writeFileSync(`./output/${fileName}`, data)
}

function init() {

    inquirer.prompt(questions)

    // inquirer callback
    .then( answers => {

        //Building user github api url
        const gitUrl = `https://api.github.com/users/${answers.username}` 

        //Make and return axios call
        axios.get(gitUrl).then((githubResponse)=>{
    
            //Creating markdown files title
            const markdownFileName = `${answers.projectTitle}-README.md`
    
            //Markdown file content
            const markdownFile = markdownGen.generate(answers, githubResponse)
    
            //Call function to create file
            writeToFile(markdownFileName, markdownFile)
        })

    })
    .catch(error =>{
        console.log(error)
    })
}


init();
