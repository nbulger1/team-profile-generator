// require inquirer
const inquirer = require("inquirer");
//require filesystem (fs) so we can read, write, append files
const fs = require("fs");

//Require the classes I've created
const Employee = require("./employee.js");
const Manager = require("./manager.js");
const Intern = require("./intern.js");
const Engineer = require("./engineer.js");

//Array of questions for the user
const questions = [
  {
    type: "input",
    message: "What is your company name?",
    name: "companyName",
  },
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the employee's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "email",
  },
  {
    type: "rawlist",
    message: "Is the employee a manager, intern, or engineer?",
    name: "employeeType",
    choices: ["manager", "engineer", "intern"],
  },
  {
    type: "input",
    message: "What is the intern's school?",
    name: "school",
    when: (response) => response.employeeType == "intern",
  },
  {
    type: "input",
    message: "What is the engineer's Github username?",
    name: "githubUsername",
    when: (response) => response.employeeType == "engineer",
  },
  {
    type: "input",
    message: "What is the engineer's Github URL?",
    name: "githubUrl",
    when: (response) => response.employeeType == "engineer",
  },
  {
    type: "input",
    message: "What is the manager's office number?",
    name: "officeNumber",
    when: (response) => response.employeeType == "manager",
  },
  {
    type: "confirm",
    message: "Are you done entering employees?",
    name: "anotherEmployee",
  },
];

//Make arrays to hold each type of employee
let internArray = [];
let managerArray = [];
let engineerArray = [];

//function to create the employee based on the answers to the employee type question
function createNewEmployee(response) {
  if (response.employeeType == "intern") {
    const intern = new Intern(
      response.name,
      response.id,
      response.email,
      response.school
    );
    internArray.push(intern);
    console.log(internArray);
  } else if (response.employeeType == "engineer") {
    const engineer = new Engineer(
      response.name,
      response.id,
      response.email,
      response.githubUsername,
      response.githubLink
    );
    engineerArray.push(engineer);
  } else if (response.employeeType == "manager") {
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNumber
    );
    managerArray.push(manager);
  }
}

//Three functions to create the template literal of HTML for the type of employee
function createManagerCard(managerArray) {
  const managerTemplateLits = managerArray
    .map((element) => {
      return `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">
                        <i style="font-size:24px" class="fa">&#xf0f4;</i>
                        Manager
                        </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            ID: ${element.id}
                        </li>
                        <li class="list-group-item">
                            Email: 
                            <a href="mailto:${element.email}" target="_blank">${element.email}</a>
                        </li>
                        <li class="list-group-item">
                        Office Number: ${element.officeNumber}
                        </li>
                    </ul>
                </div>`;
    })
    .join("");

  return managerTemplateLits;
}

function createEngineerCard(engineerArray) {
  const engineerTemplateLits = engineerArray
    .map((element) => {
      return `
              <div class="card" style="width: 18rem;">
                  <div class="card-body">
                      <h5 class="card-title">${element.name}</h5>
                      <p class="card-text">
                      <i style="font-size:24px" class="fa">&#xf530;</i>
                      Engineer
                      </p>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                          ID: ${element.id}
                      </li>
                      <li class="list-group-item">
                          Email: 
                          <a href="mailto:${element.email}" target="_blank" class="">${element.email}</a>
                      </li>
                      <li class="list-group-item">
                      Github: 
                      <a href="${element.githubLink}" target = "_blank">${element.githubUsername}</a>
                  </li>
                  </ul>
              </div>`;
    })
    .join("");

  return engineerTemplateLits;
}

function createInternCard(internArray) {
  const internTemplateLits = internArray
    .map((element) => {
      return `
              <div class="card" style="width: 18rem;">
                  <div class="card-body">
                      <h5 class="card-title">${element.name}</h5>
                      <p class="card-text">
                      <i style="font-size:24px" class="fa">&#xf19d;</i>
                      Intern
                      </p>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                          ID: ${element.id}
                      </li>
                      <li class="list-group-item">
                          Email: 
                          <a href="mailto:${element.email}" target="_blank">${element.email}</a>
                      </li>
                      <li class="list-group-item">
                          School: ${element.school}
                      </li>
                  </ul>
              </div>`;
    })
    .join("");

  return internTemplateLits;
}

//functions to return different cards for the manager, intern, and engineer then those can be called in the writeToHtml function

//function to write the HTML file
function writeToHtml(response) {
  const htmlFile = `
    <html lang="en-us"> 
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width">
            <title>Team Profile</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
          />
            <link rel="stylesheet" href="./assets/css/style.css">

        </head>

        <body>
            <header class="header">
                <h1>${response.companyName} Team</h1>
            </header>
            <div class="card-container">
                ${createManagerCard(managerArray)}
                ${createEngineerCard(engineerArray)}
                ${createInternCard(internArray)}
            </div>
        </body>
    </html>`;

  fs.writeFile(
    `${response.companyName.split(" ").join("")}.html`,
    htmlFile,
    function (err) {
      //if there is an error then console log the error otherwise console log "Success!"
      err ? console.log(err) : console.log("Success!");
    }
  );
}

// Function to initialize app that uses inquirer to prompt the question array and then use the response object to run the writeToFile function
function init() {
  return inquirer.prompt(questions).then((response) => {
    createNewEmployee(response);
    if (response.anotherEmployee) {
      writeToHtml(response);
    } else {
      return init();
    }
  });
}

init();
