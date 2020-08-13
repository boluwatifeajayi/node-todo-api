const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongo db server');
    }
    console.log('connected to mongo db server');
    const db = client.db('TodoApp')

    //delete many
    // db.collection('Todo').deleteMany({text: 'Something to eat'}).then((result) => {
    //     console.log(result);
    // });

    // //delete one
    // db.collection('Todo').deleteOne({text: 'batman'}).then((result) => {
    //     console.log(result);
    // });

    //find one and delete
    // db.collection('Todo').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    


    //client.close();

});

