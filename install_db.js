"use strict"

const database = require("./lib/connectMongoose");
const Anuncio = require("./models/Anuncio");
const anunciosData = require("./data/anuncios.json");

database.once
