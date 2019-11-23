function createHTML(data) {
    console.log(data)
    return `
    
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">    
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/css?family=Merriweather&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link rel="stylesheet" type="text/css" href="style.css">
        <title>Welcome to My Team</title>
    </head>

    <style>
    body {
        background-color: #f1f1f1;
        font-family: 'Merriweather', serif;
        width: 100%;
    }
    
    .jumbotron {
        background-color: #f05c5c;
        color: white;
        font-size: 48px;
        text-align: center;
    }
    
    .card {
        width: auto;
        box-shadow: 5px 5px 5px gray;
    }

    .cardHeader {
        text-align: center;
    }
    </style>
    
    <body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container container-fluid">
            My Team
        </div>
    </div>
    
    <div class="container">
        <div class="row" style="margin: 0 auto; margin-top: 50px;">
            <div class="col-lg-4">
                <div id="managerCard" class="card">
                    <div class="cardHeader" style="background-color: #406ff1; color:white">
                        Name: ${answers.managerName} <br>
                        <i class=" fas fa-mug-hot "></i> Manager
                    </div>
                    <ul class="list-group list-group-flush ">
                        <li class="list-group-item ">ID: ${answers.managerId}</li>
                        <li class="list-group-item ">Email: ${answers.managerEmail}</li>
                        <li class="list-group-item ">Office Number: ${answers.managerOffice}</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-4">
                <div id="engineerCard" class="card">
                    <div class="cardHeader" style="background-color: #406ff1; color:white;">
                        Name: ${answers.engineerName} <br>
                        <i class="fas fa-glasses"></i> Engineer
                    </div>
                    <ul class="list-group list-group-flush ">
                        <li class="list-group-item ">ID: ${answers.engineerId}</li>
                        <li class="list-group-item ">Email: ${answers.engineerEmail}</li>
                        <li class="list-group-item ">Github: ${data.response.username}</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="cardHeader" style="background-color: #406ff1; color:white;">
                        Name: ${answers.internName} <br>
                        <i class="fas fa-user-graduate"></i> Intern
                    </div>
                    <ul class="list-group list-group-flush ">
                        <li class="list-group-item ">ID: ${answers.internId}</li>
                        <li class="list-group-item ">Email: ${answers.internEmail}</li>
                        <li class="list-group-item ">School: ${answers.internSchool}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
                        
    </body>    
    </html>`;
  }

module.exports = createHTML;