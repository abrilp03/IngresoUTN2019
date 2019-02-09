/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var uno;
    var dos;

    uno = parseInt(document.getElementById("numeroUno").value);
    dos = parseInt(document.getElementById("numeroDos").value);

    var suma = uno + dos;

    alert("El resultado de su suma es " + suma);

}

