var mongoose = require('mongoose');
// user model

var user = mongoose.model('user', {
    email: {
        type: String,
        //validators
        required: true,
        minlength: 1,
        trim: true //removes any white space
    }
});

// email - required - trim it - type sting - min lenght 1

// var john = new user({
//     email: 'John@gmail.com'
// });

// john.save().then((doc) => {
//     console.log('User added', doc)
// }, (e) => {
//     console.log("Unable to add user", e)
// });

module.export = {
    user: user
}
