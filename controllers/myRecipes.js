const express = require('express');
const MyRecipesController = express.Router();
const {
	User,
	AccessToken,
	Recipe,
} = require('../models/index');
MyRecipesController.get('/my-recipes', async (req, res) => {
	const token = await AccessToken.findById(req.headers.token);
	const user = await User.findById(token.userId);
	const myRecipe  = await Recipe.findAll({
		where:{
			userId: user.id,
		}
	});
	res.send(myRecipe);
});

module.exports = MyRecipesController;