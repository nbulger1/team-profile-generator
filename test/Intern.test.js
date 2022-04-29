const Intern = require("../lib/intern.js");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return the school of the intern", () => {
      const intern = new Intern("Natalie", "27843", "natalie@bulger.org", "UW");
      const school = "UW";

      const result = intern.getSchool();

      expect(result).toEqual(school);
    });

    it("should return the role of the employee", () => {
      const intern = new Intern("Natalie", "27843", "natalie@bulger.org", "UW");
      const role = "Intern";

      const result = intern.getRole();

      expect(result).toEqual(role);
    });
  });
});
