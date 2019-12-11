// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var console_table = require("console.table");

// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "faster123",
  database: "employeemanager_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
    if (err) throw err;
    console.log("The Employee Manager");
    runSearch();
  });  

function runSearch() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Employees By Department",
            "View All Employess By Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager"
        ]
    }).then(function (answer) {
        switch (answer.action) {
            case "View All Employees":
                viewAll();
                break;

            case "View All Employees By Department":
                viewDepartment();
                break;

            case "View All Employees By Manager":
                viewManager();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Remove Employee":
                removeEmployee();
                break;

            case "Update Employee Role":
                updateRole();
                break;

            case "Update Employee Manager":
                updateManager();
                break;

            default: connection.end();
        }
    })
}

function viewAll() {
    connection.query("SELECT employee.first_name, employee.last_name, employee.roleid, roles.title, roles.departmentid, department.department_name, employee.managerid FROM employee INNER JOIN roles ON employee.roleid = roles.id INNER JOIN department ON department.id = roles.departmentid", function(err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
}

function viewDepartment() {
    inquirer.prompt([
        {
            type: "list",
            message: "Which department would you like to view?",
            name: "departmentSelection",
            choices: ["Sales", "Engineering", "Finance","Legal"]
        }
    ]).then(function (answer) {
        if (answer.department === "Sales" || "Engineering" || "Finance" || "Legal") {
            connection.query("SELECT employee.first_name, employee.last_name, roles.title, department.department_name FROM employee INNER JOIN roles ON employee.roleid = roles.id INNER JOIN department ON department.id = roles.departmentid WHERE department.department_name = ?", [answer.departmentSelection], function (err, res) {
                if (err) throw err;           
                console.table(res);
                runSearch();
            });
         }
    });
}

function viewManager() {
    connection.query("SELECT * FROM managerid", function(err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
}

function addEmployee() {
    inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "What is the employee's first name?"
        }, {
            name: "lastName",
            type: "input",
            message: "What is the employee's last name?"
        }, {
            name: "role",
            type: "list",
            message: "What is the employee's title?",
            choices: [
                "Sales Lead",
                "Salesperson",
                "Lead Engineer",
                "Software Engineer",
                "Accountant",
                "Legal Team Lead",
                "Lawyer"
            ]
        }, {
            name: "manager",
            type: "list",
            message: "Who is the manager?",
            choices: ["Kim Kicker", "Larry Lava", "Mary Microwave", "NA"]
        }
    ])
    .then(function (answer){
        var role_id;
        if (answer.role === "Sales Lead"){
            role_id = 1;
        }
        else if (answer.role === "Salesperson"){
            role_id = 2;
        }
        else if (answer.role === "Lead Engineer"){
            role_id = 3;
        }
        else if (answer.role === "Software Engineer"){
            role_id = 4;
        }
        else if (answer.role === "Accountant"){
            role_id = 5;
        }
        else if (answer.role === "Legal Team Lead"){
            role_id = 6;
        }
        else if (answer.role === "Lawyer"){
            role_id = 7;
        }

        var manager_id;
        if (answer.manager === "Kim Kicker"){
          manager_id = 1;
        }
        else if (answer.manager === "Larry Lava"){
          manager_id = 2;
        }
        else if (answer.manager === "Mary Microwave"){
            manager_id = 3;
        }
        else if (answer.manager === "NA"){
          manager_id = null;
        }
        
        connection.query("INSERT INTO employee SET ?",
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          roleid: role_id,
          managerid: manager_id
        },

        function (err, result){
          if (err) throw err;
          console.log("***** YOU JUST ADDED NEW EMPLOYEE *****");
          runSearch();
        });
    });
}

function removeEmployee() {
    inquirer.prompt([
        {
            name: "deleteEmployee",
            type: "input",
            message: "Type the employee ID of the employee you want to delete: "
        }
    ]).then(function(answer){

        var employee_id;
        if (answer.deleteEmployee === "1"){
            employee_id = 1;
        }
        else if (answer.deleteEmployee === "2"){
            employee_id = 2;
        }
        else if (answer.deleteEmployee === "3"){
            employee_id = 3;
        }
        else if (answer.deleteEmployee === "4"){
            employee_id = 4;
        }
        else if (answer.deleteEmployee === "5"){
            employee_id = 5;
        }
        else if (answer.deleteEmployee === "6"){
            employee_id = 6;
        }
        else if (answer.deleteEmployee === "7"){
            employee_id = 7;
        }
        else if (answer.deleteEmployee === "8"){
            employee_id = 8;
        }
        else if (answer.deleteEmployee === "9"){
            employee_id = 9;
        }
        else if (answer.deleteEmployee === "10"){
            employee_id = 10;
        }
        else if (answer.deleteEmployee === "16"){
            employee_id = 16;
        }
        else if (answer.deleteEmployee === "17"){
            employee_id = 17;
        }
        else if (answer.deleteEmployee === "18"){
            employee_id = 18;
        }
        else if (answer.deleteEmployee === "19"){
            employee_id = 19;
        }
        else if (answer.deleteEmployee === "20"){
            employee_id = 20;
        }

        connection.query("DELETE FROM employee WHERE ?", {id: employee_id}, function (err, res) {
            if (err) throw err;
            console.table(res);
            runSearch();
        });
    });
}

function updateRole() {
    connection.query("SELECT", function(err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
}

function updateManager() {
    connection.query("SELECT", function(err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
}