import { Budget } from "./classes.js";

export class frontValidations {

    static  passwordValidationSimilar(password,passwordComprobation) {

        
        if( password === passwordComprobation) {

            return true;

        } else {

            return false;
        }

    }

    static  validationsRegisterfromFront(data) {
        if(!data.firstname || !data.firstlastname || !data.secondlastname || !data.username || !data.pass_word || !data.mail) {
            

            return false;

        }else {

            return true;

        }

    }

    static  validationsLoginfromFront(data) {

        if( !data.username || !data.pass_word) {

            return false;

        } else {

            return true;

        }

    };

    static isdataEmpty(data){
        if(!data || data ===""){
            return true;
        }else{
            return false;
        }
    }

    static isDataOfType(type,value){
        if(typeof value === type){
            return true;
        }else{
            return false;
        }
    }
    
}

export class Renderizer {

    constructor() {

        this.button = document.createElement('button');
    }
    
    static renderIndex(data) {
        let table = document.getElementById('bodyindex');
        data.forEach(element1 => {
            let file = document.createElement('tr');
            file.id = element1.idBudget;
            file.insertAdjacentHTML('afterbegin',`<td><p>${element1.id}</p></td><td><p>${element1.created}</p></td><td><p>${element1.project}</p></td><td><p>${element1.version}</p></td><td><button class ='btn btn-success' id='${element1.id}send'>Enviar</button></td><td><button class ='btn btn-info' id='${element1.id}edit'>Editar</button></td><td><button class ='btn btn-danger' id='${element1.id}delete'>Eliminar</button></td>`)
            table.appendChild(file);
            document.getElementById(`{element1.id}delete`).addEventListener('click',async()=> {

            })
        });
    }

    static activeButtonsIndex(data) {

        data.forEach(element => {

            document.getElementById(element.id_presupuesto+'send').addEventListener('click', ()=> {
                console.log(element.id_presupuesto);
            });
            document.getElementById(element.id_presupuesto+'edit').addEventListener('click', ()=> {
                console.log(element.id_presupuesto);
            });
            document.getElementById(element.id_presupuesto+'delete').addEventListener('click', ()=> {
                console.log(element.id_presupuesto);
            })
        });
    }
}







export class functionsButtons {


