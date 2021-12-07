// Importaciones
import mongoose from 'mongoose';
import contactoSchema from '../modelos/ContactoModelo.js';

// Object creado apartir del Schema de contacto
const Contacto=mongoose.model('Contacto', contactoSchema);

// Acción para insertar un nuevo contacto
export const insertContacto=(req, res)=>{
    
    // New Object basado en el DAO
    let nuevoContacto=new Contacto(req.body);

    // Grabar contacto en mongo
    nuevoContacto.save((error, contactoInsert)=>{
        if(error){
            res.send(`Error detectado en el insert: ${error}`);
        }else{
            res.json(contactoInsert);
        }
    });
}

// Acción para obtener todas las personas
export const getContactos=(req, res)=>{
    Contacto.find({}, (error, contacto)=>{
        if(error){
            res.send(`Error detectado en el get: ${error}`);
        }else{
            res.json(contacto);
        }
    });
}

// Acción para obtener una persona por :contactoId (El detalle)
export const getContactoById=(req, res)=>{
    Contacto.findById(req.params.contactoId, (error, contactoPorId)=>{
        if(error){
            res.send(`Error detectado en el get por id: ${error}`);
        }else{
            res.json(contactoPorId);
        }
    });
}

//Acción para actualizar una persona por :contactoId 
export const updateContacto=(req, res)=>{
    Contacto.findOneAndUpdate(
                                {_id:req.params.contactoId}, 
                                req.body,
                                {
                                    new: true
                                },
    (error)=>{
        if(error){
            res.send(`Error detectado en el insert: ${error}`);
        }else{
            res.send('El registro fue actualizado exitosamente');
        }
    })
}

//Acción para eliminar una persona por _id:contactoId
export const deleteContacto=(req, res)=>{  
    Contacto.deleteOne({_id: req.params.contactoId}, (error, contactoDelete)=>{
        if(error){
            res.send(`Error detectado en el delete: ${error}`);
        }else{
            res.send('El registro fue eliminado exitosamente');
        }
    });
}