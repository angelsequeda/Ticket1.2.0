const budgetServices = require("../services/budget.services");

class budgetControllers{

    static async addnewBudgetController(req,res){
        try {
            let result = await budgetServices.addnewBudgetService(req.body.budget.project);
            await budgetServices.addAwholeNewBudgetService({idBudget:result,version:1},req.body.data);
            return res.status(200).json({status :200, result : result});
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({status:500, message : 'error'});
        }
    };


    static async deleteBudgetController(req,res){
        try {
            await budgetServices.deleteBudgetService(req.body.budget.idBudget);
            return res.status(200).json({status : 200, message : 'correcto'});
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({status:500,message : 'error'});
        }
    };

    static async updateBudgetController(req,res){
        try {
           await budgetServices.updateBudgetService(req.body.budget);
           await budgetServices.addAwholeNewBudgetService(req.body.budget,req.body.data);
           return res.status(200).json({status : 200, message : 'correcto'});
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({status:500,message : 'error'});
        }
    };

    static async getBudgetController(req,res){
        try {
            let result = await budgetServices.getBudgetDataService(req.query.idBudget);
            return res.status(200).json({status:200, result : result});
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({status:500,message : 'error'});
        }
    };


    static async getAllBudgetsController(req,res){
        try {
            let result = await budgetServices.getAllBudgetsService();
            return res.status(200).json({status : 200, result : result});
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({status:500,message : 'error'});
        }
    }
};

module.exports = budgetControllers;