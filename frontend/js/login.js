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
            
            sessionStorage.setItem('userActive',JSON.stringify(login.result));
            
            window.open('../html/indexbudgin.html','_self');
        }else{
            alert(login.message);
        }
    }else{
        alert('Usuario o contraseña incorrectos');
    };
});

document.getElementById('registerButton').addEventListener('click',async()=> {
    let user ={
        firstname: document.getElementById('firstname').value,
        secondname:  document.getElementById('secondname').value,
        firstlastname:  document.getElementById('firstlastname').value,
        secondlastname:  document.getElementById('secondlastname').value,
        mail:  document.getElementById('mail').value,
        pass_word:  document.getElementById('password').value,
        username:  document.getElementById('username').value
    };
    if(frontValidations.validationsRegisterfromFront(user)){
        if(frontValidations.passwordValidationSimilar(user.pass_word,document.getElementById('secondpassword').value)){
            let register = await api.registerUser(user);
            if(register.status === 200){
                alert('Usuario registrado, por favor inicie sesión');
            }else{
                alert(register.message);
                
            }
        }else{
            
            alert('Contraseñas no son iguales');
            document.getElementById('secondpassword').style.background = 'red';
        }
    }else{
        alert('Falta algún dato');
    }
});

document.getElementById('changerButton').addEventListener('click',async()=> {
    let username = document.getElementById('usernameChanger').value;
    let pass_word = document.getElementById('passwordChanger').value;
    let newPassword = document.getElementById('newpass_word').value;
    if(frontValidations.isdataEmpty(username) || frontValidations.isdataEmpty(pass_word) || frontValidations.isdataEmpty(newPassword)){
        alert('Falta algun dato');
    }else{
        let login = await api.getToken({username : username, pass_word : pass_word});
        if(login.result){
            let passwordChanged = await api.changePassword({idUser : login.result.idUser, pass_word : newPassword, token: login.result.token, username : username});
            if(passwordChanged.status === 200){
                alert('Contraseña cambiada');
            }else{
                alert(passwordChanged.message);
            }
        }else{
            alert(login.message);
        }
    }
})