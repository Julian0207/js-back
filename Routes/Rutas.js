// Importaciones
import {
    insertContacto, 
    getContactos,
    getContactoById,
    updateContacto,
    deleteContacto
} from "../controladores/ContactoControler.js";

// Construcción de
// Endpoint: rutas en un proyecto REST orientado a servicios
//           responder como mensaje en formato JSON

const rutas=(app)=>{
    app.route('/contactos')
       .get(getContactos)
       .post(insertContacto)

    app.route('/contactos/:contactoId')
       .get(getContactoById)
       .put(updateContacto)
       .delete(deleteContacto)
}

export default rutas;