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
    var precioConDescuento;
    var ingresoBruto;
    var impuesto;
    var flag = 0;

    cantidad = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;

    precioCantidad = cantidad * 35;

    if ( cantidad >= 6)
    {
       precioConDescuento = precioCantidad * 50 / 100;
    } 
    else if ( cantidad == 5)
    {
        if ( marca == "ArgentinaLuz")
        {
            precioConDescuento = precioCantidad * 50 / 100;
        }
        else 
        {
            precioConDescuento = precioCantidad * 30 / 100;
        }
    }
    else if ( cantidad == 4)
    {
        if ( marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            precioConDescuento = precioCantidad * 25 / 100;
        }
        else
        {
            precioConDescuento = precioCantidad * 20 / 100;
        }
    }
    else if ( cantidad == 3)
    {
        if ( marca == "ArgentinaLuz")
        {
            precioConDescuento = precioCantidad * 15 / 100;
        }
        if ( marca == "FelipeLamparas")
        {
            precioConDescuento = precioCantidad * 10 / 100;
        }
        else 
        {
            precioConDescuento = precioCantidad * 5 / 100;
        }
    }
    if ( precioConDescuento > 120 )
    {
        ingresoBruto = precioConDescuento * 10 / 100;
        impuesto = precioConDescuento + ingresoBruto;
        
        flag = 1;
    }

    document.getElementById("precioDescuento").value = precioConDescuento;

    if ( flag == 1 )
    {
        alert ("Impuesto a pagar $" + impuesto + ". Usted pagó $" + ingresoBruto + " de IIBB.");
    }





}
