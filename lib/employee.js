const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    const name = this.name;
    return name;
  }

  getId() {
    const id = this.id;
    return id;
  }

  getEmail() {
    const email = this.email;
    return email;
  }

  getRole() {
    return "Employee";
  }
}

const employee = new Employee("Nat", "43242", "nat@gmail.com");

employee.getName();

module.exports = Employee;
