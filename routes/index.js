const express = require('express');
const router = express.Router();

const controllers = require('../controllers');
const dateValidateAPI = require("../validations");

module.exports = function () {
    
    /* Vista 1: Histórico Consumos por Tramos
    Se envía una fecha inicial y una final (yyyy-MM-dd) y se debe de responder con una historia por cada tramo, que contenga el consumo, perdidas y costo por el consumo. Esto permite dar una contextualización al cliente de cómo han estado los datos en ese periodo de tiempo.*/
    router.get('/histTramos',
        dateValidateAPI,
        controllers.histTramos
    );

    /*Vista 2: Histórico Consumos por Cliente (Residencial, Comercial, Industrial)
    Se envía una fecha inicial y una final (yyyy-MM-dd) y se debe de responder con una historia por cada tipo de usuario, que contenga el tramo, consumo, perdidas y costo por el consumo. Esta historia permite ver cual tramo genera mayores pérdidas para tomar decisiones.*/

    router.get('/histClientes',
        dateValidateAPI,
        controllers.histClientes);
    

    /*Vista 3: Top 20 Peores Tramos/Cliente
    Se envía una fecha inicial y una final (yyyy-MM-dd) y se debe de responder con un listado con los tramos/cliente con las mayores pérdidas. 
    Este busca saber quién genera las mayores pérdidas y así planear un mantenimiento correctivo/preventivo, según sea el caso. */
    router.get('/peorClientes',
        dateValidateAPI,    
        controllers.peorClientes );

    return router;
}
