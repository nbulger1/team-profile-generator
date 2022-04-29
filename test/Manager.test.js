const Manager = require("../lib/manager.js");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return the office number of the manager", () => {
      const manager = new Manager(
        "Natalie",
        "27843",
        "natalie@bulger.org",
        "1234"
      );
      const officeNumber = "1234";

      const result = manager.getOfficeNumber();

      expect(result).toEqual(officeNumber);
    });

    it("should return the role of the employee", () => {
      const manager = new Manager(
        "Natalie",
        "27843",
        "natalie@bulger.org",
        "1234"
      );
      const role = "Manager";

      const result = manager.getRole();

      expect(result).toEqual(role);
    });
  });
});
