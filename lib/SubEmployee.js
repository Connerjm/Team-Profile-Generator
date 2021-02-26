//Imports the base employee class that these will extend.
const Employee = require("Employee");

//Manager class adds office number and overwrites getRole().
class Manager extends Employee
{
    constructor(name, id, email, officeNumber)
    {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole()
    {
        return "Manager";
    }
}

//Engineer class adds github and getter as well as overwrites getRole().
class Engineer extends Employee
{
    constructor(name, id, email, github)
    {
        super(name, id, email);
        this.github = github;
    }

    getGithub()
    {
        return this.github;
    }

    getRole()
    {
        return "Engineer";
    }
}

//Intern class adds school and getter as well as overwrites getRole().
class Intern extends Employee
{
    constructor(name, id, email, school)
    {
        super(name, id, email);
        this.school = school;
    }

    getSchool()
    {
        return this.school;
    }

    getRole()
    {
        return "Intern";
    }

}

//Exports the three child classes of employee.
module.exports = {Manager, Engineer, Intern};