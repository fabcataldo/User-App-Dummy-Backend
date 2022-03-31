'use strict'

var express = require('express');
var UsersController = require('../controllers/users');
var api = express.Router();

api.post('/login', UsersController.loginUser);

module.exports = api;
