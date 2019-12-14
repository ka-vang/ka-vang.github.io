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
            "View All Employees By Role",
            "Add Employee",
            "Add Role",
            "Add Department",
            "Remove Employee",
            "Update Employee Role"
            // "Update Employee Manager"
        ]
    }).then(function (answer) {
        switch (answer.action) {
            case "View All Employees":
                viewAll();
                break;

            case "View All Employees By Department":
                viewDepartment();
                break;

            case "View All Employees By Role":
                viewRole();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Add Role":
                addRole();
                break;

            case "Add Department":
                addDepartment();
                break;

            case "Remove Employee":
                removeEmployee();
                break;

            case "Update Employee Role":
                updateRole();
                break;

            // case "Update Employee Manager":
            //     updateManager();
            //     break;

            default: connection.end();
        }
    })
}

// VIEW EMPLOYEES FUNCTION
function viewAll() {
    connection.query("SELECT employeeid, first_name, last_name, roleid, roles.title, roles.salary, roles.departmentid, department.department_name, managerid FROM employee INNER JOIN roles ON employee.roleid = roles.id INNER JOIN department ON department.id = roles.departmentid", function(err, res)
    {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
}

// VIEW DEPARTMENT FUNCTION
function viewDepartment() {
    inquirer.prompt([
        {
            name: "departmentSelection",
            type: "list",
            message: "Which department would you like to view?",
            choices: ["Sales", "Engineering", "Finance","Legal"]
        }
    ]).then(function(answer) {
        connection.query("SELECT employee.first_name, employee.last_name, roles.title, roles.salary, department.department_name FROM employee INNER JOIN roles ON employee.roleid = roles.id INNER JOIN department ON department.id = roles.departmentid WHERE department.department_name = ?", [answer.departmentSelection], function (err, res)
        {
            if (err) throw err;           
            console.table(res);
            runSearch();
        });       
    });           
}

// VIEW ROLES FUNCTION        
function viewRole() {
    inquirer.prompt([
        {
            name: "roleSelection",
            type: "list",
            message: "Which roles would you like to view?",
            choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Accountant", "Legal Team Lead", "Lawyer"]
        }
    ]).then(function(answer) {
        connection.query("SELECT first_name, last_name, roles.title, roles.salary, department.department_name FROM employee INNER JOIN roles ON employee.roleid = roles.id INNER JOIN department ON department.id = roles.departmentid WHERE roles.title = ?", [answer.roleSelection], function (err, res)
        {
            if (err) throw err;
            console.table(res);
            runSearch();
        });
    });
}

// ADD EMPLOYEES FUNCTION
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
                "Lawyer",
                "Human Resources Specialist"
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
        if (answer.role === "Sales Lead") {
            role_id = 1;
        }
        else if (answer.role === "Salesperson") {
            role_id = 2;
        }
        else if (answer.role === "Lead Engineer") {
            role_id = 3;
        }
        else if (answer.role === "Software Engineer") {
            role_id = 4;
        }
        else if (answer.role === "Accountant") {
            role_id = 5;
        }
        else if (answer.role === "Legal Team Lead") {
            role_id = 6;
        }
        else if (answer.role === "Lawyer") {
            role_id = 7;
        }
        else if (answer.role === "Human Resources Specialist"){
            role_id = 8;
        }

        var manager_id;
        if (answer.manager === "Kim Kicker") {
          manager_id = 1;
        }
        else if (answer.manager === "Larry Lava") {
          manager_id = 2;
        }
        else if (answer.manager === "Mary Microwave") {
            manager_id = 3;
        }
        else if (answer.manager === "NA") {
          manager_id = null;
        }
        
        connection.query("INSERT INTO employee SET ?", {first_name: answer.firstName, last_name: answer.lastName, roleid: role_id, managerid: manager_id}, function (err, result)
        {
          if (err) throw err;
          console.log("***** NEW EMPLOYEE ADDED *****");
          runSearch();
        });
    });
}

// ADD ROLES FUNCTION
function addRole() {
    deptArray = [];
    connection.query("SELECT id, department_name FROM department", function (err, result)
    {
        if (err) throw err;

        for (var i = 0; i < result.length; i++) {
            let depts = result[i].department_name;
            deptArray.push(depts);
        }
        inquirer.prompt([
            {
                name: "rolename",
                type: "input",
                message: "What is the name of the role?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the salary of the role?"
            },
            {
                name: "department",
                type: "list",
                message: "What is the department for this role?",
                choices: deptArray
            }
        ]).then(function (answer) {
            let deptID;
            for (var j = 0; j < result.length; j++) {
                if (result[j].department_name === answer.department) {
                    deptID = result[j].id;
                }
            }
            connection.query("INSERT INTO roles (title, salary, departmentid) VALUES (?, ?, ?)", [answer.rolename, answer.salary, deptID], function (err, result)
            {
                if (err) throw err;
                console.log("***** NEW ROLE ADDED *****");
                runSearch();
            })
        })
    })
}

