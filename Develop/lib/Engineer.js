const Employee = require("./Employee");
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
    getRole = () => {
      console.log("Engineer");
      return "Engineer";
    };
    getGithub = () => {
      console.log(this.github);
      return this.github;
    };
  }

  module.exports = Engineer;