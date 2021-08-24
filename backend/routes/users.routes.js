const userControllers = require('../controllers/users.controllers');

let userRoutes = require('express').Router();

userRoutes.get('/users',userControllers.getUserController);
userRoutes.post('/users',userControllers.addNewUserController);
userRoutes.put('/users',userControllers.updateUserController);
userRoutes.delete('/users',userControllers.deleteUserController);


module.exports = userRoutes;