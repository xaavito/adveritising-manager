package com.proyect.advertisingManager.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.proyect.advertisingManager.dao.AdManagerRepository;
import com.proyect.advertisingManager.entity.Anuncio;
import com.proyect.advertisingManager.service.IAdvertisingManagerService;

/**
 * 1 de los 2 controllers de entradas. Solo para el chequeo de si es mutante o
 * no.
 * 
 * @author Javier Gonzalez
 *
 */
@RestController
public class AdManagerController {

	private static final Logger logger = LoggerFactory.getLogger(AdManagerController.class);

	@Autowired
	private IAdvertisingManagerService service;

	private final AdManagerRepository repository;

	AdManagerController(AdManagerRepository repository) {
		this.repository = repository;
	}

	/**
	 * Metodo solamente de prueba, hay que removerlo
	 * 
	 * @return
	 */
	@GetMapping("/all")
	List<Anuncio> all() {
		logger.info("Getting all calls to service");
		return repository.findAll();
	}

	/**
	 * Metodo de entrada para el chequeo de un ADN es mutante o humano
	 * 
	 * @param newAnuncio
	 * @return
	 */
	@PostMapping("/add-anuncio")
	ResponseEntity addAnuncio(@RequestBody Anuncio newAnuncio) {
		logger.info("Adding new anuncio");
		try {
			repository.save(newAnuncio);
			return ResponseEntity.status(HttpStatus.OK).build();	
		} catch (Exception e) {
			logger.info("NO OK Something Went wrooong");
			return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).build();
		}
	}
	
	/**
	 * Metodo para obtener anuncios ya sea con o sin segmentacion
	 * 
	 * @param id
	 * @return
	 */
	@GetMapping("/get-anuncios/{id}")
	ResponseEntity getAnuncios(@PathVariable String id) {
		logger.info("Get anuncios");
		try {
			return new ResponseEntity<>(
				      "Your ID is " + id, 
				      HttpStatus.OK);
			//return ResponseEntity.status(HttpStatus.OK).build();	
		} catch (Exception e) {
			logger.info("Something Went wrooong getting anuncios");
			return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).build();
		}
	}
}
