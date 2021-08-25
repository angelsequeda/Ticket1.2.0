const usersServices = require("../services/users.services");

class userControllers{

    static async addNewUserController(req,res){
        try {
            let result = await usersServices.addNewUser(req.body.user);
            return res.status(200).json({status : 200, result : result});
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({status:500, message : 'error'});
        }
    };

    static async updateUserController(req,res){
        try {
            await usersServices.updateUser(req.body.user);
            return res.status(200).json({status:200, message : 'correcto'});
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({status:500, message : 'error'});
        }
    };

    static async getUserController(req,res){
        try {
            let result = await usersServices.getuserbyCriteria({idUser:req.query.idUser});
            result.pass_word = "";
            return res.status(200).json({status : 200, result : result});
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({status:500, message : 'error'});
        }
    };

    static async deleteUserController(req,res){
        try {
            await usersServices.deleteUser(req.body.user);
            return res.status(200).json({status:200,message : 'correcto'});
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({status:500, message : 'error'});
        }
    };

    static async loginController(req,res){
        try {
            let token = await usersServices.giveToken(req.body.user);
            return res.status(200).json({status : 200, result : token});
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({status : 500, message : 'error'});
        }
    }
}


module.exports = userControllers;