    static addmonthcolumn(month,num,rows1,rows2,rows3,rows4) {
        for (let i = 1; i <= 8; i++) {
            document.getElementById(`table${i}totalhead`).insertAdjacentHTML("beforebegin",`<th id="monthheadtable${i}${num}">${month}</th>`);
            if (i < 9 && i>1) {
                document.getElementById(`table${i}totalfile`).insertAdjacentHTML("beforeend",`<td id=totalpermonthtable${i}${num}><input disabled id="totalpermonthinputtable${i}${num}" value="0"></td>`)
            }
        }

        document.getElementById("totalsalestable8td").insertAdjacentHTML("beforebegin",`<td><input disabled type="text" id="totalsales${num}" value= "0"></td>`);
        document.getElementById("totalcosttable8td").insertAdjacentHTML("beforebegin",`<td><input disabled type="text" id="totalcost${num}" value = "0"></td>`);
        document.getElementById("totalmargintable8td").insertAdjacentHTML("beforebegin",`<td><input disabled type="text" id="totalmargin${num}" value="0"></td>`);
        
        document.getElementById(`totalearningstable1`).insertAdjacentHTML("beforebegin",`<td id="totalearningstable1${num}"><input disabled type="text" id="totalearningspermonthtable1${num}" value="0"> </td>`);
        document.getElementById(`totalexpensestable1`).insertAdjacentHTML("beforebegin",`<td id="totalearningstable1${num}"><input disabled type="text" id="totalexpensespermonthtable1${num}" value="0"> </td>`);
        document.getElementById(`totalacumulatedtable1`).insertAdjacentHTML("beforebegin",`<td id="totalearningstable1${num}"><input disabled type="text" id="totalacumulatedpermonthtable1${num}" value="0"> </td>`);
        document.getElementById(`totaltotaltable1`).insertAdjacentHTML("beforebegin",`<td id="totaltotaltable1${num}"><input disabled type="text" id="totaltotalpermonthtable1${num}" value="0"> </td>`);

        

        if (rows1 > 0) {
            for (let index = 1; index <= rows1; index++) {
                document.getElementById(`totalearningsperconcept${index}`).insertAdjacentHTML('beforebegin',`<td id= "earnings${index}${num}"><input type="text" id="earningsinput${index}${num}"  placeholder="Total del mes"></td>`);
            }
        }

        if (rows2 > 0) {
            for (let index = 1; index <= rows2; index++) {
                document.getElementById(`totaldirectcostperconcept${index}`).insertAdjacentHTML('beforebegin',`<td id= "earnings${index}${num}"><input type="text" id="directcostinput${index}${num}"  placeholder="Total del mes"></td>`)
                
            }            
        }

        if (rows3 > 0) {
            for (let index = 1; index <= rows2; index++) {
                document.getElementById(`totaladmincostperconcept${index}`).insertAdjacentHTML("beforebegin",`<td id="admincost${index}${num}"><input type="text" id="admincostinput${index}${num}"  placeholder="Total del mes"></td>`);
                
            } 
        }

        if (rows4 > 0) {
            for (let index = 1; index <= rows4; index++) {
                document.getElementById(`totalresourceperconcept${index}`).insertAdjacentHTML("beforebegin",`<td id="resource${index}${num}"><input type="text" id="resourcepercentinput${index}${num}" value="" placeholder="Total del mes"><input type="text" id="resourcecostinput${index}${num}"></td>`);
                document.getElementById(`totalresourcecostperconcept${index}`).insertAdjacentHTML("beforebegin",`<td id="resourcecost${index}${num}"><input disabled type="text" id="resourcecostnotoriginalinput${index}${num}"  placeholder="Total del mes"></td>`);
                document.getElementById(`totalresourcebalanceperconcept${index}`).insertAdjacentHTML("beforebegin",`<td id="resourcecost${index}${num}"><input disabled type="text" id="resourcebalanceinput${index}${num}"  placeholder="Total del mes"></td>`);
                
            } 
        }
        
    }

    static addrowearnings(rows,columns) {
        document.getElementById(`table2totalfile`).insertAdjacentHTML("beforebegin",`<tr id="earningrow${rows}"><td id="conceptearnings${rows}"><input id="conceptearningsinput${rows}" type="text" ></td><td id="totalearningsperconcept${rows}"><input type="text" id="totalearningsperconceptinput${rows}" disabled  ></td></tr>`);
        
        for (let index = 1; index <= columns; index++) {
            document.getElementById(`totalearningsperconcept${rows}`).insertAdjacentHTML("beforebegin",`<td id="earnings${rows}${index}"><input type="text" id="earningsinput${rows}${index}"  placeholder="Total del mes" ></td>`);
            
        }

    }

    static addrowdirectcost(rows,columns) {
        document.getElementById(`table3totalfile`).insertAdjacentHTML("beforebegin",`<tr id="direccostrow${rows}"><td id="conceptdirectcost${rows}"><input id="conceptdirectcostinput${rows}" type="text" ></td><td id="totaldirectcostperconcept${rows}"><input type="text" id="totaldirectcostperconceptinput${rows}" disabled ></td></tr>`);
        
        for (let index = 1; index <= columns; index++) {
            document.getElementById(`totaldirectcostperconcept${rows}`).insertAdjacentHTML("beforebegin",`<td id="directcost${rows}${index}"><input type="text" id="directcostinput${rows}${index}"  placeholder="Total del mes"></td>`);
            
        }
    }

    static addrowsadmincost(rows,columns) {
        document.getElementById(`table4totalfile`).insertAdjacentHTML("beforebegin",`<tr id="admincostrow${rows}"><td id="conceptadmincost${rows}"><input id="conceptadmincostinput${rows}" type="text" ></td><td id="totaladmincostperconcept${rows}"><input type="text" id="totaladmincostperconceptinput${rows}" disabled ></td></tr>`);
        
        for (let index = 1; index <= columns; index++) {
            document.getElementById(`totaladmincostperconcept${rows}`).insertAdjacentHTML("beforebegin",`<td id="admincost${rows}${index}"><input type="text" id="admincostinput${rows}${index}"  placeholder="Total del mes"></td>`);
            
        }
    }

