const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {});


User.associate = function(models) {
    User.hasMany(models.Comment);
    User.belongsToMany(models.Movie, {through: 'watched', as: 'watching', foreignKey: 'userId'})
}


module.exports = User;
