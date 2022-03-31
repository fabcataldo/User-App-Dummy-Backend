'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
var app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit: '1mb', entended: true}));
app.use(cors())
// configurar cabeceras http
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods: PUT,GET,POST,DELETE");
    next();
});
const limit = rateLimit({
    max: 100,// max requests
    windowMs: 60 * 60 * 1000, // 1 Hour
    message: 'Too many requests' // message to send
});
app.use('/routeName', limit);
app.use(xss());
app.use(helmet());

// cargar rutas
var users_routes = require('./routes/users');

// rutas base
app.use('/api', users_routes);

module.exports = app;
