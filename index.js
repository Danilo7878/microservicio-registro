const express = require('express');
const app = express()
const dotenv = require("dotenv")
const bodyparser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")

dotenv.config()

require('./basededatos');


app.use(express.json())

app.use(cors())

app.set('port', 80);
//app.set('port', 3000);

app.get('/', (req,res) => res.status(200).send('Petroll - SignUp'));

//INICIO DE SESION
app.use('/petroll', require('./rutas/inicio'));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
