const mongoose = require('mongoose');

mongoose.connect('mongodb://proyecto:proyecto123@docdb-2021-07-12-17-51-48.capzci6favog.us-east-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&retryWrites=false', {
    useNewUrlParser: true
}) 
    .then(db => console.log(`Base de datos conectada conectada en Mongo DB Atlas`))
    .catch(err => console.error(err));