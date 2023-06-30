const express = require('express');

const bodyParser = require('body-parser');
const config = require('./config/db.js');


// Cors permite que un cliente se conecta a otro servidor para el intercambio de recursos

const cors = require('cors');





// crear el servidor
const app = express();
const routes = require('./routes');

// habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Habilitar cors
app.use(cors());

// Rutas de la app
app.use('/api', routes());



// puerto
app.listen(5000);