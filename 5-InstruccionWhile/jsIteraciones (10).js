function Mostrar()
{
	var numero;
	var acumuladorNeg = 0;
	var acumuladorPos = 0;
	var contadorPos = 0;
	var contadorNeg = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPos;
	var promedioNeg;
	var diferencia;
	var respuesta;

	do
	{
		numero = parseInt(prompt("Ingrese un número"));

		if ( numero > 0)
		{
			acumuladorPos = numero + acumuladorPos;
			contadorPos++;
		}
		else if ( numero == 0)
		{
			contadorCeros++;
		}
		else 
		{
			acumuladorNeg = numero + acumuladorNeg;
			contadorNeg++;
		}

		if ( numero % 2 == 0 )
		{
			contadorPares++;
		}

		respuesta = prompt("¿Quiere continuar?").toLowerCase();

	}while ( respuesta == "si")

	promedioPos = acumuladorPos / contadorPos;
	promedioNeg = acumuladorNeg / contadorNeg;
	diferencia = contadorPos - contadorNeg;

	document.write("1- Suma de los negativos es: " + acumuladorNeg + "<br>2- Suma de los positivos es: " + acumuladorPos + "<br>");
	document.write("3- Cantidad de los positivos es: " + contadorPos + "<br>4- Cantidad de los negativos es: " + contadorNeg + "<br>");
	document.write("5- Cantidad de ceros es: " + contadorCeros + "<br>6- Cantidad de numeros pares es: " + contadorPares + "<br>");
	document.write("7- Promedio de los positivos es: " + promedioPos + "<br>8- Promedio de los negativos es: " + promedioNeg + "<br>");
	document.write("9- Diferencia entre positivos y negativos es: " + diferencia + "<br>");
	

}//FIN DE LA FUNCIÓN