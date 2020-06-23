// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the database');
  }
  console.log('Connected successfully to the database');
  const db = client.db('TodoApp');

  //   db.collection('Todos').insertOne(
  //     {
  //       text: 'blah blah blah',
  //       complete: false,
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log('Unable to insert todo', err);
  //       }
  //       console.log(JSON.stringify(result.ops, undefined, 2));
  //     }
  //   );

  db.collection('Users').insertOne(
    {
      name: 'Jamiu',
      age: 20,
      location: 'Lagos',
    },

    (err, result) => {
      if (err) {
        return console.log('Unable to insert data', err);
      }
      return console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );
  client.close();
});
