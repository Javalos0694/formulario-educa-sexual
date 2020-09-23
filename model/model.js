const mongoose = require('mongoose');

const schemaForm = mongoose.Schema;

const modelForm = {
    respuesta1 : String,
    respuesta2 : String,
    respuesta3 : String,
    respuesta4 : [String],
    respuesta5 : String,
    respuesta6 : String,
    respuesta7 : String,
    respuesta8 : String,
    respuesta9 : String,
    respuesta10 : String,
    respuesta11 : String,
    respuesta12 : String,
    respuesta13 : String,
    respuesta14 : String,
    respuesta15 : String,
    respuesta16 : String,
    respuesta17 : String,
    respuesta18 : String,
    respuesta19 : String,
    respuesta20 : String,
    respuesta21 : String,
    respuesta22 : String,
    respuesta23 : String,
    respuesta24 : String,
    respuesta25 : String,
    respuesta26 : String,
}


module.exports = mongoose.model('formulario',modelForm);