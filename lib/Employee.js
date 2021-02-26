//Base employee class. Requires a name, id, and email. Also has getters for each field.
class Employee
{
    constructor(name, id, email)
    {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName()
    {
        return this.name;
    }

    getId()
    {
        return this.id;
    }

    getEmail()
    {
        return this.email;
    }

    getRole()
    {
        return "Employee";
    }
}

//Exports the Employee class.
module.exports = Employee;