    static addrowsresources(rows,columns) {
        document.getElementById(`table5totalfile`).insertAdjacentHTML("beforebegin",`<tr id="resourcesrow${rows}"><td id="resourcesconcept${rows}"><input id="resourcesconceptinput${rows}" type="text" ></td><td id="totalresourceperconcept${rows}"><input type="text" id="totalresourceperconcepttinput${rows}" disabled ></td></tr>`);
        document.getElementById(`table6totalfile`).insertAdjacentHTML("beforebegin",`<tr id="resourcecostrow${rows}"><td id="resoucecostconcept${rows}"><input disabled id="resoucecostconceptinput${rows}" type="text"></td><td id="totalresourcecostperconcept${rows}"><input  type="text" id="totalresourcecostperconceptinput${rows}" disabled></td></tr>`);
        document.getElementById(`table7totalfile`).insertAdjacentHTML("beforebegin",`<tr id="resoucebalancerow${rows}"><td id="resoucebalanceconcept${rows}"><input disabled id="resoucebalanceconceptinput${rows}" type="text"></td><td id="totalresourcebalanceperconcept${rows}"><input type="text" id="totalresourcebalanceperconceptinput${rows}" disabled ></td></tr>`);

        for (let index = 1; index <= columns; index++) {
            document.getElementById(`totalresourceperconcept${rows}`).insertAdjacentHTML("beforebegin",`<td id="resource${rows}${index}" ><input  type="text" id="resourcepercentinput${rows}${index}"   placeholder="%"><input type="text" id="resourcecostinput${rows}${index}"  placeholder ="Costos" ></td>`);
            document.getElementById(`totalresourcecostperconcept${rows}`).insertAdjacentHTML("beforebegin",`<td id="resourcecost${rows}${index}" ><input disabled type="text" id="resourcecostnotoriginalinput${rows}${index}"></td>`);
            document.getElementById(`totalresourcebalanceperconcept${rows}`).insertAdjacentHTML("beforebegin",`<td id="resourcecost${rows}${index}" ><input disabled type="text" id="resourcebalanceinput${rows}${index}"></td>`);
            
        }
    }

    static buttonsacceptearnings(rows,columns) {
        
        for( let j=1; j<=rows; j++) {
            let sumvertical = 0;

            for( let i=1; i<=columns; i++) {
                try {
                    sumvertical+= Number.parseFloat(document.getElementById(`earningsinput${j}${i}`).value);
                } catch (error) {
                    
                }
            }
            document.getElementById(`totalearningsperconceptinput${j}`).value = sumvertical;
        }
        let sumtotal = 0;
        for( let j=1; j<=columns; j++) {
            let sumvertical = 0;
            for( let i=1; i<=rows; i++) {
                try {
                    sumvertical+= Number.parseFloat(document.getElementById(`earningsinput${i}${j}`).value);
                } catch (error) {
                    
                }
            }
            sumtotal+= sumvertical;
            document.getElementById(`totalpermonthinputtable2${j}`).value = sumvertical;
            document.getElementById(`totalearningspermonthtable1${j}`).value =Number.parseFloat(document.getElementById(`totalearningspermonthtable1${j}`).value) + sumvertical;
            
        }
        document.getElementById(`totalearningstable1input`).value = sumtotal;
        this.actualtotalCashflow(columns);
    }
    
    static deleteearningrow(rows,columns) {
        for( let i=1; i<=columns; i++) {
            document.getElementById(`totalearningspermonthtable1${i}`).value = Number.parseFloat(document.getElementById(`totalearningspermonthtable1${i}`).value)-Number.parseFloat(document.getElementById(`earningsinput${rows}${i}`).value)
        }
        document.getElementById(`earningrow${rows}`).remove();
        this.buttonsacceptearnings(rows-1,columns);
        this.actualtotalCashflow(columns);
    }

