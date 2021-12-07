// Importaciones 
import express from 'express';
import rutas from './Routes/Rutas.js';
import mongoose from 'mongoose';

import cors from 'cors';
// crear objecto express
const app=express();

const PORT=5001;

// Configuración de conexión a mongo
mongoose.connect('mongodb://localhost/Contactos_2242758', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

// Configuracion del body-parser
// Solo permite enviar contenido desde el cliente, formateado dentro del body de (tunderClient)
app.use(express.urlencoded({extended:true}));
// Solo para elementos JSON
app.use(express.json());


//cors
app.use(cors());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// rutas
rutas(app)

// Crear y ejecutar el servidor
app.listen(5001, function (){
    console.log(`se esta escuchando en el puerto 5001`);
});