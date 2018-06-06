const express = require('express');
const AllRecipesController = express.Router();
const {
 	User,
 	AccessToken,
 	Recipe,
 } = require('../models/index');

AllRecipesController.get('/all-recipes', async (req, res) => {

	const allRecipes = await Recipe.findAll();

	res.send(allRecipes);
});
module.exports = AllRecipesController;