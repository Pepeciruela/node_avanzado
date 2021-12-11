'use strict'

const cote = require('cote');
const sharp = require('sharp');

const responder = new cote.Responder({name: 'fotografia'});

responder.on('convertir-foto', (req, done) => {
    const {destination, filename} = req;

    const convertir = {
        inicio: `${destination}/${filename}`,
        fin: `${destination}/thumbnail/th-${filename}`,
    }

    done(convertir);

    });