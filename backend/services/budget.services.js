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
            throw new Error('Error al crear ganancia [addearning]');
        }
    }
    static async addnewBudgetService(project){
        try {
            let id = randomNamesServices.givmeTodayNormal()+randomNamesServices.giveMeArandomChain(10);
            await budgetModel.create({
                idBudget : id,
                created : randomNamesServices.givemeTodayDateISO(),
                project : project,
            });
            return id;
        } catch (error) {
            console.log(error.message);
            throw new Error('Error en nuevo presupuesto [addnewbudget]');
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
            throw new Error('Error en nuevo costo administrativo[admincost]')
        }
    };

    static async addnewDirectCostService(budget,directCost){

        try {
            await directCostmodel.create({
                idBudget : budget.idBudget,
                concept : directCost.concept,
                total : directCost.total,
                month : directCost.month,
                version : budget.version
            })
        } catch (error) {
            console.log(error.message);
            throw new Error('Error en nuevo costo directo [adddirect]');
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
            throw new Error('Error en nuevo recurso [addresources]');
        }
    };

    static async deleteBudgetService(idBudget){

        try {
            await budgetModel.update({
                active : 0
            }, {
                where : {idBudget : idBudget}
            });
        } catch (error) {
            console.log(error.message);
            throw new Error('Error al eliminar presupuesto [deletebudget]');
        }
    };

    static async updateBudgetService(budget){
        
        try {
            let version = await budgetModel.findOne({where : { idBudget : budget.idBudget},attributes : ['version']});
            await budgetModel.update({
                version : version.version + 1
            }, {
                where : {
                    idBudget : budget.idBudget
                }
            });
            budget.version  = version.version+1;
        } catch (error) {
            console.log(error.message);
            throw new Error('Error al actualizar version del presupuesto [updatebudget]');
        }
    }

    static async getBudgetDataService(idBudget){

        try {
            let budget = await budgetModel.findOne({where : {idBudget : idBudget, active : 1},attributes:{exclude:['active']}});
            if(budget){
                let earnings = await earningModel.findAll({where : {idBudget : budget.idBudget, version : budget.version},attributes:{exclude:['id','idBudget','version']}});
                let adminCost = await admCostmodel.findAll({where : {idBudget : budget.idBudget, version : budget.version},attributes:{exclude:['id','idBudget','version']}});
                let directCost = await directCostmodel.findAll({where :{idBudget : budget.idBudget, version : budget.version},attributes:{exclude:['id','idBudget','version']}});
                let resources = await resourcesModel.findAll({where : {idBudget : budget.idBudget, version : budget.version},attributes:{exclude:['id','idBudget','version']}});
                return {budget,adminCost,directCost,resources,earnings}
            }else{
                throw new Error('El budget no existe');
            }
            
        } catch (error) {
            console.log(error.message);
            throw new Error('[getbudget]')
        }
    }


    static async addAwholeNewBudgetService(budget,data){

        try {
            data.earnings.forEach(async (element)=>{await this.addnewEarningService(budget,element)});
            data.resources.forEach(async(element)=> {await this.addnewResourceService(budget,element)});
            data.admincost.forEach(async (element)=> {await this.addnewAdminCostService(budget,element)});
            data.directcost.forEach(async (element)=> {await this.addnewDirectCostService(budget,element)});
        } catch (error) {
            console.log(error.message);
            throw new Error('[addwhole]');
        }
    };



};

module.exports = budgetServices;