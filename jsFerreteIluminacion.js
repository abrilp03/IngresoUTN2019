/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad;
    var precioCantidad;
    var marca;
    var descuento;
    var impuesto;

    cantidad = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;

    precioCantidad = cantidad * 35;

    if ( cantidad >= 6)
    {
       descuento = precioCantidad * 50 / 100;

       document.getElementById("precioDescuento").value = descuento.toFixed(2);
    }
    else if ( cantidad == 5 && marca == "ArgentinaLuz")
    {
        descuento = precioCantidad * 40 / 100;

        document.getElementById("precioDescuento").value = descuento.toFixed(2);
    }
    else if ( cantidad == 5 && marca != "ArgentinaLuz")
    {
        descuento = precioCantidad * 30 / 100;

        document.getElementById("precioDescuento").value = descuento.toFixed(2);
    }
    else if ( cantidad == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas")
    {
        descuento = precioCantidad * 25 / 100;

        document.getElementById("precioDescuento").value = descuento.toFixed(2);
    }
    else if ( cantidad == 4 && !( marca == "ArgentinaLuz" || marca == "FelipeLamaparas"))
    {
        descuento = precioCantidad * 20 / 100;

        document.getElementById("precioDescuento").value = descuento.toFixed(2);
    }
    else if ( cantidad == 3 && marca == "ArgentinaLuz")
    {
        descuento = precioCantidad * 15 / 100;

        document.getElementById("precioDescuento").value = descuento.toFixed(2);
    }
    else if ( cantidad == 3 && marca == "FelipeLamparas")
    {
        descuento = precioCantidad * 10 / 100;

        document.getElementById("precioDescuento").value = descuento.toFixed(2);
    }
    else if ( cantidad == 3 && !( marca == "ArgentinaLuz" || marca == "FelipeLamparas"))
    {
        descuento = precioCantidad * 5 / 100;

        document.getElementById("precioDescuento").value = descuento.toFixed(2);
    }
   
    impuesto = descuento * 0.1 + descuento;

    alert ("IIBB Usted pago $" + impuesto);
 	
}
