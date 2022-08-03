let buclePrincipal = {
    idEjecucion: null,
    ultimoRegistro: 0,
    APS: 0,      // Actualizaciones por segundo
    FPS: 0,      // Frames por segundo
    iterar: function(registroTemporal){
      buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);

      buclePrincipal.actualizar(registroTemporal);
      buclePrincipal.dibujar();

      if (registroTemporal - buclePrincipal.ultimoRegistro > 999) {
        buclePrincipal.ultimoRegistro = registroTemporal;
        console.log("APS: " + buclePrincipal.APS + " | FPS: " + buclePrincipal.FPS);
        buclePrincipal.APS = 0;
        buclePrincipal.FPS = 0;
      }

    },
    detener: function(){

    },
    actualizar: function(registroTemporal){
      teclado.reiniciar();
      mando.actualizar();
      buclePrincipal.APS++;
    },
    dibujar: function(registroTemporal){
      buclePrincipal.FPS++;
    }
};
