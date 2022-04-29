const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    const officeNumber = this.officeNumber;
    return officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
