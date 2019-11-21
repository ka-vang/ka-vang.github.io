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
        border-radius: 25px;
        background-color: grey;
        width: auto;
        left: 100px;
        padding: 10px;
        box-shadow: 1px 1px 5px black;
    }
    
    #profileImage {
        border-radius: 50%;
        border: solid 5px yellow;
        box-shadow: 1px 1px 5px black;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    
    h1 {
        color: white;
        text-align: center;
    }
    
    #bio {
        text-align: center;
        font-size: 24px;
        padding: 20px;
    }
    
    #contact {
        text-align: center;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    #nav-link {
        width: 140px;
    }
    
    .contactMe {
        color: white;
        text-align: center;
        margin-bottom: 20px;
    }
    
    #github {
        margin-right: 50px;
        margin-left: 25px;
    }
    
    .githubCard {
        width: auto;
        border-radius: 25px;
        background-color: grey;
        color: white;
        text-align: center;
        font-size: 30px;
        font-weight: bolder;
        margin-top: 10px;
        margin-right: 10px;
        margin-bottom: 50px;
        margin-left: 10px;
        padding: 25px;
        box-shadow: 1px 1px 5px black;
    }
    
    .githubData {
        font-size: 25px;
    }
    
    #pdf {
        color: black;
    }
    
    #footer {
        height: 500px;
        margin-bottom: 0;
    }
    </style>
    
    <body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container container-fluid">
            My Team
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <div class="githubCard">
                    <p class="githubData">${data.response.name}</p>
                    <p class="githubData">${createHTML.title}</p>
                </div>
                <div class="githubCard">
                    GitHub Stars
                    <p class="githubData">${data.response.stars ? `${data.response.stars}` : "None"}</p>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="githubCard">
                    Followers
                    <p class="githubData">${data.response.followers}</p>
                </div>
                <div class="githubCard">
                    Following
                    <p class="githubData">${data.response.following}</p>
                </div>
            </div>    
        </div>
    </div>

    <div class="jumbotron jumbotron-fluid" id="footer"></div>
                        
    </body>    
    </html>`;
  }

module.exports = createHTML;