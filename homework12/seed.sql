INSERT INTO department (id,department_name) VALUES (1,"Sales");
INSERT INTO department (id,department_name) VALUES (2,"Engineering");
INSERT INTO department (id,department_name) VALUES (3,"Finance");
INSERT INTO department (id,department_name) VALUES (4,"Legal");

INSERT INTO roles (id,title,salary,departmentid) VALUES (1,"Sales Lead",100000,1);
INSERT INTO roles (id,title,salary,departmentid) VALUES (2,"Salesperson",80000,1);
INSERT INTO roles (id,title,salary,departmentid) VALUES (3,"Lead Engineer",150000,2);
INSERT INTO roles (id,title,salary,departmentid) VALUES (4,"Software Engineer",120000,2);
INSERT INTO roles (id,title,salary,departmentid) VALUES (5,"Accountant",125000,3);
INSERT INTO roles (id,title,salary,departmentid) VALUES (6,"Legal Team Lead",250000,4);
INSERT INTO roles (id,title,salary,departmentid) VALUES (7,"Lawyer",190000,4);

INSERT INTO employee (employeeid,first_name,last_name,roleid,managerid) VALUES (1,"Ali","Apple",1,1);
INSERT INTO employee (employeeid,first_name,last_name,roleid,managerid) VALUES (2,"Bruce","Banana",2,1);
INSERT INTO employee (employeeid,first_name,last_name,roleid,managerid) VALUES (3,"Carly","Cucumber",2,1);
INSERT INTO employee (employeeid,first_name,last_name,roleid,managerid) VALUES (4,"David","Dewberry",3,2);
INSERT INTO employee (employeeid,first_name,last_name,roleid,managerid) VALUES (5,"Elliott","Eggfruit",4,2);
INSERT INTO employee (employeeid,first_name,last_name,roleid,managerid) VALUES (6,"Francine","Fig",4,2);
INSERT INTO employee (employeeid,first_name,last_name,roleid,managerid) VALUES (7,"George","Grapes",4,2);
INSERT INTO employee (employeeid,first_name,last_name,roleid,managerid) VALUES (8,"Holly","Honeydew",5,null);
INSERT INTO employee (employeeid,first_name,last_name,roleid,managerid) VALUES (9,"Izzy","Imbe",6,3);
INSERT INTO employee (employeeid,first_name,last_name,roleid,managerid) VALUES (10,"Jackie","Jackfruit",7,3);