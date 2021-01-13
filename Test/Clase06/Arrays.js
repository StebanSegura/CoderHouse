var frutas = ["Manzana", "Banana"];

/// Agregar Mas Frutas al Final del ARRAY
frutas.push("Naranja","Cereza");

/// Agregar Mas Frutas al Inicio del ARRAY
frutas.unshift("Fresa", "Uva")

/// Impresión en consola con forma de tabla
console.table(frutas);

// Array de OBJETOS
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
var personas  = [];

  var john  = new Person("John", "Smith");
  var jane  = new Person("Jane", "Doe");
  var emily = new Person("Emily", "Jones");
//Impresión Usando función para concatenar.
  console.table([john, jane, emily]);


// función llamada desde el Index
function myFunction() {
    var Nombres = ["Luis", "Esteban"];
    var Apellidos = ["Segura", "Rodriguez"];
    var fullName = Nombres.concat(Apellidos); 
    document.getElementById("imprimir").innerHTML = fullName;
  }

  







