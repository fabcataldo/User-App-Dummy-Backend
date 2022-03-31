"use strict";
var users = require("../dummy_data/users");
var jwt = require("../services/jwt");

function loginUser(req, res) {
  var params = req.body;
  var username = params.username;
  var password = params.password;

  //simulo una llamada a un endpoint de login real
  setTimeout(function () {
    if (
      username.match(/^[a-z0-9]+$/i) &&
      password.match(/^[a-z0-9]+$/i) &&
      username.split("").some((w) => w === w.toUpperCase()) &&
      password.split("").some((w) => w === w.toUpperCase())
    ) {
      var user = users.users.filter((user) => user.password === password)[0];
      if (user && user.length !== 0) {
        res.status(200).send({
          user: {
            name: user.name,
            surname: user.surname,
            age: user.age,
            username: user.username,
            role: user.role,
          },
          token: jwt.createToken(user),
        });
      } else {
        res.status(404).send({ message: "El usuario no se ha encontrado." });
      }
    } else {
      res.status(404).send({ message: "El nombre de usuario y la contraseña son incorrectos. Deben tener al menos una mayúscula y tienen que ser alfanuméricos." });
    }
  }, 100);
}

module.exports = {
  loginUser,
};
