DROP DATABASE IF EXISTS employeemanager_db;
CREATE database employeemanager_db;

USE employeemanager_db;

CREATE TABLE department (
	id INT AUTO_INCREMENT NOT NULL,
	department_name VARCHAR(30) NULL,
    PRIMARY KEY(id)
);
    
CREATE TABLE roles (
	id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NULL,
    salary DECIMAL(10,2) NULL,
    departmentid INT NULL,
    PRIMARY KEY(id)
);
    
CREATE TABLE employee (
	id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    roleid INT NULL,
    managerid INT NULL,
    PRIMARY KEY(id)
);