    static buttonacceptdirectcost(rows,columns,rowsinadmincost) {
        

        for( let j=1; j<=rows; j++) {
            let sumvertical = 0;

            for( let i=1; i<=columns; i++) {
                try {
                    sumvertical+= Number.parseFloat(document.getElementById(`directcostinput${j}${i}`).value);
                } catch (error) {
                    
                }
            }
            document.getElementById(`totaldirectcostperconceptinput${j}`).value = sumvertical;
        }
        let sumtotal = 0;
        for( let j=1; j<=columns; j++) {
            let sumvertical = 0;
            for( let i=1; i<=rows; i++) {
                try {
                    sumvertical+= Number.parseFloat(document.getElementById(`directcostinput${i}${j}`).value);
                } catch (error) {
                    
                }
            }
            sumtotal+= sumvertical;
            if (rowsinadmincost >0 ) {
                document.getElementById(`totalexpensespermonthtable1${j}`).value =Number.parseFloat(document.getElementById(`totalpermonthinputtable4${j}`).value) + sumvertical;
            }else {
                document.getElementById(`totalexpensespermonthtable1${j}`).value =  sumvertical;
            }
            document.getElementById(`totalpermonthinputtable3${j}`).value = sumvertical;
            
            
        }
        document.getElementById(`totalexpesenstable1input`).value = sumtotal;
        this.actualtotalCashflow(columns);
    }

    static deletedirectcostrow(rows,columns) {
        for( let i=1; i<=columns; i++) {
            document.getElementById(`totalexpensespermonthtable1${i}`).value = Number.parseFloat(document.getElementById(`totalexpensespermonthtable1${i}`).value)-Number.parseFloat(document.getElementById(`directcostinput${rows}${i}`).value)
        }
        document.getElementById(`direccostrow${rows}`).remove();
        this.buttonacceptdirectcost(rows-1,columns);
        this.actualtotalCashflow(columns);
    }

    static buttonacceptadmincost(rows,columns,rowsindirectcost) {
        
     
        for( let j=1; j<=rows; j++) {
            let sumvertical = 0;

            for( let i=1; i<=columns; i++) {
                try {
                    sumvertical+= Number.parseFloat(document.getElementById(`admincostinput${j}${i}`).value);
                } catch (error) {
                    
                }
            }
            document.getElementById(`totaladmincostperconceptinput${j}`).value = sumvertical;
        }
        let sumtotal = 0;
        for( let j=1; j<=columns; j++) {
            let sumvertical = 0;
            for( let i=1; i<=rows; i++) {
                try {
                    sumvertical+= Number.parseFloat(document.getElementById(`admincostinput${i}${j}`).value);
                } catch (error) {
                    
                }
            }
            sumtotal+= sumvertical;
            if(rowsindirectcost >0 ){
                console.log('cool');
                document.getElementById(`totalexpensespermonthtable1${j}`).value =Number.parseFloat(document.getElementById(`totalpermonthinputtable3${j}`).value) + sumvertical;
            } else {
                document.getElementById(`totalexpensespermonthtable1${j}`).value = sumvertical;
            }
            document.getElementById(`totalpermonthinputtable4${j}`).value = sumvertical;
            
            
        }
        document.getElementById(`totalexpesenstable1input`).value = sumtotal;
        this.actualtotalCashflow(columns);
    }

    static deleteadmincostrow(rows,columns) {
        for( let i=1; i<=columns; i++) {
            document.getElementById(`totalexpensespermonthtable1${i}`).value = Number.parseFloat(document.getElementById(`totalexpensespermonthtable1${i}`).value)-Number.parseFloat(document.getElementById(`admincostinput${rows}${i}`).value)
        }
        document.getElementById(`admincostrow${rows}`).remove();
        this.buttonacceptadmincost(rows-1,columns)
        this.actualtotalCashflow(columns);
    }

