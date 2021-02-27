const { Intern } = require("../lib/SubEmployee");

describe("Intern", () =>
{
    describe("Initialization", () =>
    {
        it("should return an object containing name, id, email, and school.", () =>
        {
            const intern = new Intern("Speedy", 13184, "speedy@youngavengers.com", "Xavier's School for Gifted Youngsters");

            expect(intern.name).toEqual("Speedy");
            expect(intern.id).toEqual(13184);
            expect(intern.email).toEqual("speedy@youngavengers.com");
            expect(intern.school).toEqual("Xavier's School for Gifted Youngsters");
        });
    });

    describe("Get Methods", () =>
    {
        it("should return the name of the intern.", () =>
        {
            const intern = new Intern("Speedy", 13184, "speedy@youngavengers.com", "Xavier's School for Gifted Youngsters");

            expect(intern.getName()).toEqual("Speedy");
        });

        it("should return the id of the intern.", () =>
        {
            const intern = new Intern("Speedy", 13184, "speedy@youngavengers.com", "Xavier's School for Gifted Youngsters");

            expect(intern.getId()).toEqual(13184);
        });

        it("should return the email of the intern.", () =>
        {
            const intern = new Intern("Speedy", 13184, "speedy@youngavengers.com", "Xavier's School for Gifted Youngsters");

            expect(intern.getEmail()).toEqual("speedy@youngavengers.com");
        });

        it("should return the school of the intern.", () =>
        {
            const intern = new Intern("Speedy", 13184, "speedy@youngavengers.com", "Xavier's School for Gifted Youngsters");

            expect(intern.getSchool()).toEqual("Xavier's School for Gifted Youngsters");
        });

        it("should return the role of the intern.", () =>
        {
            const intern = new Intern("Speedy", 13184, "speedy@youngavengers.com", "Xavier's School for Gifted Youngsters");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});