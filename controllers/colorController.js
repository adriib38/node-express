const path = require("path");
const fs = require("fs");

function getColors(req, res) {
  const colorsFilePath = path.join(__dirname, "../data/colores.json");

  fs.readFile(colorsFilePath, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      res.status(500).json(
        {
          id: filmId,
          error_code: 500,
          error_text: "Error interno del servidor"
        },
      );
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
      let colorResponse = null;
      //Buscar el color por id
      colorResponse = colores.find((color) => color.id == colorId);

      if (colorResponse) {
        //Si se ha encontrado el color, devolverlo
        res.json(colorResponse);
      } else {
        //Si no se ha encontrado el color, devolver un error
        res.status(404).json(
          {
            id: colorId,
            error_code: 404,
            error_text: "Color no encontrado"
          }
        );
      }
    }
  });
}

module.exports = {
  getColors,
  getColorById,
};
