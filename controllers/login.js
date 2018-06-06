const express = require('express');
const LoginController = express.Router();
const {
	User,
	AccessToken,
	Recipe,
} = require('../models/index');
LoginController.post('/login', async (req, res) => {
	try {
		const {
			nickName,
			password,
		} = req.body;
		const user = await User.findOne({
			where: {
				nickName,
				password,
			},
		});
		if (!user) {
			return res.send('Pogresna sifra ili nick');
		}

		const accessToken = await AccessToken.create({
			userId: user.id,
		});
		res.send(accessToken);

	} catch (error) {
		console.log(error);
	}
});

module.exports = LoginController;