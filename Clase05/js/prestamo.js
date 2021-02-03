

function calcularCuota()
{
	var prestamo = document.getElementById("prestamo").value;
	var interes  = document.getElementById("interes").value;
	var meses    = document.getElementById("meses").value;
	var nombre   = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var fullName = nombre +' '+ apellido;
	// Definición de Arreglo
	var info = [];

	//Pasando el interes a anual.
	interes = ( (interes/100) / 12);

	//Calcular 
	var cuota = (prestamo * interes) / (1 - Math.pow( (1+interes) , (-meses) ) );

	//Función Round
	cuota = (Math.round(cuota*100) /100).toFixed(2);

	//Validación Campos
	if (isNaN(cuota) || cuota == "Infinity" || cuota == 0)
	{
		document.getElementById("cuotamensual").innerHTML = "Llene todos los datos.";
	}
	else
	{
		document.getElementById("cuotamensual").innerHTML=cuota;
		//
				//Agregar Valore al Arreglo
				info.push(fullName, cuota);
				//Impresión de Arreglo
				document.getElementById("nombreid").innerHTML=info[0];
				document.getElementById("valorid").innerHTML=info[1];

		var PersonaUno = new Procesar(document.getElementById("nombre").value, 
									  document.getElementById("apellido").value, 
									  document.getElementById("prestamo").value);
									  
		msg = 'Señor(a) El Prestamos Esta En Proceso';
		alert(msg);
		
		PersonaUno.mostrarDatos();

	}
}

function Procesar (p_nombre, p_apellido, p_prestamos) {

	this.nombre = p_nombre;
	this.apellido = p_apellido;
	this.prestamo = p_prestamos;
	
	///Metodo
	this.mostrarDatos = function () {
	
			var msg = 'Los Datos De La Solicitod Son Nombre:   ' + this.nombre;
			msg = msg + ';   Apellidos:   ' + this.apellido + ';   Valor Prestamo:   ' + this.prestamo;
			alert(msg);
			}
	
	}

