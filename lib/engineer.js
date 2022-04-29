const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, githubUsername, githubUrl) {
    super(name, id, email);
    this.githubUsername = githubUsername;
    this.githubUrl = githubUrl;
  }

  getGithubUsername() {
    const username = this.githubUsername;
    return username;
  }

  getGithub() {
    const url = this.githubUrl;
    return url;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
