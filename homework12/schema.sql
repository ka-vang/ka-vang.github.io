DROP DATABASE IF EXISTS employeemanager_db;
CREATE database employeemanager_db;

USE employeemanager_db;

CREATE TABLE department (
	departmentid INT NOT NULL,
	department VARCHAR(30) NULL,
    PRIMARY KEY (departmentid)
    );
    
CREATE TABLE roles (
	roleid INT NOT NULL,
    title VARCHAR(30) NULL,
    salary DECIMAL(10,2) NULL,
    departmentid INT NULL,
    PRIMARY KEY(roleid)
    );
    
CREATE TABLE employee (
	employeeid INT NOT NULL,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    roleid INT NULL,
    managerid INT NULL,
    PRIMARY KEY(employeeid)
    );
    
    SELECT * FROM department;
    SELECT * FROM roles;
    SELECT * FROM employee;