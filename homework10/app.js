const inquirer = require("inquirer");
const fs = require("fs");

function generateTeamMember() {
    return inquirer.prompt([{
            type: "list",
            message: "Who else would you like to add?",
            name: "teamMembers",
            choices: ["Engineer", "Intern", "No additional team members."]
        }]).then(function (answer) {
        switch (answer.teamMembers) {
            case "Engineer": generateEngineer();
                break;
            case "Intern": generateIntern();
                break;
            default:
                console.log("Thank you for putting your team together! *** Wrote to output/./index.html. ***");
                fs.appendFile("output/./index.html", "</div></div></body></html>", 
                (err) => {
                    if (err) 
                        throw err;
            });
        }
    })
}

function generateManager() {
    console.log("Manager's Information");
    return inquirer.prompt([
        {
            type: "input",
            message: "Manager name:",
            name: "managerName"
        }, {
            type: "input",
            message: "Manager employee ID:",
            name: "managerID"
        }, {
            type: "input",
            message: "Manager email address:",
            name: "managerEmail"
        }, {
            type: "input",
            message: "Manager office number:",
            name: "managerOffice"
        }
    ]).then(function ({managerName, managerID, managerEmail, managerOffice}) {
        generateTeamMember();
        fs.writeFile("output/./index.html", `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
            <title>Our People</title>
        </head>

        <body>

        <style>        
        body {
            background-position: center;
            background-repeat: no-repeat;
            background-image: url("../assets/keyboard.jpg");
            background-size: 1700px 1300px;
            font-family: 'Merriweather', serif;
          }
    
          body:after {
            content: "";
            position: absolute;
            background: white;
            opacity: 0.50;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width:100%;
            height:125%;
            z-index: -1;
          }
    
          .jumbotron {
            background: none;
            color: black;
            font-size: 100px;
            text-align: center;
            font-weight: bolder;
            text-shadow: 3px 3px 5px grey;
          }
    
          .card {
            padding: 6px;
            border-radius: 25px;
            border: 3px solid grey;
            box-shadow: 3px 3px 5px grey;
          }
    
          .card-name {
              font-size: 30px;
              text-align: center;
              font-weight: bolder;
          }
    
          .card-title {
            font-size: 24px;
            text-align: center;
          }
    
          .card-header {
            background-color: #c0a38b;
          }
          
          #managerCard {
            border-radius: 25px 25px 0px 0px;
            background-color: #c0a38b;
          }
    
          #engineerCard {
            border-radius: 25px 25px 0px 0px;
            background-color: #c0a38b;
          }
    
          #internCard {
            border-radius: 25px 25px 0px 0px;
            background-color: #c0a38b;
          }        
        </style>

        <div class="jumbotron jumbotron-fluid">
                <div class="container container-fluid">
                    Our People
                </div>
            </div>

    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                        <div class="card-header" id="managerCard">
                          <div class="card-name">${managerName}</div>
                          <p class="card-title"><i class=" fas fa-mug-hot "></i> Manager</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"><strong>ID</strong>: ${managerID}</li>
                          <li class="list-group-item"><strong>Email</strong>: ${managerEmail}</li>
                          <li class="list-group-item"><strong>Office Number</strong>: ${managerOffice}</li>
                        </ul>
    </div>
        </div>`, 
                
        (err) => {
            if (err) 
                throw err;
            })
    })
}

function generateEngineer() {
    console.log("Engineer's Information")
    return inquirer.prompt([
        {
            type: "input",
            message: "Engineer name:",
            name: "engineerName"
        }, {
            type: "input",
            message: "Engineer employee ID:",
            name: "engineerID"
        }, {
            type: "input",
            message: "Engineer email address:",
            name: "engineerEmail"
        }, {
            type: "input",
            message: "Engineer GitHub username:",
            name: "engineerGithub"
        }
    ]).then(function ({engineerName, engineerID, engineerEmail, engineerGithub}) {
        generateTeamMember();
        fs.appendFile("output/./index.html", `
        <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                        <div class="card-header" id="engineerCard">
                          <div class="card-name">${engineerName}</div>
                          <p class="card-title"><i class="fas fa-glasses"></i> Engineer</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"><strong>ID</strong>: ${engineerID}</li>
                          <li class="list-group-item"><strong>Email</strong>: ${engineerEmail}</li>
                          <li class="list-group-item"><strong>GitHub</strong>: ${engineerGithub}</li>
                        </ul>
            </div>
                </div>`, 
                (err) => {
                    if (err) 
                        throw err;
            })
    })
}

function generateIntern() {
    console.log("Intern's Information")
    return inquirer.prompt([
        {
            type: "input",
            message: "Intern name:",
            name: "internName"
        }, {
            type: "input",
            message: "Intern employee ID:",
            name: "internID"
        }, {
            type: "input",
            message: "Intern email address:",
            name: "internEmail"
        }, {
            type: "input",
            message: "Intern school:",
            name: "internSchool"
        }
    ]).then(function ({internName, internID, internEmail, internSchool}) {
        generateTeamMember();
        fs.appendFile("output/./index.html", `
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                        <div class="card-header" id="internCard">
                          <div class="card-name">${internName}</div>
                          <p class="card-title"><i class="fas fa-user-graduate"></i> Intern</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"><strong>ID</strong>: ${internID}</li>
                          <li class="list-group-item"><strong>Email</strong>: ${internEmail}</li>
                          <li class="list-group-item"><strong>School</strong>: ${internSchool}</li>
                        </ul>
                </div>
            </div>`, 
                (err) => {
                    if (err) 
                        throw err;
            })
    })
}

generateManager();