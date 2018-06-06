const express = require('express');
const CreateController = express.Router();
const {
	User,
	AccessToken,
	Recipe,
} = require('../models/index');
CreateController.post('/create', async (req, res) => {
	try {
		const token = await AccessToken.findById(req.headers.token);
		const user = await User.findById(token.userId);
		const {
			title,
			ingredients,
			description,
		} = req.body;
		const newRecipe = await Recipe.create({
			userId: user.id,
			title,
			ingredients,
			description
		});
		res.send(newRecipe);
	} catch (error) {
		console.log(error);
	}
});
module.exports = CreateController;