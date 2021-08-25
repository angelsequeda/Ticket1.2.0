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
            body : {
                user
            }
        });
        return result.json();
    }
}