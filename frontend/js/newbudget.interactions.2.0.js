let months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
let months2 = [];
let months3 = [];
let num = 0;
let rowsinEarnings = 0;
let rowsinDirectcost = 0;
let rowsinAdmincost = 0;
let rowsinresources = 0;

import { Budget } from "./classes.js";
import { functionsButtons} from "./index.js"
import { API } from "./senddata.js";


document.getElementById('monthselect').addEventListener('change',()=> {

    for (let i = 1; i <= 8; i++) {
        document.getElementById(`table${i}head`).hidden = false;
        document.getElementById(`table${i}body`).hidden = false;
        
        if( i===1 ) {
            document.getElementById(`addcolumntable1`).hidden = false;
        } else if(i<=5){
            document.getElementById(`addrowtable${i}`).hidden = false;
            
        }
    }
    
    document.getElementById("readytable2").hidden = false;
    document.getElementById("readytable3").hidden = false;
    document.getElementById("table9body").hidden = false;
    document.getElementById("readytable4").hidden = false;
    document.getElementById("readytable5").hidden = false;
    document.getElementById("deletetable2").hidden = false;
    document.getElementById("deletetable3").hidden = false;
    document.getElementById("deletetable4").hidden = false;
    document.getElementById("deletetable5").hidden = false;
    document.getElementById("buttonfinalsave").hidden = false;
    document.getElementById("buttonfinalcancel").hidden = false;

    num+= 1
    functionsButtons.addmonthcolumn(document.getElementById("monthselect").value,num,0,0,0,0);
    document.getElementById("monthselect").disabled = true;
    months3.push(document.getElementById('monthselect').value);
    


    
    let index = months.findIndex((element) => {
        return element === document.getElementById('monthselect').value;
    });
    months2 = months.slice(index+1);


})

document.getElementById(`addcolumntable1`).addEventListener('click', ()=> {

    num+=1;
    
    
    if(months2.length===0){

        months2=months;
        functionsButtons.addmonthcolumn(months2[0],num,rowsinEarnings,rowsinDirectcost,rowsinAdmincost,rowsinresources);
        months3.push(months2[0])
    }else {
        months3.push(months2[0])
        functionsButtons.addmonthcolumn(months2[0],num,rowsinEarnings,rowsinDirectcost,rowsinAdmincost,rowsinresources);
        
        months2=months2.slice(1);
    }

})

document.getElementById("addrowtable2").addEventListener('click', ()=> {

    rowsinEarnings += 1;
    
    functionsButtons.addrowearnings(rowsinEarnings,num);
});

document.getElementById(`deletetable2`).addEventListener('click',()=> {
    functionsButtons.deleteearningrow(rowsinEarnings,num);
    rowsinEarnings-=1;
    
})

document.getElementById("addrowtable3").addEventListener("click", ()=> {

    rowsinDirectcost+=1;
    functionsButtons.addrowdirectcost(rowsinDirectcost,num);
    
    
})

document.getElementById(`deletetable3`).addEventListener('click',()=> {
    functionsButtons.deletedirectcostrow(rowsinDirectcost,num);
    rowsinDirectcost-=1;
    
})


document.getElementById("addrowtable4").addEventListener("click", ()=> {
    
    rowsinAdmincost += 1;
    functionsButtons.addrowsadmincost(rowsinAdmincost,num);
    
})

document.getElementById(`deletetable4`).addEventListener('click',()=> {
        
    functionsButtons.deleteadmincostrow(rowsinAdmincost,num);
    rowsinAdmincost-=1;
    
})


document.getElementById("addrowtable5").addEventListener("click", ()=> {

    rowsinresources +=1 ;
    functionsButtons.addrowsresources(rowsinresources,num);
    
})

document.getElementById('deletetable5').addEventListener('click',()=>{

    document.getElementById(`resourcesrow${rowsinresources}`).remove();
    document.getElementById(`resourcecostrow${rowsinresources}`).remove();
    document.getElementById(`resoucebalancerow${rowsinresources}`).remove();
    rowsinresources-=1;
    functionsButtons.buttonacceptresources(rowsinresources,num);
})

document.getElementById(`readytable2`).addEventListener('click', ()=> {
    functionsButtons.buttonsacceptearnings(rowsinEarnings,num);
})

