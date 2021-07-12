const { Router } =  require('express');
const cifrar = require('crypto');
const router = Router();

const Usuario = require('../modelos/usuario');

registro = router.post("/register", (req,res)=>{
    let data= req.body;
    
    var Contrasena = data.Contrasena;
    Contrasena = cifrar.createHash('sha256').update(Contrasena).digest("hex");

    Usuario.find({ usuario: data.Usuario}, 
        function (err, usuarios)
        {
            if(err || usuarios.length !== 0)
            {
                console.log(err)
                res.json({
                    estado: "FALLIDO",
                    mensaje:"Usuario ya existe"
                })
                return
            }
            const usuario = new Usuario({ usuario: data.Usuario, contrasena: Contrasena});      
            usuario.save(function (err, usuario) {
                if(err)
                {
                    console.log(err)
                    res.json({
                        estado: "FALLIDO",
                        mensaje:"Error al crear el usuario"
                    })
                    return
                }
                res.json({
                    estado: "EXITOSO",
                    mensaje:"Usuario creado"
                });        
              });
        });

});

module.exports = router;