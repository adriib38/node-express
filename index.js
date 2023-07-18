const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

// Configurar la ruta para servir archivos estáticos
app.use(express.static(path.join(__dirname, "app")));

const colorRoutes = require("./routes/color");
const cocheRoutes = require("./routes/coche");

// Ruta para manejar la solicitud HTTP
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "app", "index.html"));
});

// Ruta para obtener jsons de todos los objetos
app.use("/api/colores", colorRoutes);
app.use("/api/coches", cocheRoutes);

// Ruta para obtener json de un objeto por ID
app.use("/api/coche/:id", cocheRoutes);
app.use("/api/color/:id", colorRoutes);

// Rutas devolver pagina html
app.get("/colores/:id", function (req, res) {
  res.sendFile(path.join(__dirname, "app", "color.html"));
});

app.get("/coches/:id", function (req, res) {
  res.sendFile(path.join(__dirname, "app", "coche.html"));
});

const puerto = 3000;
app.listen(puerto, function () {
  console.log("Servidor web iniciado en el puerto " + puerto);
});

module.exports = app;