    static actualtotalCashflow(columns) {
        let sumtotal = 0;
        for(let i = 1; i<=columns; i++){
            document.getElementById(`totaltotalpermonthtable1${i}`).value = Number.parseFloat(document.getElementById(`totalearningspermonthtable1${i}`).value)-Number.parseFloat(document.getElementById(`totalexpensespermonthtable1${i}`).value);
            sumtotal+= Number.parseFloat(document.getElementById(`totaltotalpermonthtable1${i}`).value);
            if (i>1) {
                document.getElementById(`totalacumulatedpermonthtable1${i}`).value = Number.parseFloat(document.getElementById(`totaltotalpermonthtable1${i}`).value) + Number.parseFloat(document.getElementById(`totalacumulatedpermonthtable1${i-1}`).value)
            } 
            document.getElementById(`totalsales${i}`).value = document.getElementById(`totalpermonthinputtable2${i}`).value;
            document.getElementById(`totalcost${i}`).value = document.getElementById(`totalexpensespermonthtable1${i}`).value;
            document.getElementById(`totalmargin${i}`).value =  document.getElementById(`totaltotalpermonthtable1${i}`).value 
            if(Number.parseFloat(document.getElementById(`totalmargin${i}`).value) < 0) {
                document.getElementById(`totalmargin${i}`).style = "color: red"
            }
            
            
        }
        document.getElementById(`totaltotaltable1input`).value= sumtotal;
        document.getElementById(`totalsalestable8`).value = document.getElementById(`totalearningstable1input`).value;
        document.getElementById(`totalcosttable8`).value = document.getElementById(`totalexpesenstable1input`).value;
        document.getElementById(`totalmargintable8`).value = sumtotal;
        if (Number.parseFloat(document.getElementById(`totalearningstable1input`).value)%1 === 0) {
            document.getElementById(`resumesells`).value ="$ "+ document.getElementById(`totalearningstable1input`).value; + ".00"
        } else {
            document.getElementById(`resumesells`).value ="$ "+ document.getElementById(`totalearningstable1input`).value;
        }

        if (Number.parseFloat(document.getElementById(`totalexpesenstable1input`).value)%1 === 0) {
            document.getElementById(`resumecost`).value ="$ "+ document.getElementById(`totalexpesenstable1input`).value; + ".00"
        } else {
            document.getElementById(`resumecost`).value ="$ "+ document.getElementById(`totalexpesenstable1input`).value;
        }

        if (Number.parseFloat(document.getElementById(`totalmargintable8`).value)%1 === 0) {
            document.getElementById(`resumemargin`).value ="$ "+ document.getElementById(`totalmargintable8`).value + ".00";
        } else {
            document.getElementById(`resumemargin`).value ="$ "+ document.getElementById(`totalmargintable8`).value;
        }

        if (Number.parseFloat(document.getElementById(`totalmargintable8`).value) < 0) {
            document.getElementById(`resumemargin`).style = "color: red";
        }
        if( Number.parseFloat(document.getElementById(`totalmargintable8`).value) !== 0 && Number.parseFloat(document.getElementById(`totalearningstable1input`).value ) !== 0)  {
            document.getElementById(`resumepercent`).value = 100*(Number.parseFloat(document.getElementById(`totalmargintable8`).value) / Number.parseFloat(document.getElementById(`totalearningstable1input`).value)) + "%";
        } else {
            document.getElementById(`resumepercent`).value = "0 % ";
        }
        
    } 

