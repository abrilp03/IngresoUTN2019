function Mostrar()
{
    var mes;

    mes = document.getElementById("mes").value;

    switch ( mes )
    {
        case "Enero":
             alert("Que comiences bien el año!!");
             break;

        case "Marzo":
             alert("A clases!!");
             break;
        case "Julio":
             alert("Se vienen las vacaciones!!");
             break;
        case "Diciembre":
             alert("Felices Fiestas!!");
             break;
        default:
             alert("No hay mensaje asignado para estos meses.");
             break;
    }




}//FIN DE LA FUNCIÓN