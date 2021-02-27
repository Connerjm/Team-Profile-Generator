const { Manager } = require("../lib/SubEmployee");

describe("Manager", () =>
{
    describe("Initialization", () =>
    {
        it("should return an object containing name, id, email, and office number.", () =>
        {
            const manager = new Manager("Wiccan", 24153, "wiccan@youngavengers.com", 105);

            expect(manager.name).toEqual("Wiccan");
            expect(manager.id).toEqual(24153);
            expect(manager.email).toEqual("wiccan@youngavengers.com");
            expect(manager.officeNumber).toEqual(105);
        });
    });

    describe("Get Methods", () =>
    {
        it("should return the name of the manager.", () =>
        {
            const manager = new Manager("Wiccan", 24153, "wiccan@youngavengers.com", 105);

            expect(manager.getName()).toEqual("Wiccan");
        });

        it("should return the id of the manager.", () =>
        {
            const manager = new Manager("Wiccan", 24153, "wiccan@youngavengers.com", 105);

            expect(manager.getId()).toEqual(24153);
        });

        it("should return the email of the manager.", () =>
        {
            const manager = new Manager("Wiccan", 24153, "wiccan@youngavengers.com", 105);

            expect(manager.getEmail()).toEqual("wiccan@youngavengers.com");
        });

        it("should return the role of the manager.", () =>
        {
            const manager = new Manager("Wiccan", 24153, "wiccan@youngavengers.com", 105);

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});