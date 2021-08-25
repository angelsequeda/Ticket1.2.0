const userControllers = require('../controllers/users.controllers');
const userMiddlewares = require('../middlewares/users.middlewares');

let userRoutes = require('express').Router();

userRoutes.get('/users',userMiddlewares.areYouThisUser,userControllers.getUserController);
userRoutes.post('/users',userControllers.addNewUserController);
userRoutes.put('/users',userControllers.updateUserController);
userRoutes.delete('/users',userControllers.deleteUserController);
userRoutes.post('/login',userControllers.loginController);

module.exports = userRoutes;