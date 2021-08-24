const express = require('express');
app = express();
const cors = require('cors');
const sequelize = require('./db/connection');
const budgetRoutes = require('./routes/budgets.routes');
const userRoutes = require('./routes/users.routes');
require('dotenv').config();

//Middlewares globales
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//Inicio de servidor

app.listen(process.env.port, async ()=> {
    try {
        console.log('STATUS CORRECTO [SERVIDOR]');
        await sequelize.authenticate();
        
        
    } catch (error) {
        console.log(error.message);
    }
    
});

//Las rutas del servidor
app.use(budgetRoutes);
app.use(userRoutes)