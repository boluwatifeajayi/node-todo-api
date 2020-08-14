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
    const db = client.db('TodoApp');

    // db.collection('Todo').findOneAndUpdate({
    //     _id: new ObjectID('5f35728d383c9d11145a155a')
    // }, {
    //     $set: {
    //         text: 'dc fan'
    //     }
    //     }, {
    //         returnOriginal: false
    //     }
        
    // ).then((result) => {
    //     console.log(result)
    // })

    
    //client.close();

    

    db.collection('User').findOneAndUpdate({
        _id: new ObjectID('5f3575f5383c9d11145a155b')
    },{
       $inc: {
           age: +1  
       }
    

    }).then((result) => {
        console.log(result);
    })

});

