/* Imports */

const inquirer = require("inquirer");//User input module.
const fs = require("fs");//File system module for writing files.
const parse = require("./src/parse");//My module for parsing input to html.

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
                switch (answers.next)//Decides what to do next.
                {
                    case "Engineer"://Ask questions for engineer.
                        promptsUser("Engineer");
                        break;
                    case "Intern"://Ask questions for intern.
                        promptsUser("Intern");
                        break;
                    case "All done!"://Finish and process input.
                        processAnswers();
                        break;
                    case "Cancel"://Back out and cancel the application.
                        process.exit();
                }
            })
        .catch(error =>
            {
                console.error(error);
            });
}

//Takes the object array of answers from the inquirer questions and sends them off to be processed and turned into the html file.
function processAnswers()
{
    let html = parse(answersArr);
    if (!fs.existsSync("./dist"))//Check if the dist folder exists or not.
        fs.mkdir("./dist", error =>//If not, create it.
        {
            error ? console.error(error) : console.log("./dist folder created.");
        });
    fs.writeFileSync("./dist/index.html", html);//Writes the html and css file.
    fs.writeFileSync("./dist/style.css", `header
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
}`);
}

/* Function calls */

//Begins the program.
init();