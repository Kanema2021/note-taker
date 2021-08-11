const express = require ('express');
const path = require('path');
const fs = require('fs');
const notes = require('./db/db.json');
const { v4: uuidv4 } = require ('uuid');
uuidv4();

// const api = require ('.public/assets/js/index.js')
const mysql2 = require ('mysql2');
// const { userInfo } = require('os');

const PORT = 3000
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })) 
app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join
        (__dirname, 'public/notes.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join
        (__dirname, 'public/index.html'))
});



app.listen(PORT, () =>
    console.log(`app listening at http://localhost${PORT}`)
);
















// app.get('/api/notes', (req, res) => {
//     res.json(notes);
// });

//   app.post('/api/notes', (req, res) => {
//     notes.push(req.body);
//     res.json(true)
//   });





















    

