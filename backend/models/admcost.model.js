let {Model,DataTypes,Deferrable} =require('sequelize');
const sequelize = require('../db/connection');
const { budgetModel } = require('./budget.model');

class admCostmodel extends Model{};

admCostmodel.init( {

    idBudget: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    version :{
        type : DataTypes.INTEGER,
        allowNull :false
    },
    concept: {

        type: DataTypes.STRING,
        allowNull: false
    },

    month: {
        type: DataTypes.STRING,
        allowNull:false
    },

    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},
{
    sequelize,
    modelName: 'admCost',
    tableName: 'GASTOSADMINISTRATIVOS',
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

admCostmodel.sync();

module.exports = admCostmodel;