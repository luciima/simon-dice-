function elegirBotonRandom() {
    const numeroRandom = Math.floor(Math.random() * botones.length);
    return botones[numeroRandom];
}

function iluminarBoton(boton) {
    boton.classList.remove("apagado");
}

function apagarBoton(boton) {
    boton.classList.add("apagado");
}

function presionarBoton(boton) {
    iluminarBoton(boton);
    setTimeout(function () {
        apagarBoton(boton);
    }, tiempoBotonEncendido_ms);
}

function habilitarBotones() {
    for (let boton of botones) {
        boton.onclick = function () {
            presionarBoton(boton);
            let usuarioEnJuego = compararSecuencias(boton);
            manejarRonda(usuarioEnJuego);
        };
    }
}

function deshabilitarBotones() {
    for (let boton of botones) {
        boton.onclick = function () {};
    }
}

function mostrarNumeroDeRonda(numeroRonda) {
    barraDeEstado.textContent = `Ronda ${numeroRonda}!`;
}
