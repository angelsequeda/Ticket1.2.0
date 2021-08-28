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


}




export class Budget{
    constructor(project){
        this.budget = {project : project},
        this.data = {directcost:[],admincost:[],resources:[],earnings:[]}
    }

    addNewDirectcost(concept,total,month){
        if(!frontValidations.isdataEmpty(month) && !frontValidations.isdataEmpty(total) && !frontValidations.isdataEmpty(month)){
            try {
                this.data.directcost.push({concept:concept,total:Number.parseFloat(total),month: month});
                return true;
            } catch (error) {
                console.log('Revisa que tus datos sean correctos');
                return false;
            }
        }else{
            console.log('faltan datos');
            return false;
        }
    };


    addNewAdmincost(concept,total,month){
        if(!frontValidations.isdataEmpty(month) && !frontValidations.isdataEmpty(total) && !frontValidations.isdataEmpty(month)){
            try {
                this.data.admincost.push({concept:concept,total:Number.parseFloat(total),month: month});
                return true;
            } catch (error) {
                console.log('Revisa que tus datos sean correctos');
                return false;
            }
        }else{
            console.log('faltan datos');
            return false;
        }
    }

    addNewEarning(concept,total,month){
        
        if(!frontValidations.isdataEmpty(month) && !frontValidations.isdataEmpty(total) && !frontValidations.isdataEmpty(month)){
            try {
                this.data.earnings.push({concept:concept,total:Number.parseFloat(total),month: month});
                return true;
            } catch (error) {
                console.log('Revisa que tus datos sean correctos');
                return false;
            }
        }else{
            console.log('faltan datos');
            return false;
        }
    }

    addNewResource(concept,cost,porcentaje,month){
        if(!frontValidations.isdataEmpty(month) && !frontValidations.isdataEmpty(cost) && !frontValidations.isdataEmpty(month) && !frontValidations.isdataEmpty(porcentaje)){
            try {
                this.data.resources.push({concept:concept,cost:Number.parseFloat(cost),month: month,porcentaje : Number.parseFloat(porcentaje)});
                return true;
            } catch (error) {
                console.log('Revisa que tus datos sean correctos');
                return false;
            }
        }else{
            console.log('faltan datos');
            return false;
        }
    }
}