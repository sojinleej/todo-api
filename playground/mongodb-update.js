// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // identical with the above line
 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	const db = client.db('TodoApp'); // updated in v3
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
/* 	db.collection('Users').findOneAndUpdate({
		name: 'devin'
		}, {
			$set: {
				name: 'sojin'
			},
			$inc: {
				age: 3
			}
		}, {
			returnOriginal: false
		}).then((result) => {
			console.log(result);
		}); */
// db.close();
		});