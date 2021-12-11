const sharp = require('sharp');

const {Requester} = require('cote');
const { request } = require('../app');

const requester = new Requester({name: 'convertir-imagen'});

module.exports = async (req, res, next) => {
    try{
        const destination = req.file.destination;
        const filename = req.file.filename;

        request.send({
            type: 'convertir-imagen',
            destination,
            filename
        },

        (conversion) => {
            sharp(conversion.inicio).resize(100,100).toFile(conversion.fin);
            req.body.convertir = conversion.fin;
            next();
        }
        
        );
    } catch(err) {
        next(err);
    }
};