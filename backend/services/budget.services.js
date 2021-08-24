const admCostmodel = require("../models/admcost.model");
const { budgetModel } = require("../models/budget.model");
const directCostmodel = require("../models/directcost.model");
const earningModel = require("../models/earnings.model");
const resourcesModel = require("../models/resources.model");
const { randomNamesServices } = require("./security.services");


class budgetServices {

    static async addnewEarningService(budget,earning){
        try {
            await earningModel.create({
                idBudget : budget.idBudget,
                concept : earning.concept,
                month : earning.month,
                version : budget.version,
                total : earning.total
            })
        } catch (error) {
            console.log(error.message);
            throw new Error('Error al crear ganancia [budget.services.js]');
        }
    }
    static async addnewBudgetService(project){
        try {
            let id = randomNamesServices.givmeTodayNormal()+randomNamesServices.giveMeArandomChain(10);
            await budgetModel.create({
                idBudget : id,
                crated : randomNamesServices.givemeTodayDateISO(),
                project : project,
            });
            return id;
        } catch (error) {
            console.log(error.message);
            throw new Error('Error en nuevo presupuesto [budget.services.js]');
        }
    };

    static async addnewAdminCostService(budget,adminCost){
        try {
            await admCostmodel.create({
                idBudget : budget.idBudget,
                month : adminCost.month,
                total : adminCost.total,
                concept : adminCost.concept,
                version : budget.version
            })
        } catch (error) {
            console.log(error.message);
            throw new Error('Error en nuevo costo administrativo[budget.services.js]')
        }
    };

    static async addnewDirectCostService(budget,directCost){

        try {
            await directCostmodel.create({
                idBudget : budget.idBudget,
                concept : directCost.concept,
                total : directCost.total,
                month : directCost.month,
                version : budget.idBudget
            })
        } catch (error) {
            console.log(error.message);
            throw new Error('Error en nuevo costo directo [budget.services.js]');
        }
    };

    static async addnewResourceService(budget,resource){

        try {
            await resourcesModel.create({
                idBudget : budget.idBudget,
                cost : resource.cost,
                concept : resource.concept,
                porcetaje : resource.porcetaje,
                version : budget.version
            })
        } catch (error) {
            console.log(eror.message);
            throw new Error('Error en nuevo recurso [budget.services.js]');
        }
    };

    static async deleteBudgetService(idBudget){

        try {
            await budgetModel.update({
                active : 0
            }, {
                where : {idBudget : idBudget}
            }).then(()=> {
                await admCostmodel.destroy({where : {idBudget : idBudget}});
                await resourcesModel.destroy({where : {idBudget : idBudget}});
                await directCostmodel.destroy({where : {idBudget : idBudget}});
            });
        } catch (error) {
            console.log(error.message);
            throw new Error('Error al eliminar presupuesto [budget.services.js]');
        }
    };

    static async updateBudgetService(idBudget){
        
        try {
            let version = await budgetModel.findOne({where : { idBudget : idBudget},attributes : {version}});
            await budgetModel.update({
                version : version
            }, {
                where : {
                    idBudget : idBudget
                }
            });
        } catch (error) {
            console.log(error.message);
            throw new Error('Error al actualizar version del presupuesto [budget.services.js]');
        }
    }

    static async getBudgetDataService(budget){

        try {
            let budget = await budgetModel.findOne({where : {idBudget : budget.idBudget, active : 1}});
            let adminCost = await admCostmodel.findAll({where : {idBudget : budget.idBudget, version : budget.version}});
            let directCost = await directCostmodel.findAll({where :{idBudget : budget.idBudget, version : budget.version}});
            let resources = await resourcesModel.findAll({where : {idBudget : budget.idBudget, version : budget.version}});
            return {budget,adminCost,directCost,resources}
        } catch (error) {
            
        }
    }


    static async addAwholeNewBudgetService(data){

        try {
            data.earnings.forEach(async (element)=>{await this.addnewEarningService(element)});
            data.resources.forEach(async(element)=> {await this.addnewResourceService(element)});
            data.admincost.forEach(async (element)=> {await this.addnewAdminCostService(element)});
            data.directcost.forEach(async (element)=> {await this.addnewDirectCostService(element)});
        } catch (error) {
            console.log(error.message);
            throw new Error('Error al agregar datos al presupuesto [budget.services.js]');
        }
    };

};

