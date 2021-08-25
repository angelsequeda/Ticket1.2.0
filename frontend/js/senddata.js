export class API{
    constructor(){
        this.address = "http://localhost:3000"
    }
    async getToken(user){
        console.log(this.address+"/login");
        let result = await fetch(this.address+"/login",{
            method : 'POST',
            headers : {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                user : user
            })
        });
        return result.json();
    };

    async registerUser(user){
        let result = await fetch(this.address + "/users",{
            method : 'POST',
            headers : {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                user : user
            })
        });
        return result.json();
    }

    async changePassword(user){
        let result = await fetch(this.address+'/users',{
            method : 'PUT',
            headers : {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
                "Authorization" : user.token
            },
            body : JSON.stringify({
                user : {idUser : user.idUser,pass_word : user.pass_word, username : user.username}
            })
        });
        return result.json();
    };

    async getAllBudgets(token){
        let result = await fetch(this.address+'/budgets/all',{
            method : 'GET',
            headers : {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
                "Authorization" : token
            },
        });
        return result.json()
    }
}