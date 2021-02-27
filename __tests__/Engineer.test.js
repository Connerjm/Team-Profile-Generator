const { Engineer } = require("../lib/SubEmployee");

describe("Engineer", () =>
{
    describe("Initialization", () =>
    {
        it("should return an object containing name, id, email, and github.", () =>
        {
            const engineer = new Engineer("Vision", 67518, "vision@avengers.com", "VisionGH");

            expect(engineer.name).toEqual("Vision");
            expect(engineer.id).toEqual(67518);
            expect(engineer.email).toEqual("vision@avengers.com");
            expect(engineer.github).toEqual("VisionGH");
        });
    });

    describe("Get Methods", () =>
    {
        it("should return the name of the engineer.", () =>
        {
            const engineer = new Engineer("Vision", 67518, "vision@avengers.com", "VisionGH");

            expect(engineer.getName()).toEqual("Vision");
        });

        it("should return the id of the engineer.", () =>
        {
            const engineer = new Engineer("Vision", 67518, "vision@avengers.com", "VisionGH");

            expect(engineer.getId()).toEqual(67518);
        });

        it("should return the email of the engineer.", () =>
        {
            const engineer = new Engineer("Vision", 67518, "vision@avengers.com", "VisionGH");

            expect(engineer.getEmail()).toEqual("vision@avengers.com");
        });

        it("should return the github of the engineer.", () =>
        {
            const engineer = new Engineer("Vision", 67518, "vision@avengers.com", "VisionGH");

            expect(engineer.getGithub()).toEqual("VisionGH");
        });

        it("should return the role of the engineer.", () =>
        {
            const engineer = new Engineer("Vision", 67518, "vision@avengers.com", "VisionGH");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});