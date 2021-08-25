const Joi = require("joi");
const budgetDTO = require("../dto/budgets.dto");

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
};


module.exports = budgetsMiddlewares;