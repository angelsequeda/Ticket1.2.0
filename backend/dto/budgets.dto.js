const Joi = require("joi");

const budgetDTO = Joi.object({
    budget : Joi.object({project : Joi.string().required()}).required(),
    data : Joi.object({
        directcost : Joi.array().items(Joi.object({total : Joi.number().positive().required(), concept : Joi.string().required(),month: Joi.string().alphanum().required()})).required(),
        admincost : Joi.array().items(Joi.object({total : Joi.number().positive().required(), concept : Joi.string().required(),month: Joi.string().alphanum().required()})).required(),
        earnings : Joi.array().items(Joi.object({total : Joi.number().positive().required(), concept : Joi.string().required(),month: Joi.string().alphanum().required()})).required(),
        resources : Joi.array().items(Joi.object({concept : Joi.string().required(),month: Joi.string().alphanum().required(),porcentaje : Joi.number().positive().max(100).required(),cost : Joi.number().positive().required()}))
    })
});

module.exports = budgetDTO;