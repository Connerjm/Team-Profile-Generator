//Base employee class. Requires a name, id, and email. Also has getters for each field.
class Employee
{
    //Constructor for the employee parent class.
    constructor(name, id, email)
    {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //Returns name.
    getName()
    {
        return this.name;
    }

    //Returns id.
    getId()
    {
        return this.id;
    }

    //Returns email.
    getEmail()
    {
        return this.email;
    }

    //Returns role.
    getRole()
    {
        return "Employee";
    }
}

//Exports the Employee class.
module.exports = Employee;