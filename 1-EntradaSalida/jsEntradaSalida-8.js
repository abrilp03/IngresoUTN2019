/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

    var uno;
    var dos;
    
    uno = parseInt(document.getElementById("numeroDividendo").value);
    dos = parseInt(document.getElementById("numeroDivisor").value);

    var resto = uno % dos;

    alert("El resto es " + resto);
}
