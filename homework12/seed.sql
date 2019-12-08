INSERT INTO department (department,departmentid) VALUES ("Sales",1);
INSERT INTO department (department,departmentid) VALUES ("Engineering",2);
INSERT INTO department (department,departmentid) VALUES ("Finance",3);
INSERT INTO department (department,departmentid) VALUES ("Legal",4);

INSERT INTO roles (title,salary,roleid,departmentid) VALUES ("Sales Lead",100000,1,1);
INSERT INTO roles (title,salary,roleid,departmentid) VALUES ("Salesperson",80000,2,1);
INSERT INTO roles (title,salary,roleid,departmentid) VALUES ("Lead Engineer",150000,3,2);
INSERT INTO roles (title,salary,roleid,departmentid) VALUES ("Software Engineer",120000,4,2);
INSERT INTO roles (title,salary,roleid,departmentid) VALUES ("Accountant",125000,5,3);
INSERT INTO roles (title,salary,roleid,departmentid) VALUES ("Legal Team Lead",250000,6,4);
INSERT INTO roles (title,salary,roleid,departmentid) VALUES ("Lawyer",190000,7,4);

INSERT INTO employee (first_name,last_name,roleid,managerid,employeeid) VALUES ("Ali","Apple",1,1,1);
INSERT INTO employee (first_name,last_name,roleid,managerid,employeeid) VALUES ("Bruce","Banana",2,null,2);
INSERT INTO employee (first_name,last_name,roleid,managerid,employeeid) VALUES ("Carly","Cucumber",2,2,3);
INSERT INTO employee (first_name,last_name,roleid,managerid,employeeid) VALUES ("David","Dewberry",3,3,4);
INSERT INTO employee (first_name,last_name,roleid,managerid,employeeid) VALUES ("Elliott","Eggfruit",4,null,5);
INSERT INTO employee (first_name,last_name,roleid,managerid,employeeid) VALUES ("Francine","Fig",4,4,6);
INSERT INTO employee (first_name,last_name,roleid,managerid,employeeid) VALUES ("George","Grapes",4,5,7);
INSERT INTO employee (first_name,last_name,roleid,managerid,employeeid) VALUES ("Holly","Honeydew",5,6,8);
INSERT INTO employee (first_name,last_name,roleid,managerid,employeeid) VALUES ("Izzy","Imbe",6,null,9);
INSERT INTO employee (first_name,last_name,roleid,managerid,employeeid) VALUES ("Jackie","Jackfruit",7,7,10);