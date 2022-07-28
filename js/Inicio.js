document.addEventListener("DOMContentLoaded", function(){
    inicio.iniciarJuego();
}, false);

var inicio = {
  iniciarJuego: function() {
   console.log("juego iniciado");
   dimensiones.iniciar();
   var r = new rectangulo(0, 0, 100, 100);
   var r2 = new rectangulo(100, 0, 100, 100);
   buclePrincipal.iterar();
  }
};