package com.proyect.advertisingManager.service.impl;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.proyect.advertisingManager.entity.Anuncio;
import com.proyect.advertisingManager.service.IAdvertisingManagerService;

/**
 * Servicio general que tiene todo el manejo para la obtencion de anuncios
 * 
 * @author Javier Gonzalez
 *
 */
@Service
public class AdvertisingManagerService implements IAdvertisingManagerService {

	private static final Logger logger = LoggerFactory.getLogger(AdvertisingManagerService.class);

	/**
	 * Metodo que obtiene los 3 anuncios
	 */
	@Override
	public List<Anuncio> getRandomAnuncios(List<Anuncio> anunciosFromDB) {
		logger.info("getRandomAnuncios...");
		List<Anuncio> resultingAnuncios = new ArrayList<Anuncio>();
		// Compute the total weight of all items together
		double totalWeight = 0.0d;
		for (Anuncio i : anunciosFromDB) {
			totalWeight += i.getCostoImpresion();
		}

		Anuncio randomAnuncio = null;
		boolean presupuestoImpresionNoAlcanzado = false;
		int cantidadDeImpresionesRestantes = 0;
		boolean logicaDeFechasImpresion = false;
		boolean impresionNoVencida = false;
		String[] fechaArray;

		LocalDate dateToday = LocalDate.now();
		LocalDate dateFinImpresion = null;

		// Establecemos un limite de ratio de impresion dias para tratar que no se agote
		// antes de tiempo.
		double thresholdImpresion = 0.25;

		// Mientras sea menor a 3 sigo agregando
		while (resultingAnuncios.size() < 3) {
			randomAnuncio = getRandomAnuncio(totalWeight, anunciosFromDB);

			String fechaFinalizacion = randomAnuncio.getFechaFinalizacion();

			try {
				fechaArray = fechaFinalizacion.split("/");
				int year = Integer.valueOf(fechaArray[2]);
				int month = Integer.valueOf(fechaArray[1]);
				int day = Integer.valueOf(fechaArray[0]);

				dateFinImpresion = LocalDate.of(year, month, day);

			} catch (Exception e) {
				logger.error(e.getMessage());
			}

			// Dias restantes para que la publicacion no se deba imprimir mas.
			long daysBetween = ChronoUnit.DAYS.between(dateToday, dateFinImpresion);

			// Aca calculamos si nos pasamos del presupuesto, si nos pasamos no se imprime
			// mas
			presupuestoImpresionNoAlcanzado = ((randomAnuncio.getNumeroImpresiones() + 1)
					* randomAnuncio.getCostoImpresion()) < randomAnuncio.getCostoTotalMaximo();

			// Aca trataremos de no quedarnos sin impresiones antes de la fecha
			cantidadDeImpresionesRestantes = (int) (randomAnuncio.getCostoTotalMaximo()
					/ (((randomAnuncio.getNumeroImpresiones() == 0 ? 1 : randomAnuncio.getNumeroImpresiones()))
							* randomAnuncio.getCostoImpresion()));

			// La idea aca es que vayan de la mano la cantidad de impresiones restantes con
			// los dias que quedan.

			if (cantidadDeImpresionesRestantes >= daysBetween) {
				logicaDeFechasImpresion = true;
			} else {
				if (thresholdImpresion > (cantidadDeImpresionesRestantes / daysBetween)) {
					logicaDeFechasImpresion = true;
				} else {
					logicaDeFechasImpresion = false;
				}
			}

			// La impresion no debe estar vencida
			impresionNoVencida = daysBetween >= 0;

			// Solo agrego si ya no esta, hay que pensar que quizas el random traiga el
			// mismo mas de una vez
			if (!resultingAnuncios.contains(randomAnuncio) && presupuestoImpresionNoAlcanzado && logicaDeFechasImpresion
					&& impresionNoVencida) {
				resultingAnuncios.add(randomAnuncio);
			}
		}

		return resultingAnuncios;
	}

	/**
	 * Metodo que calcula y obtiene un anuncio basado en su peso.
	 * 
	 * @param totalWeight
	 * @param anunciosFromDB
	 * @return
	 */
	private Anuncio getRandomAnuncio(double totalWeight, List<Anuncio> anunciosFromDB) {
		logger.info("getRandomAnuncio...");
		double random = Math.random() * totalWeight;
		for (Anuncio anuncio : anunciosFromDB) {
			random -= anuncio.getCostoImpresion();
			if (random <= 0.0d) {
				return anuncio;
			}
		}
		return null;
	}
}
