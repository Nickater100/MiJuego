var mando = {
    objeto: null,
    eventosDisponibles: "ongamepadconnected" in window,
    conectado: false,
    iniciar: function(){
     if (mando.eventosDisponibles) {
        window.addEventListener("gamepadconnected", mando.conectar);
        window.addEventListener("gamepaddisconnected", mando.desconectar)
     } else {
        mando.actualizar();
     }
    },
    conectar:function(e){
        mando.objeto = e.gamepad;
        mando.identificar();
    },
    desconectar: function(e){
        console.log("mando desconectado del indice %d: %s.", e.gamepad.index, e.gamepad.id)
    },
    actualizar: function(e){
        if(!mando.eventosDisponibles){
            mandos = null;
            try {
                mandos = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads: []);
                mando.objeto = mandos[0];
                if(!mando.conectado){
                    mando.conectado = true;
                    mando.identificar();
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        if(mando.objeto){
            return;
        }
    },
    identificar: function(e){},
}