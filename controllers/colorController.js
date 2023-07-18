const path = require("path");
const fs = require("fs");

function getColors(req, res) {
  const colorsFilePath = path.join(__dirname, "../data/colores.json");

  fs.readFile(colorsFilePath, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      res.status(500).send("Error interno del servidor");
    } else {
      const colors = JSON.parse(data);
      res.json(colors);
    }
  });
}

function getColorById(req, res) {
  const colorId = req.params.id;
  const coloresFilePath = path.join(__dirname, "../data/colores.json");

  fs.readFile(coloresFilePath, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      res.status(500).send("Error interno del servidor e");
    } else {
      const colores = JSON.parse(data);
      let coloresResponse = colores.find((color) => color.id == colorId);

      if (coloresResponse) {
        res.json(coloresResponse);
      } else {
        console.log("Color no encontrado");
        res.status(404).send("Color no encontrado");
      }
    }
  });
}

module.exports = {
  getColors,
  getColorById,
};
