const mongoose = require("mongoose");
const { Schema } = mongoose;

const animalSchema = new Schema(
	{
		name: {
			type: String,
		},
		type: {
			type: String,
		},
	},
	{}
);

// CREATING INSTANCE METHODS
// Instance Methods, when creating an instance method make sure not to use an arrow function because it does not create a THIS binding

animalSchema.methods.findSimilarTypes = function (cb) {
	return mongoose.model("Animal").find({ type: this.type }, cb);
};

// CREATING STATIC METHODS --------------------------------
animalSchema.statics.findByName = function (name) {
	return this.find({ name: new RegExp(name, "i") });
};

const Animal = new mongoose.model("Animal", animalSchema);

module.exports = Animal;

// To set options, either use the second parameter in the schema or use set on the schema itself

// 1.

/**
 *
 *  const animalSchema = new Schema({
	name: {
		type: String,
	},
	type: {
		type: String,
	},
}, {
  optionsKeyOne : optionValueOne,
  optionValueTwo : optionValueTwo
});
 */

// or

//  animalSchema.set("optionKeyOne" , optionValueOne);
//  animalSchema.set("optionKeyTwo" , optionValueTwo);
