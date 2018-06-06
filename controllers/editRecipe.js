const express = require('express');
const EditController = express.Router();
 const {
 	User,
 	AccessToken,
 	Recipe,
 } = require('../models/index');
EditController.put('/update/:recipesId', async (req, res) => {
	try{
		const token = await AccessToken.findById(req.headers.token);
		const user = await User.findById(token.userId);
		const {
			newTitle,
			newIngredients,
			newDescription
		} = req.body;
		const { recipesId } = req.params;
		const editRecipe = await Recipe.findOne({
			where:{id: recipesId}
		});
		if(user.id === editRecipe.userId) {
			if(newTitle){
				editRecipe.title = newTitle;
			}
			if(newIngredients){
				editRecipe.ingredients = newIngredients;
			}
			if(newDescription){
				editRecipe.description = newDescription;
			}
			editRecipe.save();
			res.send(editRecipe);
		}else{
			res.send('Mozes samo svoj recept da editujes.');
		}
	}catch (error) {
		console.log(error);
	}
});
module.exports = EditController;