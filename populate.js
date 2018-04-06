import mongoose from 'mongoose';
import Recipe from 'recipe';

const recipe = [
	{
		title: 'Test recipe 1',
		ingredients: ['A','B','C'],
		steps: ['Step 1', 'Step 2', 'Step 3'],
		information: 'Test information',
		notes: 'Test notes'
	},
];

mongoose.connect('mongodb://localhost/recipes');

recipes.map(data => {
	const recipe = new Recipe(data);
	recipe.save();
});