    static buttonacceptresources(rows,columns) {
        
     
        for( let j=1; j<=rows; j++) {
            let sumvertical = 0;
            let sumvertical2 = 0;
            document.getElementById(`resoucecostconceptinput${j}`).value = document.getElementById(`resourcesconceptinput${j}`).value;
            document.getElementById(`resoucebalanceconceptinput${j}`).value = document.getElementById(`resourcesconceptinput${j}`).value;
            
            for( let i=1; i<=columns; i++) {
                try {
                    sumvertical+= Number.parseFloat(document.getElementById(`resourcepercentinput${j}${i}`).value)*Number.parseFloat(document.getElementById(`resourcecostinput${j}${i}`).value)/100;
                    sumvertical2+= Number.parseFloat(document.getElementById(`resourcecostinput${j}${i}`).value);
                    document.getElementById(`resourcecostnotoriginalinput${j}${i}`).value = document.getElementById(`resourcecostinput${j}${i}`).value;
                    
                } catch (error) {
                    
                }
            }
            document.getElementById(`totalresourceperconcepttinput${j}`).value = sumvertical;
            document.getElementById(`totalresourcecostperconceptinput${j}`).value = sumvertical2;
            document.getElementById(`totalresourcebalanceperconceptinput${j}`).value = document.getElementById(`totalresourceperconcepttinput${j}`).value
        }
        for( let j=1; j<=columns; j++) {
            let sumvertical = 0;
            let sumvertical2 = 0;
            for( let i=1; i<=rows; i++) {
                try {
                    sumvertical+= Number.parseFloat(document.getElementById(`resourcepercentinput${i}${j}`).value)*Number.parseFloat(document.getElementById(`resourcecostinput${i}${j}`).value)/100;
                    document.getElementById(`resourcebalanceinput${i}${j}`).value = Number.parseFloat(document.getElementById(`resourcepercentinput${i}${j}`).value)*Number.parseFloat(document.getElementById(`resourcecostinput${i}${j}`).value)/100 ;
                    resourcebalanceinput11
                    sumvertical2+= Number.parseFloat(document.getElementById(`resourcecostinput${i}${j}`).value);
                } catch (error) {
                    
                }
            }
            document.getElementById(`totalpermonthinputtable5${j}`).value = sumvertical;
            document.getElementById(`totalpermonthinputtable6${j}`).value = sumvertical2;
            document.getElementById(`totalpermonthinputtable7${j}`).value = document.getElementById(`totalpermonthinputtable5${j}`).value
            
            
            
        }
    }

    

    static async saveEverythingandrun(rowsinEarnings,rowsindirectcost,rowsinadmincost,rowsinresources,columns) {
        let chain = "'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let code =""
        for(let i = 0; i<=5; i++ ) {

            code+= chain[Math.floor(Math.random()*chain.length)];

        }
        let project = prompt('Ingrese un nombre');
        while (project.length === 0) {
            project = prompt('Ingrese un nombre');
        }
        
        let date = new Date();
        code += date.getFullYear().toString()+date.getMonth().toString()+date.getDate().toString()+date.getMinutes().toString()+date.getSeconds().toString()+date.getMilliseconds().toString();
        let budget = new Budget(code);
        budget.id_presupuesto = code;
        budget.proyecto = project;
        let earnings = [];
        let directcost = [];
        let admincost = [];
        let resources = [];
        for(let i = 1; i <= columns; i++) {

            for(let j = 1; j <= rowsinEarnings; j++) {

                let newearning = {id_presupuesto :code, concepto: document.getElementById(`conceptearningsinput${j}`).value,mes: document.getElementById(`monthheadtable2${i}`).innerHTML, total:Number.parseFloat( document.getElementById(`earningsinput${j}${i}`).value) };
                earnings.push(newearning);
            }

            for(let j = 1; j <= rowsindirectcost; j++) {
                let newdirectcost = {id_presupuesto :code, concepto: document.getElementById(`conceptdirectcostinput${j}`).value,mes: document.getElementById(`monthheadtable3${i}`).innerHTML, total:Number.parseFloat( document.getElementById(`directcostinput${j}${i}`).value) };
                directcost.push(newdirectcost);
            }

            for(let j = 1; j <= rowsinadmincost; j++) {

                let newadmincost = {id_presupuesto :code, concepto: document.getElementById(`conceptadmincostinput${j}`).value,mes: document.getElementById(`monthheadtable4${i}`).innerHTML, total:Number.parseFloat( document.getElementById(`admincostinput${j}${i}`).value) };
                admincost.push(newadmincost);

            }

            for(let j = 1; j <= rowsinresources; j++) {

                let newresource = {id_presupuesto :code, concepto: document.getElementById(`resourcesconceptinput${j}`).value,mes: document.getElementById(`monthheadtable5${i}`).innerHTML, porcentaje:Number.parseFloat( document.getElementById(`resourcepercentinput${j}${i}`).value), costo: Number.parseFloat( document.getElementById(`resourcecostinput${j}${i}`).value)};
                resources.push(newresource);

            }

        };
        
        let result = await budget.addInfoBudget(budget,earnings,directcost,admincost,resources);
        return result;
    }
    
}

