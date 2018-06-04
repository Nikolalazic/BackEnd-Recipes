const Sequelize = require('sequelize');

module.exports = (sequelize) => {
	const AccessToken = sequelize.define('AccessToken', {
		id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true,
		},
		userId: {
			type: Sequelize.UUID,
			allowNull: false,
		},
	});

	AccessToken.associate = function (models) {
		const {
			User,
		} = models;

		AccessToken.belongsTo(User);
		User.hasMany(AccessToken);
	};
	return AccessToken;
};