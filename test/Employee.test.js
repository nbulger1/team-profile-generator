const Employee = require("./lib/employee.js");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return the name of the employee", () => {
      const employee = new Employee("Natalie", "27843", "natalie@bulger.org");
      const name = "Natalie";

      const result = new Employee().getName(employee);

      expect(result).toEqual(name);
    });
  });
});
