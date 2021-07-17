const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Movie = sequelize.define('Movie', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    sinopsis: {
        type: DataTypes.STRING,
        allowNull: false
    },

    score: {
        type: DataTypes.FLOAT,
        
    },

    releaseYear: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    genre: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {});

Movie.associate = function(models) {
    Movie.hasMany(models.Comment);
}


module.exports = Movie;
