function Mostrar()
{
	var numero;
	var acumulador = 0;
	var contador = 0;
	var promedio;
	var seguir = "si";

	do
	{
		numero = parseInt(prompt("Ingrese un número."));

		acumulador = numero + acumulador;
		contador = contador + 1;

		seguir = prompt("¿Quiere seguir ingresando un número? \nUse si o no.");

	} while (seguir == "si");

	promedio = acumulador / contador;

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = promedio;
	
}