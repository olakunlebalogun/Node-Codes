const mongoose = require("mongoose");

const connectDB = async (url) => {
	// connection can be created by using connect() or createConnection()
	return mongoose.connect(url, {
		useNewUrlParser: true,
		// autoIndex : false // this help to shut indexes in the model, setting it to true reduce the performance of the model
	});

	// return mongoose.createConnection(url, {
	// 	useNewUrlParser: true,
	// 	// autoIndex : false // this help to shut indexes in the model, setting it to true reduce the performance of the model
	// });
};

module.exports = connectDB;
