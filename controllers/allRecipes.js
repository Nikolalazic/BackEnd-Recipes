const express = require('express');
const AllRecipesController = express.Router();
// const {
//  	User,
//  	AccessToken,
//  	Recipe,
//  } = require('../models/index');

AllRecipesController.get('/all-recipes', async (req, res) => {
	try {
		const allRecipes = await Recipe.findAll();

		res.send(allRecipes);
	}catch (error) {
		console.log(error);
	}
});
module.exports = AllRecipesController;