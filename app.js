const campoTexto = document.getElementById("campoTexto");
const campoMensaje = document.getElementById("campoMensaje");
const imagenSalida = document.getElementById("imagenSalida");
const areaCopia = document.getElementById("botonCopia");
const mensaje = document.getElementById("mensajes");

const matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function botonEncriptar(){
    const texto = encriptar(campoTexto.value);
    campoMensaje.value = texto;
}

function encriptar(fraseAEncriptar){
    if(/^[a-z\s]+$/.test(fraseAEncriptar)){
        for(let i = 0; i < matriz.length; i++){
            if(fraseAEncriptar.includes(matriz[i][0])){
                fraseAEncriptar = fraseAEncriptar.replaceAll(
                    matriz[i][0], 
                    matriz[i][1]
                );
            } else{
                limpiarCampos();
            }
        }
        campoTexto.value="";

        campoMensaje.style.display = "block";
        imagenSalida.style.display = "none";
        areaCopia.style.display ="block"
        mensaje.style.display = "none";
        return fraseAEncriptar;
    } else {
        limpiarCampos();
        alert("Solo se aceptan letras minúsculas y sin acentos");
        return "";
    }
}

function botonDesencriptar(){
    const texto = desencriptar(campoTexto.value);
    campoMensaje.value = texto;
}

function desencriptar(fraseADesencriptar){
    if(/^[a-z\s]+$/.test(fraseADesencriptar)){
        for(var i = 0; i < matriz.length; i++){
            if(fraseADesencriptar.includes(matriz[i][1])){
                fraseADesencriptar = fraseADesencriptar.replaceAll(
                    matriz[i][1],
                    matriz[i][0]
                );
            } else{
                limpiarCampos();
            }
        }
        campoTexto.value="";

        campoMensaje.style.display = "block";
        imagenSalida.style.display = "none";
        areaCopia.style.display ="block"
        mensaje.style.display = "none";
        return fraseADesencriptar;
    } else {
        limpiarCampos();
        alert("Solo se aceptan letras minúsculas y sin acentos");
        return "";
    }
}

function limpiarCampos(){
    document.getElementById("campoTexto").value = "";
    document.getElementById("campoMensaje").value = ""; 
}

function botonCopiar(){
    let copiar = navigator.clipboard.writeText(campoMensaje.value);
    return copiar;
}