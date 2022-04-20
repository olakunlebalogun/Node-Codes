// Module Importations
const express = require("express");
const app = express();
const connectDB = require("./connect");

const Animal = require("./models/animal");
const Player = require("./models/player");
// Connection Constants
const port = process.env.PORT || 9000;
const connectUrl = "mongodb://127.0.0.1:27017/mongoose-docs";

// ------------------ --- CODES  ---- --------------------------------

// 				SAVING TO DATABASE

// instanceAnimal
// 	.save()
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

//					 USING THE INSTANCE METHODS
// The implementation is in the Animal model imported as shown above.

// const rabbit = new Animal({
// 	name: "Rabbit",
// 	type: "Herbivorous",
// });

// rabbit.findSimilarTypes((err, result) => {
// 	console.log(result);
// });

//               	USING THE STATIC METHODS

// Animal.findByName("Lion")
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

//                  QUERY HELPER
// const playerOne = new Player({
// 	name: "Kylian Mbappe",
// 	age: 23,
// 	club: "PSG",
// });

// playerOne
// 	.save()
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

Player.find()
	.byClub("PSG")
	.exec((err, players) => {
		if (err) {
			console.log("An Error occurred");
		}
		console.log(players);
	});

// Starting Connection
const start = async () => {
	try {
		await connectDB(connectUrl);
		app.listen(port, () => {
			console.log(`Server is Listening on ${port}`);
		});
	} catch (err) {
		console.log(err);
	}
};

start();
