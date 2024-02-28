const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

//As "chaves" de criptografia que utilizaremos são:
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    if(textoEncriptado.length<1){
        alert("Digite o texto a ser criptografado");
    }else{
        mensagem.value = textoEncriptado;
        textArea.value = "";
        ocultarImagemAlerta();
    }
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    if(textoEncriptado.length<1){
        alert("Digite o texto a ser descriptografado");
    }else{
        mensagem.value = textoEncriptado;
        textArea.value = "";
        ocultarImagemAlerta();
    }
}

function btnCopiar() {
    if (mensagem.value === "") {
        alert("Não há mensagem a ser copiada!");
    } else {
        mensagem.select();
        document.execCommand("copy");
        mensagem.value = "";
        exibirImagemAlerta();
        alert("Texto copiado!");
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][1])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringEncriptada;
}

const imagemBoneco = document.querySelector('.boneco');
const imagemAlerta = document.querySelector('.alerta');

function exibirImagemAlerta() {
    imagemBoneco.style.display = 'block';
    imagemAlerta.style.display = 'block';
}

function ocultarImagemAlerta() {
    imagemBoneco.style.display = 'none';
    imagemAlerta.style.display = 'none';
}