const inquirer = require("inquirer")
const fs = require("fs") // filesystem
const generateMarkdown = require("./utils/generateMarkdown")

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
        type:"list",
        message:"Select Project License: ",
        name:"License",
        choices:["MIT","ISC","APACHE 2.0","GPL 2.0","None"]
    },
]


inquirer.prompt (questions)
.then(response => {
    console.log(response)

    fs.writeFileSync("README.md",generateMarkdown(response),function(err){
        if(err)throw err;
    })
})