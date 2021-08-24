const jsonwebtoken = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

class jsonwebtokenServices{

    static encryptToken(iduser,username){
        let token = jsonwebtoken.sign({iduser:iduser,username:username},process.env.tokensignature);
        return token;
    }

    static decryptToken(token){
        let tokenUncrypted = jsonwebtoken.verify(token,process.env.tokensignature);
    }

};


class randomNamesServices{

    static  giveMeArandomChain(size){
        let chain = crypto.randomBytes(size).toString('hex');
        return chain;
    }

    static givemeTodayDateISO(){
        let today = new Date();
        let today2 = new Date(today.toDateString());
        return today2.toISOString();
    }

    static givmeTodayNormal(){
        let today = new Date();
        let datecomplete = today.getFullYear().toString()+today.getMonth().toString()+today.getDate().toString();
        return datecomplete;
    }
};

class passwordServices{

    static encryptPassword(password){
        let newPassword = bcrypt.hashSync(password,10);
        return newPassword;
    }

    static validatePassword(password,passwordEncrypted) {
        let originalPassword = bcrypt.compare(password,password);
        return originalPassword;
    }
};

module.exports = {randomNamesServices,passwordServices,jsonwebtokenServices};