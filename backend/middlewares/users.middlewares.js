const Joi = require("joi");
const { userForRegisterDTO, userForLoginDTO } = require("../dto/users.dto");
const { passwordServices, jsonwebtokenServices } = require("../services/security.services");
const usersServices = require("../services/users.services");

class userMiddlewares{

    static isUserForRegisterOk(req,res,next){
        try {
            Joi.attempt(req.body.user,userForRegisterDTO);
            next();
        } catch (error) {
            console.log(error.message);
            return res.status(409).json({status : 409, message :'Hay algo mal con el registro'});
        }
    };

    static isUserForLoginOk(req,res,next){
        console.log(req.body.user);

        try {
            Joi.attempt(req.body.user,userForLoginDTO);
            next();
        } catch (error) {
            console.log(error.message);
            return res.status(409).json({status : 409, message :'Hay algo mal'});
        }
    };

    static async doesUserForRegistrationExist(req,res,next){
        try {
            let userExistUsername = await usersServices.getuserbyCriteria({username : req.body.user.username});
            let userExistMail = await usersServices.getuserbyCriteria({mail : req.body.user.mail});
            if(userExistUsername){
                return res.status(409).json({status : 409, message : 'Nombre de usuario ya ocupado'});
            }else if(userExistMail){
                return res.status(409).json({status : 409, message : 'Mail ya utilizado'});
            }else{
                next();
            }
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({status : 500, message : 'error'});
        }
    };

    static async doesUserForLoginExist(req,res,next){
        try {
            let userExistUsername = await usersServices.getuserbyCriteria({username : req.body.user.username});
            if(passwordServices.validatePassword(req.body.user.pass_word,userExistUsername.pass_word)){
                next();
            }else{
                return res.status(409).json({status : 409, message : 'Usuario o contraseña incorrectos'});
            }
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({status : 500, message : 'error'});
        }
    }

    static async areYouThisUser(req,res,next){
        try {
            let tokenreceived = jsonwebtokenServices.decryptToken(req.headers.authorization);
            if(req.query.idUser && tokenreceived.idUser === req.query.idUser){
                next();
            }else if(req.body.user && tokenreceived.idUser === req.body.user.idUser){
                next();
            }else{
                return res.status(409).json({status : 409, message : 'Usuario no corresponde'});
            }
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({status : 500, message : 'error'});
        }
    };


};

module.exports = userMiddlewares;