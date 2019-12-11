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
    connection.query("SELECT * FROM employee", function(err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
}

function viewDepartment() {
    // if (err) throw err;
    inquirer.prompt([
        {
            type: "list",
            message: "Which department would you like to view?",
            name: "department",
            choices: ["Sales", "Engineering", "Finance","Legal"]
        }
    ]).then(function (answer) {
        var query = "SELECT department.departmentid, roles.departmentid, employee.roleid";
        query += "FROM department INNER JOIN roles ON (department.departmentid = roles.departmentid ";
        query += "FROM roles INNER JOIN employee ON (roles.roleid = employee.roleid ";

        // var query = "SELECT employeeid, first_name, last_name, roleid, managerid FROM employee";        
        connection.query(query, [answer.department, answer.department], function(err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log(
                    i+1 + ".) " +
                        "First Name: " + res[i].first_name +
                        "Last Name: " + res[i].last_name +
                        "Department ID: " + res[i].departmentid +
                        "Department: " + res[i].department
                );
            }
            runSearch();
        });
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
    connection.query("SELECT * FROM managerid", function(err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
}

function removeEmployee() {
    connection.query("SELECT * FROM managerid", function(err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
}

function updateRole() {
    connection.query("SELECT * FROM managerid", function(err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
}

function updateManager() {
    connection.query("SELECT * FROM managerid", function(err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
}