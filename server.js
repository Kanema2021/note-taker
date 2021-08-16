const express = require ('express');
// const uuid = require('uuid');
const path = require('path');
const fs = require('fs');
const notes = require('./db/db.json');
const { restart } = require('nodemon');

const PORT = 3000
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })) 
app.use(express.static('public'));


app.get("/api/notes", (req, res) => {
  res.status(200).send(notes);
})

app.post("/api/notes", (req, res) => {
  notes.push(req.body);
  notes.forEach((note, i) => {
  note.id = i + 1;
});

  fs.writeFile('./db/db.json', JSON.stringify(notes), function() {
    res.status(200).send(notes);
  });
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join
        (__dirname, '/public/notes.html'))
})

app.get('/', (req, res) => {   
    res.sendFile(path.join
      (__dirname, '/public/index.html'))
});

app.listen(PORT, () =>
    console.log(`app listening at http://localhost${PORT}`)
);











































    

