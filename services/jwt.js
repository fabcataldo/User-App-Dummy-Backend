'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_para_token';

exports.createToken = function(client){
	var payload = {
		sub: 123456789,
		user: client,
		iat: moment().unix(),
		exp: moment().add(24, 'hours').unix
	};

	return jwt.encode(payload, secret);
};

exports.decryptPasswordResetToken = function(token){
	return jwt.decode(token, secret);
}