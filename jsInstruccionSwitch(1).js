function Mostrar()
{
    var mes;
    var enunciado;

    mes = document.getElementById('mes').value;

    switch ( mes )
    {case "Enero":

        enunciado = "Que comiences bien el año!!";
        
        break; 

    case "Marzo":

        enunciado = "A clases!!";

        break;

    case "Julio":

        enunciado = "Se vienen las vaciones!!";

        break;

    case "Diciembre":

        enunciado = "Felices Fiestas!!";

        break;

    default:

        enunciado = "No se tiene información de estos meses";

    }

    alert(enunciado);


}//FIN DE LA FUNCIÓN