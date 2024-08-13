function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    if (texto.length !== 0) {
        let textoCifrado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con Éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.jpg";
    } else {
        muñeco.src = "./img/muñeco.png";
        swal("Ooops!","Debes ingresar un Texto", "warning");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    if (texto.length !== 0) {
        let textoCifrado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con Éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.jpg";
    } else {
        muñeco.src = "./img/muñeco.png";
        swal("Ooops!","Debes ingresar un Texto", "warning");
    }
}


