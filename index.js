/* Imports */

const inquirer = require("inquirer");
const fs = require("fs");
const parse = require("./src/parse");

/* Variables */

//Array of the questions to prompt the user.
const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter name."
    },
    {
        type: "number",
        name: "id",
        message: "Enter their ID number."
    },
    {
        type: "input",
        name: "email",
        message: "Enter their email address.",
        //validate: isValidEmail(email)
    },
    {
        type: "number",
        name: "officeNum",
        message: "Enter the managers office number.",
        //when: manager
    },
    {
        type: "input",
        name: "github",
        message: "Enter their GitHub username.",
        //when: engineer
    },
    {
        type: "input",
        name: "school",
        message: "Enter their school name.",
        //when: intern
    },
    {
        type: "list",
        name: "next",
        message: "Enter another employee or are you done?",
        choices: ["Engineer", "Intern", new inquirer.Separator(), "All done!"]
    }
];

/* Functions */

//Initializing function run at the start of the program.
function init()
{
    promptsUser();
}

//Prompts the user with questions and then sends the input off to be parsed.
function promptsUser()
{
    inquirer
        .prompt(questions)
        .then(answers => {parse(answers)})
        .catch(error =>
            {
                console.error(error);
            });
}

/* Function calls */

init();