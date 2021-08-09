require('dotenv').config();
const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');

//crear el servidor express
const app = express();

//configurar cors
app.use(cors());

//Base de dDatos
dbConnection();

console.log(process.env);

//Rutas
app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});


//iQhTr4xXawsagj1W
//mean_user


