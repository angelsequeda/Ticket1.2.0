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




export class Budget {
    constructor(data){
        this.id = data.id
    }

    static async searchAllBudgets() {

        let result =  await fetch("http://localhost:3000/budgets/consult", {
            method: 'GET',
        });
        return result.json();

    }
    async searchForBudget() {

        let result =  await fetch("http://localhost:3000/budgets/consultone", {
            method: 'POST',
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_presupuesto: this.id
            })
        });
        return result.json();

    }

    async addInfoBudget(budget, earnings,directcost,admincost,resources) {

        let result = await fetch("http://localhost:3000/budgets/addnew", {
            method: 'POST',
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify( {
                budget: budget,
                earnings: earnings,
                directcost: directcost,
                admincost: admincost,
                resources: resources
            })
        });

        return result.json();
    }

    async deleteBudget() {
        let result =  await fetch("http://localhost:3000/budgets/delete",{
            method:'POST',
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_presupuesto: this.id
            })
        });
        
        return result.json();
    }
}