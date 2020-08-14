var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        //validators
        required: true,
        minlength: 1,
        trim: true //removes any white space
    },
    completed: {
        type: Boolean,
        //validators
        default: false
    },
    completedAt: {
        type: Number,
        //validators
        default: null
    }
});

module.exports = {
    Todo: Todo
}

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) =>{
//     console.log('Saved Todo', doc)
// }, (e) =>{
//     console.log("unable to save todo", e)
// });

// var anotherTodo = new Todo({
//     text: 'eat food',
//     completedAt: 830
// });

// anotherTodo.save().then((doc) => {
//     console.log('Todo added', doc)
// }, (e) => {
//     console.log("Unable to add todo", e)
// });


