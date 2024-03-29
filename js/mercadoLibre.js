let inputBusqueda = document.getElementById("inputBusqueda");
let mainContent = document.getElementById("mainContent");
let boxProductos = document.getElementById("boxProductos");

class Automovil {
    constructor(marca, modelo, imagen, precio, año, kilometraje, lugar) {
        this.marca = marca;
        this.modelo = modelo;
        this.imagen = imagen;
        this.precio = precio;
        this.año = año;
        this.kilometraje = kilometraje;
        this.lugar = lugar;
        this.favorito = false;
    }
}

let auto1 = new Automovil("landRover", "G63", 'images/landRover.webp', 150000000, 2021, 45000, 'Engativa - Bogotá');
let auto2 = new Automovil("Corvette", "C7 ZR1", 'images/Corvette.jpg', 150000000, 2021, 50000, 'Engativa - Bogotá');
let auto3 = new Automovil('Mazda', 'NN', 'images/mazda.jpg', 50000000, 255, 548545, 'Pitalito-Hila');
let auto4 = new Automovil('Mazda', 'CX-30', 'images/MAZDACX-30.jpg', 65000000, 255, 548545, 'Pitalito-Hila');
let auto5 = new Automovil('Mazda', '2 Sedan', 'images/MAZDA2Sedan.jpg', 48500000, 255, 548545, 'Pitalito-Hila');


let autos = [auto1, auto2, auto3, auto4, auto5]

window.addEventListener("DOMContentLoaded", function () {

    mostrarProducto('');

    inputBusqueda.addEventListener('input', function () {
        mostrarProducto(inputBusqueda.value);
    });
});

function mostrarProducto(terminoBusqueda) {

    mainContent.innerHTML = '';

    autos.forEach(auto => {
        if (auto.marca.toLowerCase().includes(terminoBusqueda.toLowerCase()) || auto.modelo.toLowerCase().includes(terminoBusqueda.toLowerCase())) {

            // Caja para el producto
            let boxProducto = document.createElement("div");
            boxProductos.appendChild(boxProducto);
            boxProducto.setAttribute("class", "box-producto");

            // Caja para la imagen
            let boxImg = document.createElement("div");
            boxProducto.appendChild(boxImg);
            boxImg.setAttribute("class", "box-img");

            let imgAuto = document.createElement('img');
            boxImg.appendChild(imgAuto);
            imgAuto.setAttribute('src', auto.imagen);
            imgAuto.setAttribute('class', 'img-auto')

            // Caja para la informacion
            let boxInfo = document.createElement("div");
            boxProducto.appendChild(boxInfo);
            boxInfo.setAttribute("class", "box-info");

            let marcaLabel = document.createElement('label');
            boxInfo.appendChild(marcaLabel);
            let textnodoMarca = document.createTextNode(auto.marca + " " + auto.modelo);
            marcaLabel.appendChild(textnodoMarca);
            marcaLabel.setAttribute('class', 'marca');

            //precio
            let precio = document.createElement('label');
            boxInfo.appendChild(precio);
            let precioStr = Intl.NumberFormat('de-DE').format(auto.precio)
            let textNodoPrecio = document.createTextNode("$" + precioStr);
            precio.appendChild(textNodoPrecio);
            precio.setAttribute('class', 'precio');

            let infExt = document.createElement('label');
            boxInfo.appendChild(infExt);
            let textNodoInfExt = document.createTextNode(auto.año + " · " + auto.kilometraje + " Km · " + auto.lugar);
            infExt.appendChild(textNodoInfExt);
            infExt.setAttribute('class', 'infExt');

            let boxCorazon = document.createElement('div');
            boxImg.appendChild(boxCorazon);
            boxCorazon.setAttribute('class', 'box-icon-corazon');

            let icon = document.createElement('i');
            boxCorazon.appendChild(icon);
            icon.setAttribute('class', 'icon-corazon fa-regular fa-heart');

            boxCorazon.addEventListener('click', function () {
                if (auto.favorito) {
                    icon.classList.remove("fas");
                    icon.classList.add("far");
                    auto.favorito = false;
                } else {
                    icon.classList.remove("far");
                    icon.classList.add("fas");
                    auto.favorito = true;
                }
            })
        }
    });
}

cargarFiltro();

function cargarFiltro() {
    let boxFiltro = document.createElement('div');
    mainContent.appendChild(boxFiltro);
    boxFiltro.setAttribute('class', 'box-filtro');
}

let boxToggle = document.getElementById('boxToggle')
let buttonToggle = document.getElementById('buttonToggle')

boxToggle.addEventListener("click", () => {
    if (boxToggle.classList.contains("box-toggle-off")) {
        boxToggle.classList.add('box-toggle-on');
        boxToggle.classList.remove('box-toggle-off');
        buttonToggle.classList.add('button-toggle-on');
        buttonToggle.classList.remove('button-toggle-off');
    } else {
        boxToggle.classList.remove('box-toggle-on');
        boxToggle.classList.add('box-toggle-off');
        buttonToggle.classList.remove('button-toggle-on');
        buttonToggle.classList.add('button-toggle-off');
    }
})