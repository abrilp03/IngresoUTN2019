function Mostrar()
{
	var nota;

	nota = Math.floor(Math.random() * 10 + 1);


	if ( nota >= 9 && nota <= 10 )
	{
		alert ( nota + ": EXCELENTE" );
	}
	else if ( nota >= 4 )
	{
		alert ( nota + ": APROBÓ" );
	}
	else 
	{
		alert ( nota + ": Vamos, la próxima se puede" );
	}
	

}//FIN DE LA FUNCIÓN