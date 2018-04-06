import mongoose, { Schema } from 'mongoose';

var recipeSchema = new Schema({
	title: {
		type: String,
		unique: true,
	},
	ingredients: Array,
	steps: Array,
	information: String,
	notes: String,
});

export default mongoose.model('recipe', recipeSchema);