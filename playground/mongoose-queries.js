
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const { ObjectID } = require('mongodb');

var id = '5f35907306486843dc247d28';

if(!ObjectID.isValid(id)){
    console.log('id is not valid')
}

// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo by id', todo);
}).catch((e) => console.log(e));