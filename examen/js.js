"use strict"

var seguir = "si";
while(seguir == "si"){

var nombre=prompt("nombre");
var edad=prompt("edad");
seguir = prompt("ingrese 'si' para continuar");

 document.write(`
    <ul>
        <li>${nombre} ${edad}</li>
    </ul> `

 );
}


