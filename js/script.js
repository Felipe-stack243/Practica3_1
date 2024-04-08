document.addEventListener("DOMContentLoaded", function() {
    // Acceder al boton y al cuadro de texto
    var cambiarColorBtn = document.getElementById("cambiarColorBtn");
    var cuadroTexto     = document.getElementById("cuadroTexto");

    // Agregar un eventListener para el click en el botón
    cambiarColorBtn.addEventListener("click", function(){
        // Generar un color aleatorio en formato hexadecimal
        var color = "#"+Math.floor(Math.random()*16777215).toString(16);
        // Cambiar el color de fondo del cuadro de texto
        cuadroTexto.style.backgroundColor = color;
    });
});