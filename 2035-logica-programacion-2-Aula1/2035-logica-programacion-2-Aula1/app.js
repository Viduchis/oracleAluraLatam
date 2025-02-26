let numeroSecreto;
let intentos;
let numerosSorteados = [];

function asignarTextoElemento(elemento, texto) {
    let elementHtml = document.querySelector(elemento);
    elementHtml.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    console.log(numeroGenerado);
    console.log(numerosSorteados);
    if (numerosSorteados.length === 10) asignarTextoElemento('p', "Ya se sortearon todos los números posibles");
    else {
        if (numerosSorteados.includes(numeroGenerado)) return generarNumeroSecreto();
        else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

const verificarIntento = () => {
    let numeroUsuario = parseInt(document.querySelector('#numeroUsuario').value);
    if (numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {

        intentos++;
        if (numeroSecreto > numeroUsuario) asignarTextoElemento('p', 'debe ser mayor');
        else asignarTextoElemento('p', "debe ser menor");
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#numeroUsuario').value = "";
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute('disabled', true);
}


function condicionesIniciales() {
    asignarTextoElemento('h1', 'juego del número secreto!');
    asignarTextoElemento('p', 'indica un número del 1 al 10:');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();