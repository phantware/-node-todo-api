const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the database');
  }
  console.log('Connected successfully to the database');

  client
    .collection('Todos')
    .find()
    .toArray()
    .then((result) => {
      console.log('Todo');
      console.log(JSON.stringify(result, undefined, 2));
    })
    .catch((err) => {
      console.log('Unable to fetch record from the database', err);
    });

  //   client.close();
});
