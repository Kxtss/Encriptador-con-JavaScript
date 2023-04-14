// La letra "a" es convertida para "ai", La letra "e" es convertida para "enter", La letra "i" es convertida para "imes", La letra "o" es convertida para "ober", La letra "u" es convertida para "ufat"
/*
    Por ejemplo:
    "gato" => "gaitober"
    gaitober" => "gato"

    - Debe funcionar solo con letras minúsculas

    - No deben ser utilizados letras con acentos ni caracteres especiales
*/

function encriptar (){
    var texto = document.querySelector("#texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#resultEn").value = textoCifrado;
    document.querySelector("#texto").value;
}


    
var boton1 = document.querySelector("#optEncry1"); boton1.onclick = encriptar;

function desencriptar (){
    var texto = document.querySelector("#texto").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector("#resultEn").value = textoCifrado; 
    document.querySelector("#texto").value;

}

var boton2 = document.querySelector("#optEncry2"); boton2.onclick = desencriptar;

const copiarTxt = document.getElementById("#copiartexto");

document.addEventListener('DOMContentLoaded', () => {
    copiarTxt.addEventListener('click', copiarTexto);
});

function copiarTexto(e) {
    e.preventDefault(); 
    const mensaje = document.querySelector("#resultEn").value;

    navigator.clipboard.writeText(mensaje);
}

var boton3 = document.querySelector("#copiartexto"); boton3.onclick = copiarTexto;