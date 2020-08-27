
var numero = prompt("Bienvenido, Ingresa un un numero: ");

if (parseInt(numero) > 1000){
    alert("Tu numero: "+numero+" Es mayor a 1000");
}else if(parseInt(numero) > 10 && parseInt(numero) < 50){
    alert("Tu numero: "+numero+" se encuentra entre 10 y 50");
}

var palabra = prompt("Ingresa un Saludo: ");
palabra = palabra.toLowerCase();
if (palabra == 'hola'){
    console.log(palabra+" es un saludo muy basico")
}

