"use strict"

const mongoose = require("mongoose");

//Creamos el esquema de nuestro anuncios
const schemaAnuncio = mongoose.Schema({
    nombre: {type: String},
    venta: {type: Boolean},
    precio: {type: Number},
    foto: {type: String},
    tags: {type: [String]}
});

