const express = require('express');
const DeleteController = express.Router();
// const {
// 	User,
// 	AccessToken,
// 	Recipe,
// } = require('../models/index');
DeleteController.delete('/delete/:recipesId', async (req, res) => {
	try {
		const token = await AccessToken.findById(req.headers.token);
		const user = await User.findById(token.userId);
		const recipe  = await Recipe.findById(req.params.recipesId);
		if(user.id === recipe.userId){
			await Recipe.destroy({
				where: {id: recipe.id},
			});
			res.send('Uspesno ste obrisali  ' + recipe.title)
		}else{
			res.send('Samo svoj recept mozes da obrisete');
		}
	} catch (error) {
		console.log(error);
	}
});
module.exports = DeleteController;