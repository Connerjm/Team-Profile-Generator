/* Imports */

const { Manager, Intern, Engineer } = require("../lib/SubEmployee");

/* Main Functions */

//Entry point to parse response from user.
function parse(answers)
{
    let employeesArr = parseEmployees(answers);
    return buildHTML(employeesArr);
}

//Parse the answers into an array of employee objects.
function parseEmployees(answers)
{
    let employeesArr = [];
    answers.forEach(employee =>
        {
            if(employee.hasOwnProperty("officeNum"))
                employeesArr.push(new Manager(employee.name, employee.id, employee.email, employee.officeNum));
            else if(employee.hasOwnProperty("github"))
                employeesArr.push(new Engineer(employee.name, employee.id, employee.email, employee.github));
            else
                employeesArr.push(new Intern(employee.name, employee.id, employee.email, employee.school));
        });

        console.log(employeesArr);//TODO delete

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

//Builds an individual employee HTML card.
function buildEmployeeCard(employee)
{
    //TODO
}

//Exports the entry function.
module.exports = parse;