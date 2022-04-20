const mongoose = require("mongoose");

// mongo://IP-address:port/database
const connectDB = (url) => {
	return mongoose.connect(url, () => {
		useNewUrlParser = true;
	});
};

module.exports = connectDB;
