// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const savedData = fs.readFileSync("./db/db.json", "UTF-8");

if (savedData) {
    const savedNotes = JSON.parse(savedData);
    notes = savedNotes;
    IDNum();
}

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Get calls
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});
app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "db/db.json"))
});

// Create and post notes
app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    notes.push(newNote);
    IDNum();
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), function (err) {
        if (err) throw err
    });
});

// Delete notes
app.delete("/api/notes/:id", function (req, res) {
    const deletedNoteID = req.params.id;
    notes.splice((deletedNoteID - 1), 1);
    IDNum();
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), function(err) {
        if (err) throw err
    });
});

//Listening at PORT 3000 
app.listen(PORT, function () {
    console.log("App listening on: http://localhost:" + PORT);
});

function IDNum() {
    for (i = 0; i < notes.length; i++) {
        notes[i].id = (i + 1);
    }
}