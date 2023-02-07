function elegirBotonRandom() {
    const numeroRandom = Math.floor(Math.random() * 4);
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
    }, 700);
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
    for (let boton in botones) {
        boton.onclick = function () {};
    }
}
