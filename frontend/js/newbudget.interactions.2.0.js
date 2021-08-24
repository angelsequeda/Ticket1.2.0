let months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
let months2 = [];
let months3 = [];
let num = 0;
let rowsinEarnings = 0;
let rowsinDirectcost = 0;
let rowsinAdmincost = 0;
let rowsinresources = 0;

import { functionsButtons} from "./index.js"


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
        months2=months2.slice(1);
        functionsButtons.addmonthcolumn(months2[0],num,rowsinEarnings,rowsinDirectcost,rowsinAdmincost,rowsinresources);

    }else {
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
    let r = window.confirm('¿Estas seguro de que tus datos son correctos?');
    if(r) {

        console.log('bien');
        if (rowsinDirectcost === 0 || rowsinAdmincost === 0 || rowsinresources === 0 || rowsinEarnings) {

            r = window.confirm('¿Seguro que desea guardar sin registrar alguno de los siguientes datos: \n Ingresos \n Costos directos \n Gastos administrativos \n Recursos?')

            if(r) {

                let result = await functionsButtons.saveEverythingandrun(rowsinEarnings,rowsinDirectcost,rowsinAdmincost,rowsinresources,num);
                alert(result);
                
            } 
            
        } else {

            let result = await functionsButtons.saveEverythingandrun(rowsinEarnings,rowsinDirectcost,rowsinAdmincost,rowsinresources,num);
            alert(result);
            window.open("../html/indexbudgin.html",'_self');

        }
        
    }
})

document.getElementById("buttonfinalcancel").addEventListener('click', ()=> {

    window.open("../html/indexbudgin.html","_self");
})
