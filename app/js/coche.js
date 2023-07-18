// Obtener la URL actual
const url = new URL(window.location.href);

const ultimoParametro = url.pathname.split("/").pop();

console.log(ultimoParametro);

async function loadCoche() {
  const response = await fetch(
    "http://localhost:3000/api/coches/" + ultimoParametro
  );
  const cocheData = await response.json();

  console.log(cocheData);

  //Print propiedades
  document.getElementById("coche-name").innerHTML =
    cocheData.properties.brand + " - " + cocheData.properties.model;

  htmlProperties = "";
  for (const property in cocheData.properties) {
    htmlProperties +=
      "<li>" + property + ": " + cocheData.properties[property] + "</li>";
  }
  document.getElementById("list-properties").innerHTML = htmlProperties;
}

loadCoche();
