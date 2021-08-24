let {Model,DataTypes} =require('sequelize');
const sequelize = require('../db/connection');

class budgetModel extends Model {};

budgetModel.init( {
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true
    },
    idBudget: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },

    created : {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    project: {
        type: DataTypes.STRING,
        allowNull: false
    },

    version: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue : 1
    },

    active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue : 1
    }

}, {
    sequelize,
    modelName: 'Budget',
    tableName: 'BUDGETS',
    timestamps: false,
    createdAt: false,
    updatedAt: false
})

budgetModel.sync();

module.exports = {budgetModel}