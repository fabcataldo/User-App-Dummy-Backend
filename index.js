"use strict";

var app = require("./app");
var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(
    "Servidor de api rest escuchando en http://localhost:" +
      port
  );
});

var app = require("./app");
