function Mostrar()
{
    var numero;
    var flag = 0
    
    numero = parseInt(prompt("Ingrese un número"));

    for ( var i = 2; i < ( numero / 2); i++)
    {
        if ( numero % 2 == 0)
        {
            flag = 1
        }
    }
    
    if ( flag == 0)
    {
        alert("El número es primo");
    }
    else
    {
        alert ("El número no es primo");
    }




}//FIN DE LA FUNCIÓN