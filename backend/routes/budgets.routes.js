const budgetControllers = require('../controllers/budgets.controllers');
const budgetsMiddlewares = require('../middlewares/budgets.middlewares');

let budgetRoutes = require('express').Router();

budgetRoutes.get('/budgets',budgetsMiddlewares.areYouAUserValid,budgetControllers.getBudgetController);
budgetRoutes.post('/budgets',budgetsMiddlewares.areYouAUserValid,budgetsMiddlewares.isBudgetOk,budgetControllers.addnewBudgetController);
budgetRoutes.put('/budgets',budgetsMiddlewares.areYouAUserValid,budgetControllers.updateBudgetController);
budgetRoutes.delete('/budgets',budgetsMiddlewares.areYouAUserValid,budgetControllers.deleteBudgetController);
budgetRoutes.get('/budgets/all',budgetsMiddlewares.areYouAUserValid,budgetControllers.getAllBudgetsController);
module.exports = budgetRoutes;
