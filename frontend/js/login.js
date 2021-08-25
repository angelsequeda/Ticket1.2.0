import {frontValidations} from "./index.js"
import { API } from "./senddata.js";

let api = new API();

document.getElementById('startButton').addEventListener('click',async()=> {
    
    let user ={}
    user.username = document.getElementById('usernameLogin').value;
    user.pass_word = document.getElementById('passwordLogin').value;
    if(frontValidations.validationsLoginfromFront(user)){
        let login =await api.getToken(user);
        if(login.result){
           
            sessionStorage.setItem('userActive',login.result);
            window.open('../html/indexbudgin.html','_self');
        }else{
            alert(login.message);
        }
    }else{
        alert('Usuario o contraseña incorrectos');
    };
});

