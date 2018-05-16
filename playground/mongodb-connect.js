// const MongoClient = require('mongodb').MongoClient;
/* HOW TO DESTRUCT
var user = {name: 'sojin', age: 23};
var {name} = user; // destructure object
 */
const {MongoClient, ObjectID} = require('mongodb'); // identical with the above line
 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	const db = client.db('TodoApp') // updated in v3
	
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
	// insert new record into a collection
/* 	db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert todo', err); 
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	}); */
	
/* 	db.collection('Users').insertOne({
		name: 'sojin',
		age: 23,
		location: '123 Water Dr, Oakville, ON'
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert user', err);
		}
		console.log(result.ops[0]._id.getTimestamp());
	}); */
	
	client.close();
});