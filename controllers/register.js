const express = require('express');
const RegisterController = express.Router();
const {
	User
} = require('../models/index');
RegisterController.post('/register', async (req, res) => {
	try {
		const {
			fullName,
			nickName,
			email,
			password,
		} = req.body;
		const user = await User.create({
			fullName,
			nickName,
			email,
			password,
		});
		res.send(user);
	} catch (error) {
		console.log(error);
	}
});

module.exports = RegisterController;