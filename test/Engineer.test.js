const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return the github username of the engineer", () => {
      const engineer = new Engineer(
        "Natalie",
        "27843",
        "natalie@bulger.org",
        "nbulger1",
        "https://github.com/nbulger1"
      );
      const githubUsername = "nbulger1";

      const result = engineer.getGithubUsername();

      expect(result).toEqual(githubUsername);
    });

    it("should return the github URL of the engineer", () => {
      const engineer = new Engineer(
        "Natalie",
        "27843",
        "natalie@bulger.org",
        "nbulger1",
        "https://github.com/nbulger1"
      );
      const githubUrl = "https://github.com/nbulger1";

      const result = engineer.getGithub();

      expect(result).toEqual(githubUrl);
    });

    it("should return the role of the employee", () => {
      const engineer = new Engineer(
        "Natalie",
        "27843",
        "natalie@bulger.org",
        "nbulger1",
        "https://github.com/nbulger1"
      );
      const role = "Engineer";

      const result = engineer.getRole();

      expect(result).toEqual(role);
    });
  });
});
