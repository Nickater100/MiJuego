document.addEventListener("DOMContentLoaded", function(){
    inicio.iniciarJuego();
}, false);

var inicio = {
  iniciarJuego: function() {
   console.log("juego iniciado");
   dimensiones.iniciar();
   buclePrincipal.iterar();
  }
};