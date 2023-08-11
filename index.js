require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

// Configurar la ruta para servir archivos estáticos
app.use(express.static(path.join(__dirname, "app")));

const colorRoutes = require("./routes/color");
const filmRoutes = require("./routes/film");

// Ruta para manejar la solicitud HTTP
app.get("/", function (req, res) {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html", "charset=utf-8");
  res.end("Hola Mundo");
});

// Ruta coches
app.use("/api/colores", colorRoutes);

// Ruta films
app.use("/api/films", filmRoutes);


const port = process.env.PORT ?? 3000
app.listen(port, function () {
  console.log("Servidor web iniciado en el puerto " + port);
});

module.exports = app;
