const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const RegisterController = require('./controllers/register');
const LoginController = require('./controllers/login');
const CreateController = require('./controllers/recipe');
const EditController = require('./controllers/editRecipe');
const DeleteController = require('./controllers/deleteRecipe');
const AllRecipesController = require('./controllers/allRecipes');
const MyRecipesController = require('./controllers/myRecipes');

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true,
}));


app.use('/user', RegisterController);
app.use('/user', LoginController);
app.use('/recipes', CreateController);
app.use('/recipes', EditController);
app.use('/recipes', DeleteController);
app.use('/recipes', AllRecipesController);
app.use('/recipes', MyRecipesController);

app.listen(8080, () => console.log('Example app listening on port 8080!'));