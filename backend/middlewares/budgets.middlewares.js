const Joi = require("joi");
const budgetDTO = require("../dto/budgets.dto");
const budgetServices = require("../services/budget.services");
const { jsonwebtokenServices } = require("../services/security.services");
const usersServices = require("../services/users.services");

class budgetsMiddlewares{

    static isBudgetOk (req,res,next){

        try {
            Joi.attempt(req.body,budgetDTO);
            next();
        } catch (error) {
            console.log(error.message);
            return res.status(409).json({status : 409, message : 'El presupuesto tiene algo mal'});
        }
    }

    static async areYouAUserValid(req,res,next){
        try {
            let tokenreceived = jsonwebtokenServices.decryptToken(req.headers.authorization);
            let userFound = await usersServices.getuserbyCriteria({idUser : tokenreceived.idUser});
            if(userFound){
                next();
            }else{
                return res.status(409).json({status : 409, message : 'No autorizado'});
            }
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({status : 500, message : 'error'});
        }
    };

};


module.exports = budgetsMiddlewares;