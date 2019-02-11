//Primero guardo todas las imagenes en un array
// El boton reset, seria borrar las imagenes que contiene, y cargar
// las imagenes del array en el div inicial
//let imagenes = [document.getElementById("img1"),document.getElementById("img2"),document.getElementById("img3"),document.getElementById("img4"),];
/*window.onload = function () {
 var imagenes = [document.getElementById("img1"), document.getElementById("img2"),
 document.getElementById("img3"), document.getElementById("img4")];
 console.log(imagenes);
 console.log(document.getElementById("img1"));
 }*/

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
function reset() {
    var imagenes = [document.getElementById("img1"), document.getElementById("img2"),
        document.getElementById("img3"), document.getElementById("img4")];
    //console.log(document.getElementById("containerDerecha"));
    //console.log(document.getElementById("drag1"));
    //var imagen1 = document.getElementById("img1");
    for (var i = 1, max = 5; i < max; i++) {
        if (document.getElementById("drag" + i).hasChildNodes()) {//Recorre todos, y hay que comprobar que no tenga hijos
            document.getElementById("drag" + i).removeChild(document.getElementById("img" + i));
        }
    }
    for (var i = 1, max = 5; i < max; i++) {
        if (!document.getElementById("container" + i).hasChildNodes()) {
            document.getElementById("container" + i).appendChild(imagenes[i - 1]);
        }
    }
    container = document.getElementById("animacion");
    if ($(container).hasClass("c-animacion__container--inactivo")) {
        $(container).removeClass("c-animacion__container--inactivo");
        $(container).addClass("c-animacion__container");
        setTimeout(function () {
            $(container).removeClass("c-animacion__container");
        }, 4000);
        $(container).addClass("c-animacion__container--inactivo");
        console.log(container);
    }
}