/* Imports */

const Employee = require("../lib/Employee");
const { Manager, Intern, Engineer } = require("../lib/SubEmployee");

/* Main Functions */

//Entry point to parse response from user.
function parse(answers)
{
    console.log(answers);

    let employeesArr = parseEmployees(answers);
    return buildHTML(employeesArr);
}

//Parse the answers into an array of employee objects.
function parseEmployees(answers)
{
    let employeesArr = [];
    //TODO
    return employeesArr;
}

//Breaks down the elements of the HTML to build the file.
function buildHTML(employeesArr)
{
    let htmlstring = buildHead();
    //buildHeader();
    //for loop
        //buildImployeeCard(employee);
}

/* Helper functions */

//Builds the head of the HTML file with meta info.
function buildHead()
{
    //TODO
}

//Builds the header of the HTML file.
function buildHeader()
{
    //TODO
}

//Builds an individual employee card.
function buildEmployeeCard(employee)
{
    //TODO
}

//Exports the entry function.
module.exports = parse;