document.getElementById(`readytable3`).addEventListener('click', ()=> {
    functionsButtons.buttonacceptdirectcost(rowsinDirectcost,num,rowsinAdmincost);
})

document.getElementById("readytable4").addEventListener('click', ()=> {
    functionsButtons.buttonacceptadmincost(rowsinAdmincost,num,rowsinDirectcost);
})

document.getElementById(`readytable5`).addEventListener('click', ()=> {
    functionsButtons.buttonacceptresources(rowsinresources,num)
})

document.getElementById("buttonfinalsave").addEventListener('click',async ()=> {

    if(rowsinEarnings === 0 && rowsinDirectcost === 0 && rowsinAdmincost === 0 && rowsinresources === 0){
        alert('No puedes guardar un presupuesto sin datos');
    }else{
        let r = window.confirm('¿Seguro que los datos ingresados son correctos?');
        if(r){
            let project = window.prompt('Ingrese nombre del proyecto');
            while(project.length === 0){
                project = window.prompt('Por favor ingrese el nombre del proyecto');
            };
            let budget = new Budget(project);
            let ind = true;
            for(let i = 1; i <= num; i++){
                if(ind){
                    for(let j = 1; j <= rowsinEarnings; j++){
                        let result = budget.addNewEarning(document.getElementById(`conceptearningsinput${j}`).value,document.getElementById(`earningsinput${j}${i}`).value,months3[i-1]);
                        if(!result){
                            document.getElementById(`earningsinput${j}${i}`).addEventListener('change',()=>{
                                document.getElementById(`earningrow${j}`).style.background = 'none';
                            });
                            alert('Hay algo mal con los ingresos');
                            document.getElementById(`earningrow${j}`).style.background = 'red';
                            ind = false;
                            break;
                        }
                    };
        
                    for(let j = 1; j <= rowsinDirectcost; j++){
                        let result = budget.addNewDirectcost(document.getElementById(`conceptdirectcostinput${j}`).value,document.getElementById(`directcostinput${j}${i}`).value,months3[i-1]);
                        if(!result){
                            document.getElementById(`directcostinput${j}${i}`).addEventListener('change',()=>{
                                document.getElementById(`directcostrow${j}`).style.background = 'none';
                            })
                            alert('Hay algo mal con los costos directos');
                            document.getElementById(`direccostrow${j}`).style.background = 'red';
                            ind = false;
                            break;
                        }
                    };
        
                    for(let j = 1; j <= rowsinAdmincost; j++){
                        let result = budget.addNewAdmincost(document.getElementById(`conceptadmincostinput${j}`).value,document.getElementById(`admincostinput${j}${i}`).value,months3[i-1]);
                        if(!result){
                            document.getElementById(`admincostinput${j}${i}`).addEventListener('change',()=>{
                                document.getElementById(`admincostrow${j}`).style.background = 'none';
                            });
                            alert('Hay algo mal con los costos administrativos');
                            document.getElementById(`admincostrow${j}`).style.background = 'red';
                            ind = false;
                            break;
                        }
                    };
        
                    for(let j=1; j <= rowsinresources; j++){
                        let result = budget.addNewResource(document.getElementById(`resourcesconceptinput${j}`).value,document.getElementById(`resourcecostinput${j}${i}`).value,document.getElementById(`resourcepercentinput${j}${i}`).value,months3[i-1]);
                        if(!result){
                            document.getElementById(`resourcepercentinput${j}${i}`).addEventListener('change',()=>{
                                document.getElementById(`resourcesrow${j}`).style.background = 'none';
                            });
                            alert('Hay algo mal con los recursos');
                            document.getElementById(`resourcesrow${j}`).style.background = 'red';
                            ind = false;
                            break;
                        }
                    }
                }else{
                    break;
                }
            }
            if(ind){
                console.log(budget);
                let response = await new API().saveBudget(JSON.parse(sessionStorage.getItem('userActive')).token,budget);
                console.log(response);
                if(response.status === 200){
                    alert('Presupuesto guardado');
                    window.open(`../html/indexbudgin.html`,'_self');
                }else{
                    alert(response.message);
                }
            }
        }
    }
});

document.getElementById("buttonfinalcancel").addEventListener('click', ()=> {

    window.open("../html/indexbudgin.html","_self");
})
