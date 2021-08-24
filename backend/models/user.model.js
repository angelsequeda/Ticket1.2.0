const {DataTypes,Model} = require('sequelize');
class userModel extends Model{} ;
const sequelize = require('../db/connection')

userModel.init({

    firstname: {
        type: DataTypes.STRING,
        allowNull:false
    },

    secondname: {
        type: DataTypes.STRING,
        allowNull:true
    },

    firstlastname: {
        type: DataTypes.STRING,
        allowNull:false
    },

    secondlastname: {
        type: DataTypes.STRING,
        allowNull:false
    },

    mail: {
        type: DataTypes.STRING,
        allowNull: false
    },

    username: {
        type: DataTypes.STRING,
        allowNull:false,
        primaryKey: true
    },

    pass_word: {
        type: DataTypes.STRING,
        allowNull:false
    },

    active : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'USUARIOS',
    timestamps: false,
    createdAt: false,
    updatedAt: false
})

userModel.sync();
module.exports = userModel;