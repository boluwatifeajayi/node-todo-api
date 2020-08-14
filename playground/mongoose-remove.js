const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');
const {
    ObjectID
} = require('mongodb');

// Todo.remove({}).then((result) =>{
//     console.log(result)
// })

//Todo.findOneAndRemove
Todo.findOneAndRemove({
    _id: '5f362596383c9d11145a155c'
}).then((todo) => {
    console.log(todo);
})

//Todo.findByIdAndRemove

// Todo.findByIdAndRemove('5f362596383c9d11145a155c').then((todo) => {
//     console.log(todo);
// });