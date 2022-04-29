const Employee = require("../lib/employee.js");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return the name of the employee", () => {
      const employee = new Employee("Natalie", "27843", "natalie@bulger.org");
      const name = "Natalie";

      const result = employee.getName();

      expect(result).toEqual(name);
    });

    it("should return the id of the employee", () => {
      const employee = new Employee("Natalie", "27843", "natalie@bulger.org");
      const id = "27843";

      const result = employee.getId();

      expect(result).toEqual(id);
    });

    it("should return the email of the employee", () => {
      const employee = new Employee("Natalie", "27843", "natalie@bulger.org");
      const email = "natalie@bulger.org";

      const result = employee.getEmail();

      expect(result).toEqual(email);
    });

    it("should return the role of the employee", () => {
      const employee = new Employee("Natalie", "27843", "natalie@bulger.org");
      const role = "Employee";

      const result = employee.getRole();

      expect(result).toEqual(role);
    });
  });
});
