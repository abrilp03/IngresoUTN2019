function Mostrar()
{
	var nota;

	nota = Math.floor(Math.random() * 10 + 1);

	alert( nota );

	if ( nota >= 9 && nota <= 10 )
	{
		alert ("EXCELENTE");
	}
	else if ( nota >= 4 )
	{
		alert ("APROBÓ");
	}
	else 
	{
		alert ("Vamos, la próxima se puede");
	}
	

}//FIN DE LA FUNCIÓN