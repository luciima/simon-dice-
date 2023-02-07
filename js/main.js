const $botonRojo = document.querySelector("#boton-rojo");
const $botonAzul = document.querySelector("#boton-azul");
const $botonAmarillo = document.querySelector("#boton-amarillo");
const $botonVerde = document.querySelector("#boton-verde");
const botones = [$botonRojo, $botonAzul, $botonAmarillo, $botonVerde];
const $botonEmpezar = document.querySelector("#empezar-juego");
let secuenciaActual = [];
let secuenciaUsuario = [];
let rondaActual = 0;

function nuevaRonda() {
    rondaActual += 1;
    let tiempoDeEspera = 0;
    secuenciaActual.push(elegirBotonRandom());
    for (let boton of secuenciaActual) {
        setTimeout(presionarBoton, tiempoDeEspera, boton);
        tiempoDeEspera = tiempoDeEspera + 1000;
    }
    setTimeout(habilitarBotones, tiempoDeEspera - 300);
}

$botonEmpezar.onclick = function () {
    secuenciaActual = [];
    $botonEmpezar.disabled = true;
    nuevaRonda();
};

function compararSecuencias(boton) {
    secuenciaUsuario.push(boton);
    let numeroDeBoton = secuenciaUsuario.length - 1;
    if (boton !== secuenciaActual[numeroDeBoton]) {
        return false;
    }
    return true;
}

function manejarRonda(usuarioEnJuego) {
    if (usuarioEnJuego && secuenciaActual.length === secuenciaUsuario.length) {
        deshabilitarBotones();
        secuenciaUsuario = [];
        setTimeout(nuevaRonda, 1500);
    } else if (usuarioEnJuego) {
        return true;
    } else {
        deshabilitarBotones();
        mostrarPartidaPerdida();
    }
}

function mostrarPartidaPerdida() {
    alert("Perdiste!");
}
