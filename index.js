const inquirer = require("inquirer");
const fs = require("fs"); // filesystem
const generateMarkdown = require("./utils/generateMarkdown");
const path = require ('path');

const questions = [
    {
        type:"input",
        message:"Enter Project title: ",
        name:"Title"
    },

    {
        type:"input",
        message:"Enter Project description: ",
        name:"Description"
    },

    {
        type:"input",
        message:"Enter Installation: ",
        name:"Installation"
    },

    {
        type:"input",
        message:"Enter Intstructions ",
        name:"Instructions"
    },

    {
        type:"input",
        message:"Enter Usage",
        name:"Information"
    },

    {
        type:"input",
        message:"Enter Guidelines ",
        name:"Guidelines"
    },

    {
        type:"input",
        message:"Enter Test",
        name:"Instructions"
    },

    {
        type:"checkbox",
        message:"Select Project License: ",
        name:"License",
        choices:["MIT","ISC","APACHE 2.0","GPL 2.0","None"]
    },


    {
        type:"input",
        message:"Enter your GitHub username.",
        name:"GitHub",
    },

    {
        type:"input",
        message:"Enter your email.",
        name:"Email",
    },

    {
        type:"input",
        message:"Please list any contributors.",
        name: "Contributors",
    },

    {
        type:"input",
        message:'Please run these tests.',
        name: "Test",
    },

    {
        type:"input",
        message:'If you have any questions, please leave it down below',
        name: "Questions",
    },

    {
        type:"input",
        message:'Please state the use',
        name: "Usage",
    },
    
];

function writeToFile(fileName, data) {
      return fs.writeFileSync(path.join(process.cwd(), fileName), data);
        console.log('New README has been successfully generated!')
}

function init () {
inquirer.prompt (questions)
.then(response => {
   console.log("here are the :",response)
    writeToFile("Readme.md", generateMarkdown({ ...response }));   
}).catch(err => {
    console.log(err)
})
}

init()
