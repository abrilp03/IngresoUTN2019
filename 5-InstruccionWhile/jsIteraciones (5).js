function Mostrar()
{
    var sexo;

    sexo = prompt("Ingrese f o m.").toLowerCase();

    while (!(sexo == "f" || sexo == "m"))
    {
        sexo = prompt("Error. Reingrese el sexo.").toLowerCase();
    }

    document.getElementById("Sexo").value = sexo;


}//FIN DE LA FUNCIÓN