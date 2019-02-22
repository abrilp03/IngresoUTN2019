function Mostrar()
{
    var sexo;

    sexo = prompt("Ingrese f o m.");

    while (!(sexo == "f" || sexo == "m"))
    {
        sexo = prompt("Error. Reingrese el sexo.");
    }

    document.getElementById("Sexo").value = sexo;
    

}//FIN DE LA FUNCIÓN