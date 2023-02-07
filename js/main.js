const $botonRojo = document.querySelector("#boton-rojo");
const $botonAzul = document.querySelector("#boton-azul");
const $botonAmarillo = document.querySelector("#boton-amarillo");
const $botonVerde = document.querySelector("#boton-verde");
const botones = [$botonRojo, $botonAzul, $botonAmarillo, $botonVerde];
const $botonEmpezar = document.querySelector("#empezar-juego");
const barraDeEstado = document.querySelector("#barra-estado");
const barraDeTurno = document.querySelector("#turno");
const tiempoHastaNuevaRonda_ms = 1500;
const tiempoBotonEncendido_ms = 700;
const tiempoHastaEncenderOtroBoton_ms = 1000;
let secuenciaActual = [];
let secuenciaUsuario = [];
let rondaActual = 0;

function iniciarNuevaRonda() {
    let tiempoDeEspera = 0;
    secuenciaActual.push(elegirBotonRandom());
    for (let boton of secuenciaActual) {
        setTimeout(presionarBoton, tiempoDeEspera, boton);
        tiempoDeEspera = tiempoDeEspera + tiempoHastaEncenderOtroBoton_ms;
    }
    setTimeout(habilitarBotones, tiempoDeEspera - tiempoBotonEncendido_ms / 2);
    setTimeout(mostrarTurnoUsuario, tiempoDeEspera - tiempoBotonEncendido_ms / 2, true);
}

$botonEmpezar.onclick = function () {
    secuenciaActual = [];
    secuenciaUsuario = [];
    mostrarTurnoUsuario(false);
    $botonEmpezar.disabled = true;
    rondaActual = 1;
    mostrarNumeroDeRonda(rondaActual);
    iniciarNuevaRonda();
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
        setTimeout(iniciarNuevaRonda, tiempoHastaNuevaRonda_ms);
        rondaActual += 1;
        setTimeout(mostrarNumeroDeRonda, tiempoHastaNuevaRonda_ms / 2, rondaActual);
        setTimeout(mostrarTurnoUsuario, tiempoHastaNuevaRonda_ms / 2, false);
    } else if (usuarioEnJuego) {
        return true;
    } else {
        mostrarPartidaPerdida();
    }
}

function mostrarPartidaPerdida() {
    deshabilitarBotones();
    barraDeEstado.textContent = `Perdiste! Tocá "Jugar" para empezar de nuevo!`;
    $botonEmpezar.removeAttribute("disabled");
}

function mostrarTurnoUsuario(usuario) {
    if (usuario) {
        barraDeTurno.classList.add("alert-success");
        barraDeTurno.classList.remove("alert-warning");
        barraDeTurno.textContent = "Tu turno!";
    } else {
        barraDeTurno.classList.remove("alert-success");
        barraDeTurno.classList.add("alert-warning");
        barraDeTurno.textContent = "Mi turno!";
    }
}
