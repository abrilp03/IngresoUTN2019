function Mostrar()
{
	var numero; 
	numero = prompt("ingrese un número entre 0 y 9.");
	
	while ( !(numero >= 0 && numero < 10) )
	{
		numero = prompt("Numero Ingresado no es válido. Ingrese un número entre 0 y 9.");
	}

	document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN