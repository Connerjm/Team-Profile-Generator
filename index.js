/* Imports */

const inquirer = require("inquirer");
const fs = require("fs");
const parse = require("./src/parse");

/* Variables */

//Array that will hold the users answers.
const answersArr = [];

/* Functions */

//Initializing function run at the start of the program.
function init()
{
    console.log(`Welcome to the Team HTML Generator! Let's start with the info on the team manager.`);
    promptsUser("Manager");
}

//Prompts the user with questionsArr and then sends the input off to be parsed.
function promptsUser(employeeType)
{
    inquirer
        .prompt([
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
            validate: email =>//Taken from stack overflow question 46155.
            {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }
        },
        {
            type: "number",
            name: "officeNum",
            message: "Enter the managers office number.",
            when: employeeType === "Manager"
        },
        {
            type: "input",
            name: "github",
            message: "Enter their GitHub username.",
            when: employeeType === "Engineer"
        },
        {
            type: "input",
            name: "school",
            message: "Enter their school name.",
            when: employeeType === "Intern"
        },
        {
            type: "list",
            name: "next",
            message: "Enter another employee or are you done?",
            choices: ["Engineer", "Intern", new inquirer.Separator(), "All done!", "Cancel"]
        }])
        .then(answers =>
            {
                answersArr.push(answers);
                switch (answers.next)
                {
                    case "Engineer":
                        promptsUser("Engineer");
                        break;
                    case "Intern":
                        promptsUser("Intern");
                        break;
                    case "All done!":
                        processAnswers();
                        break;
                    case "Cancel":
                        process.exit();
                }
            })
        .catch(error =>
            {
                console.error(error);
            });
}

function processAnswers()
{
    let html = parse(answersArr);
    console.log(html);
    //TODO write to file.
}

/* Function calls */

//Begins the program.
init();