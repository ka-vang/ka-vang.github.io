const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const open = require("open");
const util = require("util");
const pdf = require('html-pdf');
const api = require("./api");
const generateHTML = require("./generateHTML");
// const electron = require("electron");

const prompt = [
    {
      type: "list",
      name: "color",
      message: "What is your favorite color?",
      choices: ["green", "blue", "pink", "red"]
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?"
    },
];

const writeFile = util.promisify(fs.writeFile);

function writetoFile(data, fileName) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(prompt)
        .then(({ github, color }) => {
            console.log("searching");
            api.getUser(github)
                .then(response =>
                    api.getStars(github)
                        .then(stars => {
                            console.log(github)
                            console.log(response)
                            return generateHTML({stars, color, response})
                        }
        ))
        .then(async function (html) {
            await writeFile("index.html", html);
            var readHtml = fs.readFileSync('index.html', 'utf8');
            // var paperSizeArray = ["A4", "A5"];
            var options = {
                // format: 'Letter',
                
                // landscape: false,
                // marginsType: 0,
                // printBackground: false,
                // printSelectionOnly: false,
            };
            pdf.create(readHtml, options).toFile('test.pdf', function(err, res) {
                if (err) return console.log(err);
                    console.log(res); 
                });     
            })
            .catch(function(error){
                console.log(error)
            })
        })
}

init();