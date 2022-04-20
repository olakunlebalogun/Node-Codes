const mongoose = require("mongoose");
const { Schema } = mongoose;

const playerSchema = new Schema({
	name: {
		type: String,
		require: true,
	},

	age: {
		type: Number,
		require: true,
	},

	club: {
		type: String,
		require: true,
	},
});

playerSchema.query.byClub = function (club) {
	return this.where({ club: new RegExp(club, "i") });
};

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
