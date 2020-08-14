var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//add todo
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

//get todos
app.get('/todos', (req, res) => {
    Todo.find().then((todos) =>{
        res.send({todos})
    }, (e) =>{
        res.status(400).send(e);
    })
})






app.listen(port, () => {
    console.log(`started on port ${port}`);
})






