// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // identical with the above line
 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	const db = client.db('TodoApp') // updated in v3
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
	// how to fetch all documents using nodejs
	/* db.collection('Todos').find({
		_id: new ObjectID('5af7254db88ad9150c0e9a98')
		}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2)); // undefined is for filter function
	}, (err) => {
		console.log('Unable to fetch todos', err);		
	}); */

	// how to count all documents 
	db.collection('Users').find({name:'sojin'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
		/* console.log(`Todos count: ${count}`); */
	}, (err) => {
		console.log('Unable to fetch todos', err);		
	});
	// client.close();
});