const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Comment = sequelize.define('Comment', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    text: {
        type: DataTypes.STRING,
        allowNull: false
    },

    publicComment: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    score:{
        type: DataTypes.FLOAT,
        allowNull: false
    }

}, {});

Comment.associate = function(models) {
    Comment.belongsTo(models.User);
    Comment.belongsToMany(models.Movie);

}


module.exports = Comment;
