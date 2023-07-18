const path = require("path");
const fs = require("fs");

function getCoches(req, res) {
  const colorsFilePath = path.join(__dirname, "../data/coches.json");

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

function getCocheById(req, res) {
  const cocheId = req.params.id;
  const cochesFilePath = path.join(__dirname, "../data/coches.json");

  fs.readFile(cochesFilePath, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      res.status(500).send("Error interno del servidor e");
    } else {
      const coches = JSON.parse(data);
      let cocheResponse = coches.find((coche) => coche.id == cocheId);

      if (cocheResponse) {
        res.json(cocheResponse);
      } else {
        console.log("Coche no encontrado");
        res.status(404).send("Coche no encontrado");
      }
    }
  });
}

module.exports = {
  getCoches,
  getCocheById,
};
