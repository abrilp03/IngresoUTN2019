function Mostrar()
{
    var numero;
    var contadorDivisores = 0;

    numero = parseInt(prompt("Ingrese un número"));

    while( numero <= 0 || isNaN (numero))
    {
        numero = parseInt(prompt("Error. Ingrese un número"));
    }
    for ( var i = 1; i <= numero; i++)
    {
        if ( numero % i == 0)
		{
            console.log(i);
            contadorDivisores++;
        }

    }
    console.log("Cantidad de divisores: " + contadorDivisores);






}//FIN DE LA FUNCIÓN