import { Budget } from "./classes.js";
import { Renderizer } from "./index.js";

let result = await Budget.searchAllBudgets();
console.log(result);
Renderizer.renderIndex(result);
Renderizer.activeButtonsIndex(result);


document.getElementById('newBudget').addEventListener('click', ()=> {
    window.open('../html/newbudget2.0.html','_self');
})