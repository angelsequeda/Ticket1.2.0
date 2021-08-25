const userModel = require("../models/user.model");
const { randomNamesServices, passwordServices, jsonwebtokenServices } = require("./security.services");

class usersServices{

    static async addNewUser(user){

        try {
            let code = randomNamesServices.giveMeArandomChain(10) + randomNamesServices.givmeTodayNormal();
            await userModel.create({
                idUser: code,
                firstname : user.firstname,
                secondname: user.secondname,
                firstlastname : user.firstlastname,
                secondlastname : user.secondlastname,
                mail : user.mail,
                username:user.username,
                pass_word : passwordServices.encryptPassword(user.pass_word)
            });
            return {idUser : code, username : user.username};
        } catch (error) {
            console.log(error.message);
            throw new Error('[addnewuser]');
        }
    };


    static async updateUser(user){

        try {
            await userModel.update({
                pass_word : passwordServices.encryptPassword(user.pass_word)
            },{
                where : {idUser : user.idUser}
            });
        } catch (error) {
            console.log(error.message);
            throw new Error('[updateuser]');
        }
    };

    static async getuserbyCriteria(criteria){
        try {
            let criteriaDefault = {active : 1};
            Object.keys(criteria).forEach((element)=> {
                criteriaDefault[element] = criteria[element];
            });
            
            let result = await userModel.findOne({where: criteriaDefault,attributes:{exclude:['active','id']},});
            return result;
        } catch (error) {
            console.log(error.message);
            throw new Error('[getuserCriteria]');
        };
    };

    static async deleteUser(user){
        try {
            await userModel.update({
                active : 0
            },{where : {idUser : user.idUser}});
        } catch (error) {
            console.log(error.message);
            throw new Error('[deleteUser]');
        }
    };

    static async giveToken(user){
        try {
            let userFound = await this.getuserbyCriteria({username : user.username});
            let token = jsonwebtokenServices.encryptToken(userFound.idUser,userFound.username);
            return {idUser : userFound.idUser,username : userFound.username, token:token};
        } catch (error) {
            console.log(error.message);
            throw new Error('[giveToken]');
        }
    }
};

module.exports = usersServices;