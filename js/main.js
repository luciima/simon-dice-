const $botonRojo = document.querySelector("#boton-rojo");
const $botonAzul = document.querySelector("#boton-azul");
const $botonAmarillo = document.querySelector("#boton-amarillo");
const $botonVerde = document.querySelector("#boton-verde");
const botones = [$botonRojo, $botonAzul, $botonAmarillo, $botonVerde];
const $botonEmpezar = document.querySelector("#empezar-juego");
let secuenciaActual = [];
let secuenciaUsuario = [];
let rondaActual = 0;

