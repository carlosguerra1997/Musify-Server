require('dotenv').config()
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Cargamos los ficheros de rutas.
const user_routes = require( './routes/user' );

// Crear el servidor de express
const app = express();

// Conexión a la BBDD
dbConnection();

// Configuramos el CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Creamos las rutas base
app.use( '/api', user_routes );

// Ponemos el servidor a escuchar.
app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto:', process.env.PORT);
});