function Mostrar()
{
    var num;

    num = parseInt(prompt("Ingrese un numero"));

    for ( var i = 0; i < num; i++)
    {
        num = parseInt(prompt("Ingrese un numero"));

        if ( num == 9)
        {
            break;
        }
    }

}//FIN DE LA FUNCIÓN