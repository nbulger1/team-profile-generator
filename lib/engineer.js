const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, githubUsername, githubUrl) {
    super(name, id, email);
    this.githubUsername = githubUsername;
    this.githubUrl = githubUrl;
  }

  getGithub() {
    console.log(this.githubUrl);
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
