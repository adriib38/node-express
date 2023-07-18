// Obtener la URL actual
const url = new URL(window.location.href);

// Obtener el último segmento de la ruta (en este caso, el número "2")
const ultimoParametro = url.pathname.split('/').pop();

console.log(ultimoParametro);  // Imprimirá "2"


async function loadColor() {
    const response = await fetch('http://localhost:3000/api/colores/' + ultimoParametro);
    const colorData = await response.json();
  
    console.log(colorData);
    
    //Print propiedades
    document.getElementById("box-preview").style.backgroundColor = colorData.properties.hexCode;   
    document.getElementById("color-name").innerHTML = colorData.properties.name;
    document.getElementById("color-hex").innerHTML = colorData.properties.hexCode;
}
  
loadColor();

async function loadColors(){
    const response = await fetch('http://localhost:3000/api/colores');
    const colorsData = await response.json();
  
    console.log(colorsData);
    
    let htmlColors = '';
    colorsData.forEach(color => {
        console.log(color);
        htmlColors += '<li><a href="/colores/' + color.id + '">' + color.properties.name + '</a></li>';
    });

    //Print propiedades
    document.getElementById("list-other-colors").innerHTML = htmlColors;
}

loadColors();
