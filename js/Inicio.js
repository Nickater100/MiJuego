document.addEventListener("DOMContentLoaded", function(){
    inicio.iniciarJuego();
}, false);

var inicio = {
  iniciarJuego: function() {
   console.log("juego iniciado");
   buclePrincipal.iterar()
  }
};