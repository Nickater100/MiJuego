document.addEventListener("DOMContentLoaded", function(){
    inicio.iniciarJuego();
}, false);

var inicio = {
  iniciarJuego: function() {
   console.log("juego iniciado");
   teclado.iniciar();
   dimensiones.iniciar();
   inicio.recargarTiles();
   buclePrincipal.iterar();
  }, 
  recargarTiles: function(){
   document.getElementById("juego").innerHTML = "";
   for (let y = 0; y < dimensiones.obtenerTilesVerticales(); y++) {
    for (let x = 0; x < dimensiones.obtenerTilesHorizontales(); x++) {
        var r = new rectangulo(x * dimensiones.ladoTiles, y * dimensiones.ladoTiles, dimensiones.ladoTiles, dimensiones.ladoTiles);
    }
   }
  }
};