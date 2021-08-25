const budgetControllers = require('../controllers/budgets.controllers');
const budgetsMiddlewares = require('../middlewares/budgets.middlewares');

let budgetRoutes = require('express').Router();

budgetRoutes.get('/budgets',budgetsMiddlewares.areYouAUserValid,budgetControllers.getBudgetController);
budgetRoutes.post('/budgets',budgetsMiddlewares.areYouAUserValid,budgetControllers.addnewBudgetController);
budgetRoutes.put('/budgets',budgetsMiddlewares.areYouAUserValid,budgetControllers.updateBudgetController);
budgetRoutes.delete('/budgets',budgetsMiddlewares.areYouAUserValid,budgetControllers.deleteBudgetController);

module.exports = budgetRoutes;
