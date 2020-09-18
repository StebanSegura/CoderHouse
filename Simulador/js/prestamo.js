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
	var cuota= (prestamo * interes) / (1 - Math.pow( (1+interes) , (-meses) ) );

	//Función Round
	cuota= (Math.round(cuota*100) /100).toFixed(2);

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

	}
} 