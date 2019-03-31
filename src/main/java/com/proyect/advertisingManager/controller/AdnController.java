package com.proyect.advertisingManager.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.proyect.advertisingManager.dao.AdnRepository;
import com.proyect.advertisingManager.entity.Adn;
import com.proyect.advertisingManager.entity.Stats;
import com.proyect.advertisingManager.excepction.NotValidDNASequenceException;
import com.proyect.advertisingManager.service.IAdvertisingManagerService;

/**
 * 1 de los 2 controllers de entradas. Solo para el chequeo de si es mutante o
 * no.
 * 
 * @author Javier Gonzalez
 *
 */
@RestController
public class AdnController {

	private static final Logger logger = LoggerFactory.getLogger(AdnController.class);

	@Autowired
	private IAdvertisingManagerService service;

	private final AdnRepository repository;

	AdnController(AdnRepository repository) {
		this.repository = repository;
	}

	/**
	 * Metodo solamente de prueba, hay que removerlo
	 * 
	 * @return
	 */
	@GetMapping("/all")
	List<Adn> all() {
		logger.info("Getting all calls to service");
		return repository.findAll();
	}

	/**
	 * Metodo de entrada para el chequeo de un ADN es mutante o humano
	 * 
	 * @param newAdn
	 * @return
	 */
	@PostMapping("/mutant")
	ResponseEntity mutant(@RequestBody Adn newAdn) {
		logger.info("Checking for new muttants");
		try {
			boolean result = service.isMutant(newAdn.getDna());
			newAdn.setIsMutant(result ? 1 : 0);
			repository.save(newAdn);
			if (newAdn.getIsMutant() == 1) {
				logger.info("OK, is mutant");
				return ResponseEntity.status(HttpStatus.OK).build();
			} else {
				logger.info("NO OK, is a filthy human!");
				return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
			}
		} catch (NotValidDNASequenceException e) {
			logger.info("NO OK, Wrong DNA Sequence");
			return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
		} catch (Exception e) {
			logger.info("NO OK Something Went wrooong");
			return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
		}
	}

	/**
	 * Metodo de entrada para la obtencion de estadisticas generales
	 * 
	 * @return
	 */
	@GetMapping("/stats")
	Stats stats() {
		logger.info("CALLING STATISTICS!");
		Long mutants = repository.countByIsMutant(1);

		Long humans = repository.countByIsMutant(0);

		double r;
		if (humans == 0) {
			r = 0.0;
		} else {
			r = new Double(mutants) / new Double(humans);
		}

		logger.info("resultado contando: " + r);
		return new Stats(mutants.intValue(), humans.intValue(), String.valueOf(r));
	}
}
