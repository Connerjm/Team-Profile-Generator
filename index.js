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
    fs.mkdir("./dist", error => { error ? console.error(error) : console.log("Created folder.");; })
    fs.writeFile("./dist/index.html", html, error =>
    {
        error ? console.error(error) : console.log("Success! Find your HTML file in the dist folder.");
    });
    fs.writeFile("./dist/style.css", `header
{
    border-bottom: solid 2px black;
    padding: 15px;
    background-image: linear-gradient(to right, #360033, #0b8793);
    text-align: center;
    color: white;
}

.card
{
    margin: 25px;
    box-shadow: 5px 10px 9px;
    border: solid 1px black;
    border-radius: 5px;
}

.top-half
{
    background-color: #0b8793;
    color: white;
}`, error =>
    {
        error ? console.error(error) : console.log("Success! Find the associated CSS in the same folder.");
    });
}

/* Function calls */

//Begins the program.
init();