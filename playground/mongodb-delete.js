// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // identical with the above line
 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	const db = client.db('TodoApp'); // updated in v3
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	// deleteMany
	/* db.collection('Users').deleteMany({name: 'sojin'}); */
	// deleteOne
	/* db.collection('Users').deleteOne({text: 'Eat lunch'}).then((result) => {
		console.log(result);
	}); */
	// findOneAndDelete
	/* db.collection('Users').findOneAndDelete({_id: new ObjectID('5af72d3697fa57060c26da57')
	}).then((result) => {
		console.log(JSON.stringify(results,undefined, 2));
	});
	 */
	// client.close();
});