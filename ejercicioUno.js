/**
 Censo Municipal
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria:

necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano
 */
function probarEjercicio()
{
	let mascotaIngresado;
	let tipoPelajeIngresado;
	let edadIngresado;
	let nombreIngresado;
	let razaIngresado;
	let pesoIngresado;
	let estadoClinicoIngresado;
	let temperaturaCorpIngresado;
	let respuestaConfirm;

	let maxPesoPerro;

	let contadorPerro = 0;
	let contadorGato = 0;
	let contadorOtraCosa = 0;

	let contadorTotalMascotas = 0; // total de mascotas
	let contadorEnfermos = 0;
	let porcentajeEnfermos;

	let nombreUltOtraCosa;

	let tipoSinPeloMenorTemp;
	let flagMenorTemperatura = 0;
	let menorTemperaturaMascota;

	let acumuladorTempGato = 0;
	let acumuladorTempPerro = 0;
	let acumuladorTempOtraCosa = 0;

	let promedioTempMayorGato;
	let promedioTempMaoyPerro;
	let promedioTempMayorOtraCosa;

	let tipoMascotaMayorTemp;

	let contadorGatoYPerro = 0; // f)
	let porcentajeGatoYPerro;

	let estadoClinicoMenorMascota; // g)

	let acumuladorPesosGeneral = 0;
	let promedioDePesoGeneral;

	let nombreGatoSinPelosLiviano; // i)
	let flagGatoSinPelos = 0;
	let razaGatoSinPelosLiviano;
	let pesoGatoSinPelosLiviano;

	do
	{
		mascotaIngresado = prompt ("Ingrese mascota (gato, perro , otra cosa) ");
		while (mascotaIngresado != "gato" && mascotaIngresado != "perro" && mascotaIngresado != "otra cosa")
		{
			mascotaIngresado = prompt ("INVALIDO. Ingrese mascota (gato , perro  ,otra cosa) ");
		}
		tipoPelajeIngresado = prompt ("Ingrese tipo pelaje (corto, largo , sin pelo)")
		while (tipoPelajeIngresado != "corto" && tipoPelajeIngresado != "largo" && tipoPelajeIngresado != "sin pelo" )
		{
			tipoPelajeIngresado = prompt ("INVALIDO. Ingrese tipo pelaje (corto, largo , sin pelo)");
		}
		edadIngresado = parseInt(prompt ("Ingrese edad. (+ de 0)"));
		while (edadIngresado < 1 || isNaN(edadIngresado) == true)
		{
			edadIngresado = parseInt(prompt ("INVALIDO. Ingrese edad. (+ de 0)"));
		}
		nombreIngresado = prompt ("Ingrese nombre de su mascota. ");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt ("INVALIDO. Ingrese nombre de su mascota. ");
		}
		razaIngresado =prompt ("Ingrese raza ");
		while(isNaN(razaIngresado)==false)
		{
			razaIngresado =prompt ("INVALIDO. Ingrese raza ");
		}
		pesoIngresado = parseInt(prompt ("Ingrese peso. (+ de 0)"));
		while(isNaN(pesoIngresado)==true)
		{
			pesoIngresado = parseInt(prompt ("INVALIDO. Ingrese peso. (+ de 0)"));
		}
		estadoClinicoIngresado = prompt("Ingrese estado clinico. (enfermo, internado , adopcion) ")
		while(estadoClinicoIngresado != "enfermo" && estadoClinicoIngresado != "internado" && estadoClinicoIngresado != "adopcion" )
		{
			estadoClinicoIngresado = prompt("INVALIDO. Ingrese estado clinico (enfermo, internado , adopcion) ")
		}
		temperaturaCorpIngresado = parseInt(prompt ("Ingrese temperatura (+34° y menor a 41°)"));
		while(temperaturaCorpIngresado < 35 || temperaturaCorpIngresado > 40 || isNaN(temperaturaCorpIngresado)==true)
		{
			temperaturaCorpIngresado = parseInt(prompt ("INVALIDO. Ingrese temperatura (+34° y menor a 41°)"));
		}

		switch (mascotaIngresado)
		{
			case "gato":
				contadorGato++;
				acumuladorTempGato += temperaturaCorpIngresado;
				if (tipoPelajeIngresado == "sin pelo")
				{
					if (flagGatoSinPelos == 0 || pesoIngresado < pesoGatoSinPelosLiviano)
					{
						nombreGatoSinPelosLiviano = nombreIngresado;
						razaGatoSinPelosLiviano = razaIngresado;
						pesoGatoSinPelosLiviano = pesoIngresado;
						flagGatoSinPelos++;
					}
				}
				
				
			break;
				
			case "perro":
				contadorPerro++;
				acumuladorTempPerro += temperaturaCorpIngresado;
				if(contadorPerro == 1 || pesoIngresado > maxPesoPerro)
				{
					maxPesoPerro = pesoIngresado;
				}

				
			break;
				
			case "otra cosa":
				contadorOtraCosa++;
				acumuladorTempOtraCosa += temperaturaCorpIngresado;
				
			break;
		}

		contadorTotalMascotas += contadorGato + contadorPerro + contadorOtraCosa;
		contadorGatoYPerro += contadorGato + contadorPerro; // -f
		acumuladorPesosGeneral += pesoIngresado; // h)

		if (estadoClinicoIngresado == "enfermo")
		{
			contadorEnfermos++;
			porcentajeEnfermos = (contadorEnfermos * 100) / contadorTotalMascotas;
		}
		if(tipoPelajeIngresado == "sin pelo")
		{
			if(flagMenorTemperatura == 0 || temperaturaCorpIngresado < menorTemperaturaMascota)
			{
				menorTemperaturaMascota = temperaturaCorpIngresado;
				tipoSinPeloMenorTemp = mascotaIngresado;
				flagMenorTemperatura++;
			}
		}

		if(contadorGato < contadorPerro && contadorGato < contadorOtraCosa)
		{
			estadoClinicoMenorMascota = estadoClinicoIngresado;
		}
		else if (contadorPerro < contadorOtraCosa && contadorPerro <= contadorGato)
		{
			estadoClinicoMenorMascota = estadoClinicoIngresado;
		}
		else
		{
			estadoClinicoMenorMascota = estadoClinicoIngresado;
		}


		respuestaConfirm = confirm ("Desea ingresar otra mascota?")
	} while(respuestaConfirm == true);

	if(contadorPerro > 0)
	{
		console.log ("A) El perro mas pesado: "+maxPesoPerro); //A)
	}
	
	if(contadorEnfermos > 0)
	{
		console.log ("B) El porcentaje de enfermos por sobre el total de mascotas es: "+porcentajeEnfermos); //B)
	}

	if(mascotaIngresado == "otra cosa")
	{
		nombreUltOtraCosa = nombreIngresado;
		console.log ("C) Nombre de la ult mascota de tipo Otra Cosa: "+nombreUltOtraCosa); //C)
	}

	if(flagMenorTemperatura == 1)
	{
		console.log("D) Animal sin pelo con menor temperatura: "+tipoSinPeloMenorTemp+ " con: "+menorTemperaturaMascota+"°"); //D)
	}

	if (contadorGatoYPerro > 0)
	{
		 porcentajeGatoYPerro = ((contadorGatoYPerro*100) / contadorTotalMascotas);
		 console.log ("f) El porcentaje de gatos y perros por el total de mascotas es: "+porcentajeGatoYPerro) //f)
	}

	promedioDePesoGeneral = acumuladorPesosGeneral / contadorTotalMascotas; // h)

	console.log ("G) El estado clinico de la menor cantidad de mascotas es: "+ estadoClinicoMenorMascota); // g)
	console.log("H) Promedio de kilos de peso de todas las mascotas: "+ promedioDePesoGeneral+"kg");// h)

	if (flagGatoSinPelos == 1)
	{
		console.log ("i) Nombre gato sin pelo mas liviano: "+ nombreGatoSinPelosLiviano + " y su raza: "+ razaGatoSinPelosLiviano);
	}

	

	/*y nos piden informar solo si existe
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano
 */


	

}