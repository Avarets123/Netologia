const express = require('express');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json())

let notes = [];


app.post('/notes', (req, res) => {
    notes.push(req.body);
});

  
app.get('/notes', (req, res) => {
    res.json(notes);
});
 
   
app.delete('/notes:id', (req, res) => {
    let editNotes = notes.filter(el => el.id !== req.params.id);

        notes = editNotes

    res.json(notes); 
})



app.listen(7777, () => {
    console.log('http://localhost:7777');
})