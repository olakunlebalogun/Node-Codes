const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 9000;
const start = async () => {
	try {
		await connectDB("mongodb://127.0.0.1:27017/03-task-manager");
		app.listen(port, () => {
			console.log(`Listening on port ${port}`);
		});
	} catch (err) {
		console.log(err);
	}
};

start();
