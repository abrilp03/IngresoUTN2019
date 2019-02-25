function Mostrar() 
{
	var numero;
	var positivo = 0;
	var negativo = 1;
	var respuesta;
	var flag = 0;

	do {
		numero = parseInt(prompt("Ingrese un número"));

		respuesta = prompt("¿Quiere seguir?").toLowerCase();

		if (numero >= 0) 
		{
			positivo = numero + positivo;
		}
		else 
		{
			negativo = numero * negativo;
			flag = 1;
		}

	} while (respuesta == "si");

	document.getElementById("suma").value = positivo;

	if(flag == 0)
	{
		negativo = 0;
	}

	document.getElementById("producto").value = negativo;

}//FIN DE LA FUNCIÓN