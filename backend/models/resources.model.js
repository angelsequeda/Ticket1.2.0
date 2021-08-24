let {Model,DataTypes, Deferrable} =require('sequelize');
const sequelize = require('../db/connection');
const { budgetModel } = require('./budget.model');

class resourcesModel extends Model{};

resourcesModel.init( {

    idBudget: {
        type: DataTypes.STRING,
        allowNull: false
    },

    concept: {

        type: DataTypes.STRING,
        allowNull: false
    },
    version :{
        type : DataTypes.INTEGER,
        allowNull :false
    },
    month: {
        type: DataTypes.STRING,
        allowNull:false
    },

    porcentaje: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    cost: {
        type: DataTypes.FLOAT,
        allowNull:false
    }
},
{
    sequelize,
    modelName: 'Rersources',
    tableName: 'RECURSOS',
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

resourcesModel.sync();

module.exports = resourcesModel;