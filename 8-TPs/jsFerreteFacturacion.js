/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var PrecioUno;
    var PrecioDos;
    var PrecioTres;

    PrecioUno = parseFloat(document.getElementById("PrecioUno").value);
    PrecioDos = parseFloat(document.getElementById("PrecioDos").value);
    PrecioTres = parseFloat(document.getElementById("PrecioTres").value);

    var Suma = PrecioUno + PrecioDos + PrecioTres;

    alert("La suma total de los tres precios ingresados es de $" + Suma);
	
}
function Promedio () 
{
    var PrecioUno;
    var PrecioDos;
    var PrecioTres;

    PrecioUno = parseFloat(document.getElementById("PrecioUno").value);
    PrecioDos = parseFloat(document.getElementById("PrecioDos").value);
    PrecioTres = parseFloat(document.getElementById("PrecioTres").value);

    var promedio = (PrecioUno + PrecioDos + PrecioTres) / 3;

    alert("El promedio es de $ " + promedio.toFixed(2));

}
function PrecioFinal () 
{
    var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var Iva;
    var PrecioConIva;
    var suma;

    PrecioUno = parseFloat(document.getElementById("PrecioUno").value);
    PrecioDos = parseFloat(document.getElementById("PrecioDos").value);
    PrecioTres = parseFloat(document.getElementById("PrecioTres").value);

     suma = PrecioUno + PrecioDos + PrecioTres;
     Iva = suma * 21 / 100;
     PrecioConIva = suma + Iva;

     alert("El precio final con IVA es de $" + PrecioConIva);

}