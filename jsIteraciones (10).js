function Mostrar()
{
	var numero;
	var acumNeg = 0;
	var acumPos = 0;
	var contPos = 0;
	var contNeg = 0;
	var contCeros = 0;
	var contPares = 0;
	var promPos;
	var promNeg;
	var diferencia;
	var respuesta;

	do
	{
		numero = parseInt(prompt("Ingrese un número"));

		if (numero < 0)
		{
			acumNeg = numero + acumNeg;
			contNeg++;
		}
		else if ( numero > 0)
		{
			acumPos = numero + acumPos;
			contPos++;
		}
		else 
		{
			contCeros++;
		}

		if ( numero % 2 == 0)
		{
			contPares++;
		}

		respuesta = prompt("Desea continuar?").toLowerCase();

	}while (respuesta == "s");

	promNeg = acumNeg / contNeg;
	promPos = acumPos / contPos;
	diferencia = contPos - contNeg;

	document.write("1- Suma de los negativos es: " + acumNeg + "<br>");
	document.write("2- Suma de los positivos es: " + acumPos + "<br>");
	document.write("3- Cantidad de los positivos es: " + contPos + "<br>");
	document.write("4- Cantidad de los negativos es: " + contNeg + "<br>");
	document.write("5- Cantidad de ceros es: " + contCeros + "<br>");
	document.write("6- Cantidad de numeros pares es: " + contPares + "<br>");
	document.write("7- Promedio de los positivos es: " + promPos + "<br>");
	document.write("8- Promedio de los negativos es: " + promNeg + "<br>");
	document.write("9- Diferencia entre positivos y negativos es: " + diferencia + "<br>");
	
}//FIN DE LA FUNCIÓN