const Employee = require("../lib/Employee");

describe("Employee", () =>
{
    describe("Initialization", () =>
    {
        it("should return an object containing name, id, and email.", () =>
        {
            const employee = new Employee("Wanda", 43215, "wanda@avengers.com");

            expect(employee.name).toEqual("Wanda");
            expect(employee.id).toEqual(43215);
            expect(employee.email).toEqual("wanda@avengers.com");
        });
    });

    describe("Get Methods", () =>
    {
        it("should return the name of the employee.", () =>
        {
            const employee = new Employee("Wanda", 43215, "wanda@avengers.com");

            expect(employee.getName()).toEqual("Wanda");
        });

        it("should return the id of the employee.", () =>
        {
            const employee = new Employee("Wanda", 43215, "wanda@avengers.com");

            expect(employee.getId()).toEqual(43215);
        });

        it("should return the email of the employee.", () =>
        {
            const employee = new Employee("Wanda", 43215, "wanda@avengers.com");

            expect(employee.getEmail()).toEqual("wanda@avengers.com");
        });

        it("should return the role of the employee.", () =>
        {
            const employee = new Employee("Wanda", 43215, "wanda@avengers.com");

            expect(employee.getRole()).toEqual("Employee");
        });
    });
});