/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var uno;
    var dos;

    uno = parseInt(document.getElementById("numeroUno").value);
    dos = parseInt(document.getElementById("numeroDos").value);

    var suma = uno + dos;

    alert("El resultado de su suma es " + suma);

}

function restar()
{
    var uno;
    var dos;

    uno = parseInt(document.getElementById("numeroUno").value);
    dos = parseInt(document.getElementById("numeroDos").value);

    var  resta = uno - dos;

    alert ("El resultado de su resta es " + resta);

}

function multiplicar()
{ 
    var uno;
    var dos;
    var multiplicar;

    uno = parseInt(document.getElementById("numeroUno").value);
    dos = parseInt(document.getElementById("numeroDos").value);

    var multiplicar = uno * dos;

    alert("El resultado de su multiplicación es " + multiplicar);
	
}

function dividir()
{
    var uno;
    var dos;
    var dividir;

    uno = parseInt(document.getElementById("numeroUno").value);
    dos = parseInt(document.getElementById("numeroDos").value);

    var dividir = uno / dos;

    alert("El resultado de su división es " + dividir);
	
}

