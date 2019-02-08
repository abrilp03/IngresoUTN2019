/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var uno;
    var dos;
    
    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;

    uno = parseInt(uno);
    dos = parseInt(dos);

    var suma = uno + dos;

    alert("La suma es " + suma);

}

function restar()
{
    var uno;
    var dos; 

    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;

    uno = parseInt(uno);
    dos = parseInt(dos);

    var resta = uno - dos;

    alert("La resta es " + resta);

}

function multiplicar()
{ 
    var uno;
    var dos; 

    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;

    uno = parseInt(uno);
    dos = parseInt(dos);

    var multiplicar = uno * dos;

    alert("La multipicación es " + multiplicar);
}

function dividir()
{
	var uno;
    var dos; 

    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;

    uno = parseInt(uno);
    dos = parseInt(dos);

    var dividir = uno / dos;

    alert("La división es " + dividir);
}

