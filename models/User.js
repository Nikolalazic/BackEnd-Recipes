const Sequelize = require('sequelize');

module.exports = (sequelize) => {
	const User = sequelize.define('User', {
		id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true,
		},
		fullName: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		nickName: {
			type: Sequelize.STRING,
			unique: true,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			unique: true,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	}, {});
	User.associate = function (models) {
		// associations can be defined here
	};
	return User;
};