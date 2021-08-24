let {Model,DataTypes} =require('sequelize');
const sequelize = require('../db/connection');

class budgetModel extends Model {};

budgetModel.init( {

    idBudget: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },

    created : {
        type: DataTypes.DATE,
        allowNull: false
    },

    project: {
        type: DataTypes.STRING,
        allowNull: false
    },

    version: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    active: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'Budget',
    tableName: 'INDEXPRESUPUESTOS',
    timestamps: false,
    createdAt: false,
    updatedAt: false
})

budgetModel.sync();

module.exports = {budgetModel}