INSERT INTO department (department_name,id) VALUES ("Sales",1);
INSERT INTO department (department_name,id) VALUES ("Engineering",2);
INSERT INTO department (department_name,id) VALUES ("Finance",3);
INSERT INTO department (department_name,id) VALUES ("Legal",4);

INSERT INTO roles (title,salary,id,departmentid) VALUES ("Sales Lead",100000,1,1);
INSERT INTO roles (title,salary,id,departmentid) VALUES ("Salesperson",80000,2,1);
INSERT INTO roles (title,salary,id,departmentid) VALUES ("Lead Engineer",150000,3,2);
INSERT INTO roles (title,salary,id,departmentid) VALUES ("Software Engineer",120000,4,2);
INSERT INTO roles (title,salary,id,departmentid) VALUES ("Accountant",125000,5,3);
INSERT INTO roles (title,salary,id,departmentid) VALUES ("Legal Team Lead",250000,6,4);
INSERT INTO roles (title,salary,id,departmentid) VALUES ("Lawyer",190000,7,4);

INSERT INTO employee (first_name,last_name,roleid,managerid,id) VALUES ("Ali","Apple",1,1,1);
INSERT INTO employee (first_name,last_name,roleid,managerid,id) VALUES ("Bruce","Banana",2,1,2);
INSERT INTO employee (first_name,last_name,roleid,managerid,id) VALUES ("Carly","Cucumber",2,1,3);
INSERT INTO employee (first_name,last_name,roleid,managerid,id) VALUES ("David","Dewberry",3,2,4);
INSERT INTO employee (first_name,last_name,roleid,managerid,id) VALUES ("Elliott","Eggfruit",4,2,5);
INSERT INTO employee (first_name,last_name,roleid,managerid,id) VALUES ("Francine","Fig",4,2,6);
INSERT INTO employee (first_name,last_name,roleid,managerid,id) VALUES ("George","Grapes",4,2,7);
INSERT INTO employee (first_name,last_name,roleid,managerid,id) VALUES ("Holly","Honeydew",5,null,8);
INSERT INTO employee (first_name,last_name,roleid,managerid,id) VALUES ("Izzy","Imbe",6,3,9);
INSERT INTO employee (first_name,last_name,roleid,managerid,id) VALUES ("Jackie","Jackfruit",7,3,10);