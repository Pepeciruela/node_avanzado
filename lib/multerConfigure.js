const multer = require('multer');

const path = require('path');

const upload = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/thumbnail')
    },

    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },

    fileFilter: function (req, file, cb) {
        const extension= path.extname(file.originalname);
        if(extension !== '.jpg' || extension !== '.png' ||extension !== '.jpeg'){
            return cb(new Error("Formato de imagen no soportado"));
        }
        cb(null, true);
    }
});

module.exports = upload;