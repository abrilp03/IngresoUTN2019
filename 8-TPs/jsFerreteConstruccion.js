/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var area;
    var alambre;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);

    area = largo * 2 + ancho * 2;
    alambre = area * 3;

    alert("La cantidad de alambre a comprar es de: " + alambre + "m de alambre");

}
function Circulo () 
{
    var radio;
    var perimetro;
    var alambre;

    radio = parseFloat(document.getElementById("Radio").value);

    perimetro = Math.PI * radio * 2;
    alambre = perimetro * 3;

    alert("La cantidad de alambre a comprar es de " + alambre.toFixed(2) + "de alambre")
	
}
function Materiales () 
{
    var largo;
    var ancho;
    var superficie;
    var cemento;
    var cal;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);

    superficie = largo * ancho,
    cemento = superficie * 2;
    cal = superficie * 3;

    alert("Siendo la superficie del terreno " + superficie + " m². La cantidad a comprar de bolsas de cemento es de  " + cemento + " y la cantidad a comprar de bolsas de cal es de " + cal);
	
}