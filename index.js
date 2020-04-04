// TODO: import fs, path and inquirer modules
const inquirer = require("inquirer")
const fs = require("fs")
const markdownGen = require("./utils/markdown")
const api = require("./utils/api")

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

//This function creates read me file
function writeToFile(fileName, data) {
    fs.writeFileSync(`./output/${fileName}`, data)
    console.log("Your readme file has been created! You can find it in the output folder")
}

function init() {

    inquirer.prompt(questions)

    // inquirer promise
    .then( answers => {
        
        api.getUser(answers.username).then((githubResponse)=>{
        
            //Creating markdown files title
            const markdownFileName = `${((answers.projectTitle).replace(/ /g,"-")).toLowerCase()}-readme.md`
    
             //Markdown file content
            const markdownFileContent = markdownGen.generate(answers, githubResponse)
    
            //Call function to create file
            writeToFile(markdownFileName, markdownFileContent)
        
        })    
    })
    .catch(error =>{
        console.log(error)
    })
}

init();
