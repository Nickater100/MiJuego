<?php

$fecha = new DateTime();

$fuentesJavascript = array(
 'js/Rectangulo.js',
 'js/Punto.js',
 'js/Sprite.js',
 'js/Tile.js',
 'js/Ajax.js',
 'js/Teclado.js',
 'js/Mando.js',
 'js/BuclePrincipal.js',
 'js/Dimensiones.js',
 'js/inicio.js'
);

foreach($fuentesJavascript as $fuente){
    echo '<script src="' . $fuente . '?'.  $fecha -> getTimestamp().'"></script>';
    echo nl2br("\n");
}