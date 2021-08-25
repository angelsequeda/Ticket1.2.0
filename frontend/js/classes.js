import {frontValidations} from './index.js'
export class User { 

    constructor(data){
        this.username = data.username,
        this.nombre1 = data.nombre1,
        this.nombre2 = data.nombre2,
        this.apellido1 = data.apellido1,
        this.apellido2 = data.apellido2,
        this.mail = data.mail,
        this.pass_word = data.pass_word
    }
    async searchForUser() {

        let result = await fetch('http://localhost:3000/users/myuser', {
            

            method:'POST',

            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },

            body: JSON.stringify({username: this.username, pass_word:this.pass_word})

        });

        let resultJSON = result.json();
        return resultJSON;
    }


    async registerUser() {

        let result = await fetch('http://localhost:3000/users/newuser', {
            method: 'POST',
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({

                nombre1: this.nombre1,
                nombre2: this.nombre2,
                apellido1: this.apellido1,
                apellido2: this.apellido2,
                username: this.username,
                pass_word: this.pass_word,
                mail: this.mail,
                activo: 1

            })
        })

        let resultJSON = result.json();
        return resultJSON;
    }

    async changePassword(newpass) {
        let result = await fetch('http://localhost:3000/users/changepass', {
            method: 'POST',
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({

                username: this.username,
                pass_word: this.pass_word,
                newpass_word : newpass
            })
        })
        let resultjson = result.json();
        return resultjson;
    }

    async startSession() {
        let result = await this.searchForUser();
        return result;
    }

}




export class Budget{
    constructor(project){
        this.budget = {project : project},
        this.data = {directcost:[],admincost:[],resources:[],earnings:[]}
    }

    addNewDirectcost(concept,total,month){
        this.data.directcost.push({concept,total,month});
    };


    addNewAdmincost(concept,total,month){
        if(typeof concept === 'string' && typeof total === "number" && typeof month === "string"){
            this.data.admincost.push({concept,total,month});
        }else{
            throw new Error('Datos no permitidos');
        }
    }

    addNewEarning(concept,total,month){
        if(typeof concept === 'string' && typeof total === "number" && typeof month === "string"){
            this.data.earnings.push({concept,total,month});
        }else{
            throw new Error('Datos no permitidos');
        }
    }

    addNewResource(concept,cost,porcentaje,month){
        this.data.resources.push({concept,cost,porcentaje,month})
    }
}