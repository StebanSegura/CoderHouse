function sumar() {
    
    var n1 = prompt("Ingresa Un nro: ");
    var n2 = prompt("Ingresa Otro nro: ");
    console.log("El resultado de la operación es: "+(parseInt(n1)+parseInt(n2)))
}

var dias = ["Lunes", "Martes", "Miercoles",
"Jueves", "Viernes", "Sabado", "Domingo"]


function diasSemana() {
    debugger;
    for(var i = 0; i<7; i++){
        console.log(dias[i]);
    }
}