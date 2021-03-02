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
            //Determines which kind of employee must be created.
            if(employee.hasOwnProperty("officeNum"))
                employeesArr.push(new Manager(employee.name, employee.id, employee.email, employee.officeNum));
            else if(employee.hasOwnProperty("github"))
                employeesArr.push(new Engineer(employee.name, employee.id, employee.email, employee.github));
            else
                employeesArr.push(new Intern(employee.name, employee.id, employee.email, employee.school));
        });
    return employeesArr;
}

//Breaks down the elements of the HTML to build the file.
function buildHTML(employeesArr)
{
    let htmlstring = buildHead();
    htmlstring += `<body>\n`;
    htmlstring += buildHeader();
    htmlstring += `    <main class="container d-flex flex-wrap">\n`;
    employeesArr.forEach(employee => { htmlstring += buildEmployeeCard(employee) });
    return htmlstring += `    </main>\n</body>\n</html>`;
}

/* Helper functions */

//Builds the head of the HTML file with meta info.
function buildHead()
{
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Site</title>
</head>\n`;
}

//Builds the header of the HTML file.
function buildHeader()
{
    return `    <header>
        <h1>My Team</h1>
        <h4>the Best Team.</h4>
    </header>\n`;
}

//Builds an individual employee HTML card.
function buildEmployeeCard(employee)
{
    let card = `        <div class="card" style="width: 18rem;">
            <div class="card-body top-half">
                <h2>${employee.getName()}</h2>\n`;
    if(employee.getRole() === "Manager")
        card += `               <h4><i class="bi bi-gem"></i> Manager</h4>\n`;
    else if(employee.getRole() === "Engineer")
        card += `                <h4><i class="bi bi-eyeglasses"></i> Engineer</h4>\n`;
    else
        card += `               <h4><i class="bi bi-person-plus"></i> Intern</h4>\n`;
    card += `            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: ${employee.getEmail()}</li>\n`;
    if(employee.getRole() === "Manager")
        card += `                    <li class="list-group-item">Office Number: ${employee.officeNumber}</li>\n`;
    else if(employee.getRole() === "Engineer")
        card += `                    <li class="list-group-item">GitHub: ${employee.getGithub()}</li>\n`;
    else
        card += `                    <li class="list-group-item">School: ${employee.getSchool()}</li>\n`;
    return card += `                </ul>
            </div>
        </div>\n`;
}

//Exports the entry function.
module.exports = parse;