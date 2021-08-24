const userModel = require("../models/user.model");
const { randomNamesServices } = require("./security.services");

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
                pass_word : user.pass_word
            });
            return {iduser : code, username : user.username};
        } catch (error) {
            console.log(error.message);
            throw new Error('[addnewuser]');
        }
    };


    static async updateUser(user){

        try {
            await userModel.update({
                mail : user.mail,
                pass_word : user.pass_word
            },{
                where : {iduser : user.iduser}
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
            let result = await userModel.findOne({where: criteriaDefault,attributes:{exclude:['active','id']}})
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
    }
};

module.exports = usersServices;