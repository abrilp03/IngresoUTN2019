function Mostrar()
{
    var numero;
    var contadorPares = 0;

    numero = parseInt(prompt("Ingrese un número"));
    
    while( numero <= 0 || isNaN (numero))
    {
        numero = parseInt(prompt("Error. Ingrese un número"));
    }
    for ( var i = 1; i <= numero; i++)
    {
        if ( i % 2 == 0 )
		{
            console.log(i);
            contadorPares++;
        }

    }
    console.log("Cantidad de pares: " + contadorPares);

 



}//FIN DE LA FUNCIÓN