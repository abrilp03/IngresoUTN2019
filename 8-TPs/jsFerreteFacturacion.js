/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    suma = precio1 + precio2 + precio3;

    alert("La suma de los tres precios ingresados es de $" + suma);

}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var promedio;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    promedio = (precio1 + precio2 + precio3) / 3

    alert("El promedio entre los tres productos es de $" + promedio.toFixed(2));
	
}
function PrecioFinal () 
{
    var precio1;
    var precio2;
    var precio3;
    var preciofinal;
    var IVA;
    var precioFinalConIVA;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    preciofinal = precio1 + precio2 + precio3;
    IVA = preciofinal * 21 / 100;
    precioFinalConIVA = preciofinal + IVA;

    alert("El precio total entre los tres productos con un IVA de 21% es de $" + precioFinalConIVA.toFixed(2));
	
}