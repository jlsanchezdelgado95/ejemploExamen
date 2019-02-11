//Primero guardo todas las imagenes en un array
// El boton reset, seria borrar las imagenes que contiene, y cargar
// las imagenes del array en el div inicial
//let imagenes = [document.getElementById("img1"),document.getElementById("img2"),document.getElementById("img3"),document.getElementById("img4"),];
window.onload = function () {
    let imagenes = [document.getElementById("img1"), document.getElementById("img2"),
        document.getElementById("img3"), document.getElementById("img4")];
    console.log(imagenes);
    console.log(document.getElementById("img1"));
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, divId) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (!divId.hasChildNodes()) {
        ev.target.appendChild(document.getElementById(data));
        console.log(ev.target.id);
        /*console.log(document.getElementById(data));*/
    }
}
//Plantear las imagenes como un array, para hacer el reset
/*function reset() {
 location.reload();
 }*/

function reset(ev) {
    ev.preventDefault();
    console.log(ev.dataTransfer.getData());
    var data = ev.dataTransfer.getData("text");
    for (var i = 0, max = 4; i < max; i++) {
        imagenes.push(document.getElementById(data));
        console.log(document.getElementById(data));
    }
}