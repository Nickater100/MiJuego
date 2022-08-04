<?php

$fecha = new DateTime();

$fuentesJavascript = array(
 'js/Ajax.js',
 'js/Teclado.js',
 'js/Rectangulo.js',
 'js/Mando.js',
 'js/BuclePrincipal.js',
 'js/Dimensiones.js',
 'js/inicio.js'
);

foreach($fuentesJavascript as $fuente){
    echo '<script src="' . $fuente . '?'.  $fecha -> getTimestamp().'"></script>';
    echo nl2br("\n");
}