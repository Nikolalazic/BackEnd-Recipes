const Sequelize = require('sequelize');

module.exports = (sequelize) => {
	const Recipe = sequelize.define('Recipe', {
		userId: {
			type: Sequelize.UUID,
			allowNull: false,
		},
		title: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		ingredients: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
		description: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
	}, {});
	Recipe.associate = function (models) {
		const {
			User,
		} = models;

		Recipe.belongsTo(User);
		User.hasMany(Recipe);

	};
	return Recipe;
};