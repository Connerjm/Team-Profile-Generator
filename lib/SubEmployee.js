//Imports the base employee class that these will extend.
const Employee = require("./Employee");

//Manager class adds office number and overwrites getRole().
class Manager extends Employee
{
    //Constructor for the Manage child class.
    constructor(name, id, email, officeNumber)
    {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //Overwrites role.
    getRole()
    {
        return "Manager";
    }
}

//Engineer class adds github and getter as well as overwrites getRole().
class Engineer extends Employee
{
    //Constructor for the Engineer child class.
    constructor(name, id, email, github)
    {
        super(name, id, email);
        this.github = github;
    }
    
    //Adds github getter.
    getGithub()
    {
        return this.github;
    }

    //Overwrites role.
    getRole()
    {
        return "Engineer";
    }
}

//Intern class adds school and getter as well as overwrites getRole().
class Intern extends Employee
{
    //Constructor for the Intern child class.
    constructor(name, id, email, school)
    {
        super(name, id, email);
        this.school = school;
    }

    //Adds school getter.
    getSchool()
    {
        return this.school;
    }

    //Overwrites role.
    getRole()
    {
        return "Intern";
    }

}

//Exports the three child classes of employee.
module.exports = {Manager, Engineer, Intern};