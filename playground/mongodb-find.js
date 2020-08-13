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
            //fetch 
            //  db.collection('Todos').find(/*{completed: false}*/).toArray().then((docs) => {
            //     console.log('Todos');
            //     console.log(JSON.stringify(docs, undefined, 2));
            //  }, (err) => {
            //      console.log("unable to fetch todos", err);
            //      //client.close();
            //  });

            //count todos
            db.collection('Todo').find( /*{completed: false}*/ ).count().then((count) => {
                console.log(`Todos counts: ${count}`);
                //console.log(JSON.stringify(docs, undefined, 2));
            }, (err) => {
                console.log("unable to fetch todos", err);
                //client.close();
            });

             

            });