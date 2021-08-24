const budgetControllers = require('../controllers/budgets.controllers');

let budgetRoutes = require('express').Router();

budgetRoutes.get('/budgets',budgetControllers.getBudgetController);
budgetRoutes.post('/budgets',budgetControllers.addnewBudgetController);
budgetRoutes.put('/budgets',budgetControllers.updateBudgetController);
budgetRoutes.delete('/budgets',budgetControllers.deleteBudgetController);

module.exports = budgetRoutes;
