function Mostrar()
{
	var numero;

	numero = prompt("Ingrese un número entre 0 y 9");

	while (!(numero >= 0 && numero <= 9))
	{
		numero = prompt("Numero incorrecto. Reingrese un numero entre 0 y 9");
	}

	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN