export class API{

    static async getToken(user){

        let result = await fetch('http://localhost:3000/login',{
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
    }
}