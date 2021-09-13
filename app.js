var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const app = express();

//CONEXIÓN A NUESTRA BASE DE DATOS

require("./lib/connectMongoose");
require("./models/Anuncio");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const rutaAnuncios = require("./routes/anuncios");
const rutaApi = require("./routes/api/index");

//Ruta creada a nuestra web
app.use('/', rutaAnuncios);

//Ruta creada a nuestra API
//app.use("/api", require("./routes/api/index"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
