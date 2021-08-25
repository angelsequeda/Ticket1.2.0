const Joi = require("joi");

const userForRegisterDTO = Joi.object({
    firstname : Joi.string().alphanum().required(),
    secondname : Joi.string().alphanum(),
    firstlastname : Joi.string().alphanum().required(),
    secondlastname : Joi.string().alphanum().required(),
    mail : Joi.string().email().required(),
    username : Joi.string().alphanum().required().min(5).max(8),
    pass_word : Joi.string().pattern(new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{0,1000}$")).min(5).max(10).required()
});

const userForLoginDTO = Joi.object({
    username : Joi.string().alphanum().required().min(5).max(8),
    pass_word : Joi.string().pattern(new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{0,1000}$")).min(5).max(10).required()
});

module.exports = {userForLoginDTO,userForRegisterDTO}