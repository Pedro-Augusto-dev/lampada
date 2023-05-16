var lamp = window.document.getElementById(`Lampada`)

function estaQuebrada() {
    return lamp.src.indexOf(`quebrada`) > -1
}

function ligar(){
    if (!estaQuebrada()){
    lamp.src = `acessa.svg`}
}
function desliga(){
    if(!estaQuebrada()){
    lamp.src = `apagada.svg`}
}
function quebrada(){
    lamp.src = `quebrada.svg`
}
lamp.addEventListener(`click`,quebrada)
function quebrada(){
    lamp.src = `quebrada.svg`
}

