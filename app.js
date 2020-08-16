const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Validator = require("validator");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employees = []

function createEmployees() {
    return inquirer.prompt([
        {
            type: "list",
            name: "title",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ]);
}




const ManagerQuestions = [{
        name: 'name',
        message: 'what is the employee name',
        default: 'test',
    }, 
    {
        name: 'email',
        message: 'what is your employee email?',
        validate: function (value) {
            if (Validator.isEmail(value)) {
                return true;
            } else return "you did not enter a valid email"
        },
        default: 'test',
    },
    {
        name: 'id',
        message: 'What is the employee id number',
        default: 'test',
    }, 
    
    {
        name: "office number",
        message: 'What is the employee office number',
        default: 'test',
    },



];


const EngineerQuestions = [{
    name: 'name',
        message: 'what is the employee name',
        default: 'test',
    }, 
    {
        name: 'email',
        message: 'what is the employee email?',
        validate: function (value) {
            if (Validator.isEmail(value)) {
                return true;
            } else return "you did not enter a valid email"
        },
        default: 'test',
    },
    {
        name: 'id',
        message: 'What is the employee id number',
        default: 'test',
    }, 
    
    {
        name: "github",
        message: 'What is the employee github username',
        default: 'test',
    },
];

const InternQuestions = [{
    name: 'name',
        message: 'what is the employee name',
        default: 'test',
    }, 
    {
        name: 'email',
        message: 'what is the employee email?',
        validate: function (value) {
            if (Validator.isEmail(value)) {
                return true;
            } else return "you did not enter a valid email"
        },
        default: 'test',
    },
    {
        name: 'id',
        message: 'What is the employee id number',
        default: 'test',
    }, 
    
    {
        name: "school",
        message: 'What school is the employee going to',
        default: 'test',
    },
];

const continueOrEnd = [{
    type: "checkbox",
    message: " add more employees?",
    name : "choice",
    choice : ["true", "false"]
}

];

const typeOfMember = [{
    type: "checkbox",
    message: "what role would you like to add",
    name : "choice",
    choice : ["engineer", "intern"]
}

];




inquirer
    .prompt(ManagerQuestions)
    .then(answers => {
        console.info('Answer:', answers);
        console.log(answers);
        const newManager = new Manager(answers.name, answers.id, answers.email, answers["office number"])
        Employees.push(newManager)
        const html = render(Employees)
        fs.writeFile("temp.html", html, function (err) {
            if (err) throw err;
            console.log("wrote file")
        })
    })



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```