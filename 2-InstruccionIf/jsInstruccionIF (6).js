function Mostrar()
{
    var edad;

    edad = parseInt(document.getElementById("edad").value);

    if ( edad >= 18)
    {
        alert ("Usted es adulto");
    }
    else if ( edad >= 13 && edad <= 17)
    {
        alert ("Usted es adolescente");
    }
    else
    {
        alert ("Usted es niño");
    }


}//FIN DE LA FUNCIÓN
