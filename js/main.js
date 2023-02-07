const $botonRojo = document.querySelector("#boton-rojo");
const $botonAzul = document.querySelector("#boton-azul");
const $botonAmarillo = document.querySelector("#boton-amarillo");
const $botonVerde = document.querySelector("#boton-verde");
const botones = [$botonRojo, $botonAzul, $botonAmarillo, $botonVerde];
const $botonEmpezar = document.querySelector("#empezar-juego");
const barraDeEstado = document.querySelector("#barra-estado");
const barraDeTurno = document.querySelector("#turno");
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
    secuenciaUsuario = [];
    barraDeTurno.classList.remove("d-none");
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
        setTimeout(nuevaRonda, 1500);
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
