const express = require('express');
const bodyParser = require('body-parser');
const {
	User,
	AccessToken,
} = require('./models/index');
const app = express();
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true,
}));
app.post('/register', async (req, res) => {
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
app.post('/login', async (req, res) => {
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
app.post('/recipes', async (req, res) => {
	
});

app.put('/recipes/:recipesId', async (req, res) => {

});
app.delete('/recipes', async (req, res) => {

});
app.get('/recipes', async (req, res) => {

});
app.get('/recipes/my-recipes', async (req, res) => {

});

app.listen(8080, () => console.log('Example app listening on port 3000!'));