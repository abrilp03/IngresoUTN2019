function Mostrar()
{
	var numero;
	var positivo=0;
	var negativo=1;
	var respuesta;
	var flag = 0;

	do
	{
		numero = parseInt(prompt("Ingrese un numero"));

		if( numero >= 0)
		{
			positivo = numero + positivo;
		}
		else
		{
			negativo = numero * negativo;
			flag = 1;
		}

		respuesta = prompt("¿Quiere continuar?").toLowerCase();
		
	}while (respuesta == "si");

	if (flag == 0)
	{
		negativo = 0;
	}


	document.getElementById("suma").value = positivo;
	document.getElementById("producto").value = negativo;
}