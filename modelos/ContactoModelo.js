// Importaciones
import mongoose from 'mongoose';

// Crear un objeto mongo:Schema:
const Schema=mongoose.Schema;

// Construcción de un Schema para contactos:
const contactoSchema=new Schema({
    
    nombre:{
        type: String,
        required: 'Ingrese un nombre'
    },
    apellido:{
        type: String,
        required: 'Ingrese un apellido'
    },
    email:{
        type: String
    },
    empresa:{
        type: String
    },
    telefono:{
        type: Number
    },
    fechaCreacion:{
        type: Date,
        default: Date.now
    }

});

export default contactoSchema;