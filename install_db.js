"use strict"

const database = require("./lib/connectMongoose");
const Anuncio = require("./models/Anuncio");
const anunciosData = require("./data/anuncios.json");

main().catch(err => console.log('Hubo un error', err));

async function main() {
  await iniciarAnuncios();

  database.close();
}

async function iniciarAnuncios() {
  // elimino todos los anuncios existentes
  const deleted = await Anuncio.deleteMany();
  console.log(`Eliminados ${deleted.deletedCount} anuncios.`);

  // creo los anuncios iniciales
  const anuncios = await Anuncio.insertMany(anunciosData.anuncios);
  console.log(`Creados ${anuncios.length} anuncios.`);
};
