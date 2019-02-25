function Mostrar() 
{
	var numero;
	var contador = 0;
	var maximo;
	var minimo;
	var respuesta;

	do {
		numero = parseInt(prompt("Ingrese un número"));

		if (contador == 0) 
		{
			maximo = numero;
			minimo = numero;
		}

		if (numero > maximo) {
			maximo = numero;
		}
		if (numero < minimo) {
			minimo = numero;
		}

		respuesta = prompt("¿Quiere seguir?").toLowerCase();
		contador++;

	} while (respuesta == "s");

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;



}//FIN DE LA FUNCIÓN