const path = require("path");
const fs = require("fs");
const { forEach } = require("lodash");

function getFilms(req, res) {
  const filmsFilePath = path.join(__dirname, "../data/films.json");

  fs.readFile(filmsFilePath, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      res.status(500).send("Error interno del servidor");
    } else {
      const films = JSON.parse(data);
      res.json(films);
    }
  });
}

function getFilmById(req, res) {
  const filmId = req.params.id;
  const filmsFilePath = path.join(__dirname, "../data/films.json");

  fs.readFile(filmsFilePath, "utf8", function (err, data) {
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
      const films = JSON.parse(data);

      let filmResponse = null;
      //Buscar el film por id
      forEach(films, (film) => {
        if (film._id == filmId) {
          filmResponse = film;
        }
      });

      if (filmResponse) {
        //Si se ha encontrado el film, devolverlo
        res.json(filmResponse);
      } else {
        //Si no se ha encontrado el film, devolver un error
        res.status(404).json(
          {
            id: filmId,
            error_code: 404,
            error_text: "Film no encontrado"
          }
        );
      }
    }
  });
}

module.exports = {
  getFilms,
  getFilmById,
};
