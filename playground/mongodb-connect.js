// const MongoClient = require('mongodb').MongoClient;

//destructuring
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
//destructuring
// var user = {name: 'bolu', age: 17};
// var {name} = user;

// console.log(name);

 MongoClient.connect('mongodb://localhost:27017/TodoApp', {useUnifiedTopology: true, useNewUrlParser:true}, (err, client) =>{
    if (err) {
       return console.log('Unable to connect to mongo db server');
    }
    console.log('connected to mongo db server');

    //insert into database
    const db = client.db('TodoApp')

     db.collection('Todo').insertOne({
        
        text: 'Something To Do',
        completed: false
    }, (err, result) =>{
        if (err) {
            return console.log('Unable to insert Todo');
        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
        client.close();
    });

   client.close();

});