import { Budget } from "./classes.js";
import { Renderizer } from "./index.js";
import { API } from "./senddata.js";

let api = new API();
let userActive = JSON.parse(sessionStorage.getItem('userActive'));

let budgets = await api.getAllBudgets(userActive.token);
console.log(budgets);


if(budgets.result && budgets.result.length > 0){
    Renderizer.renderIndex(budgets.result);
}


document.getElementById('newBudget').addEventListener('click', ()=> {
    window.open('../html/newbudget2.0.html','_self');
})