// ADD DEPARTMENT FUNCTION
function addDepartment() {
    deptArray = [];
    connection.query("SELECT id, department_name FROM department", function (err, result)
    {
        if (err) throw err;

        for (var i = 0; i < result.length; i++) {
            let depts = result[i].department_name;
            deptArray.push(depts);
        }
        inquirer.prompt([
            {
                name: "department",
                type: "input",
                message: "What is the name of the department?",
            }
        ]).then(function (answer) {
            let deptID;
            for (var j = 0; j < result.length; j++) {
                if (result[j].department_name === answer.department) {
                    deptID = result[j].id;
                }
            }
            connection.query("INSERT INTO department (id, department_name) VALUES (?, ?)", [deptID, answer.department], function (err, result)
            {
                if (err) throw err;
                console.log("***** NEW DEPARTMENT ADDED *****");
                runSearch();
            })
        })
    })
}

// REMOVE EMPLOYEES FUNCTION
function removeEmployee() {
    inquirer.prompt([
        {
            name: "deleteEmployee",
            type: "input",
            message: "Type the employee ID of the employee you want to delete: "
        }
    ]).then(function(answer) {

        var employee_id;
        if (answer.deleteEmployee === "1") {
            employee_id = 1;
        }
        else if (answer.deleteEmployee === "2") {
            employee_id = 2;
        }
        else if (answer.deleteEmployee === "3") {
            employee_id = 3;
        }
        else if (answer.deleteEmployee === "4") {
            employee_id = 4;
        }
        else if (answer.deleteEmployee === "5") {
            employee_id = 5;
        }
        else if (answer.deleteEmployee === "6") {
            employee_id = 6;
        }
        else if (answer.deleteEmployee === "7") {
            employee_id = 7;
        }
        else if (answer.deleteEmployee === "8") {
            employee_id = 8;
        }
        else if (answer.deleteEmployee === "9") {
            employee_id = 9;
        }
        else if (answer.deleteEmployee === "10") {
            employee_id = 10;
        }
        else if (answer.deleteEmployee === "11") {
            employee_id = 11;
        }
        else if (answer.deleteEmployee === "12") {
            employee_id = 12;
        }
        else if (answer.deleteEmployee === "13") {
            employee_id = 13;
        }
        else if (answer.deleteEmployee === "14") {
            employee_id = 14;
        }
        else if (answer.deleteEmployee === "15") {
            employee_id = 15;
        }
        else if (answer.deleteEmployee === "16") {
            employee_id = 16;
        }
        else if (answer.deleteEmployee === "17") {
            employee_id = 17;
        }
        else if (answer.deleteEmployee === "18") {
            employee_id = 18;
        }
        else if (answer.deleteEmployee === "19") {
            employee_id = 19;
        }
        else if (answer.deleteEmployee === "20") {
            employee_id = 20;
        }

        connection.query("DELETE FROM employee WHERE ?", {employeeid: employee_id}, function (err, res)
        {
            if (err) throw err;
            console.table(res);
            console.log("***** EMPLOYEE DELETED *****");
            runSearch();
        });
    });
}

// UPDATE EMPLOYEE ROLE, DEPARTMENT ID, AND DEPARTMENT NAME
function updateRole() {
    employeeArray = [];
    employeeIDArray = [];
    roleArray = [];
    roleIDArray = [];
    deptArray = [];
    deptIDArray = [];

    connection.query("SELECT id, title FROM roles", function (err, result)
    {
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            let roles1 = result[i].title;
            let roleID1 = result[i].id;
            roleArray.push(roles1);
            roleIDArray.push(roleID1);
        }
    });

    connection.query("SELECT employeeid, first_name, last_name FROM employee", function (err, result)
    {
        if (err) throw err;
        for (var j = 0; j < result.length; j++) {
            let employee = result[j].first_name + " " + result[j].last_name;
            let employeeID1 = result[j].employeeid
            employeeArray.push(employee);
            employeeIDArray.push(employeeID1);
        }
    });

    connection.query("SELECT id, department_name FROM department", function (err, result)
    {
        if (err) throw err;

        for (var k = 0; k < result.length; k++) {
            let depts = result[k].department_name;
            let deptID = result[k].id;
            deptArray.push(depts);
            deptIDArray.push(deptID);
        }

        inquirer.prompt([
            {
                name: "rolename",
                type: "list",
                message: "Which employee's role are you changing?",
                choices: employeeArray
            },
            {
                name: "newrole",
                type: "list",
                message: "What is the employee's new role?",
                choices: roleArray
            },
            {
                name: "newdept",
                type: "list",
                message: "What is the new department?",
                choices: deptArray
            }
        ]).then(function (answer) {
                let roleID1;
                let employeeID1;
                let deptID;
                for (var l = 0; l < roleArray.length; l++) {
                    if (roleArray[l] === answer.newrole) {
                        roleID1 = roleIDArray[l];
                        break;
                    }
                }
                for (var m = 0; m < employeeArray.length; m++) {
                    if (employeeArray[m] === answer.rolename) {
                        employeeID1 = employeeIDArray[m];
                        break;
                    }
                }

            connection.query("UPDATE employee INNER JOIN roles ON employee.roleid = roles.id INNER JOIN department ON department.id = roles.departmentid SET roleid = ? WHERE employeeid = ?", [roleID1, employeeID1], function (err, result)
            {
                if (err) throw err;
                console.log("***** EMPLOYEE INFORMATION UPDATED *****");
                runSearch();
            });
         })
    })
}