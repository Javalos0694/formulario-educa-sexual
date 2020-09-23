const modelForm = require('../model/model');


const controller = {
    saveAnswers: function(req,res){
        let Form = new modelForm();
        let params = req.body;

        Form.respuesta1 = params.res1
        Form.respuesta2 = params.res2
        Form.respuesta3 = params.res3
        Form.respuesta4 = params.res4
        Form.respuesta5 = params.res5
        Form.respuesta6 = params.res6
        Form.respuesta7 = params.res7
        Form.respuesta8 = params.res8
        Form.respuesta9 = params.res9
        Form.respuesta10 = params.res10
        Form.respuesta11 = params.res11
        Form.respuesta12 = params.res12
        Form.respuesta13 = params.res13
        Form.respuesta14 = params.res14
        Form.respuesta15 = params.res15
        Form.respuesta16 = params.res16
        Form.respuesta17 = params.res17
        Form.respuesta18 = params.res18
        Form.respuesta19 = params.res19
        Form.respuesta20 = params.res20
        Form.respuesta21 = params.res21
        Form.respuesta22 = params.res22
        Form.respuesta23 = params.res23
        Form.respuesta24 = params.res24
        Form.respuesta25 = params.res25
        Form.respuesta26 = params.res26
        
        
        Form.save((err,formStored) =>{
            if(err) return res.send(500,{message: 'Error al guardar'})
            if(!formStored) return res.send(404,{message:'No se guardo'})

            return res.send(200,{message: 'respuestas guardadas...'})
        })
    }
}


module.exports = controller;