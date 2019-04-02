package com.proyect.advertisingManager.controller;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONObject;
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
import com.proyect.advertisingManager.dao.UsuarioRepository;
import com.proyect.advertisingManager.entity.Anuncio;
import com.proyect.advertisingManager.entity.Usuario;
import com.proyect.advertisingManager.service.IAdvertisingManagerService;

/**
 * Controlle general de los API endpoints de la app.
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
	private final UsuarioRepository userRepository;

	AdManagerController(AdManagerRepository repository, UsuarioRepository userRepository) {
		this.repository = repository;
		this.userRepository = userRepository;
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
	 * Metodo de entrada para el agregado de anuncios
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
	ResponseEntity<List<JSONObject>> getAnuncios(@PathVariable String id) {
		logger.info("Get anuncios");
		List<Anuncio> anunciosFromDB = null;
		List<Anuncio> randomAnuncios = null;
		try {
			Usuario user = userRepository.findById(id);

			// Si hay usuario segmentamos, sino, nada.
			if (user != null) {
				anunciosFromDB = repository.findBySegmentacion(user.getPais(), user.getEdad(), user.getGenero());
			}
			else {
				anunciosFromDB = repository.findAll();
			}
			
			// Aca obtenemos los 3 anuncios con su logica.
			randomAnuncios = service.getRandomAnuncios(anunciosFromDB);
			
			// Aca marcamos los anuncios como impresos.
			for (Anuncio anuncio : randomAnuncios) {
				anuncio.setNumeroImpresiones(anuncio.getNumeroImpresiones() + 1);
				repository.save(anuncio);
			}
			// To JSON 
			List<JSONObject> entities = new ArrayList<JSONObject>();
		    for (Anuncio n : randomAnuncios) {
		        JSONObject entity = new JSONObject();
		        entity.put("titulo", n.getTitulo());
		        entity.put("descripcion", n.getDescripcion());
		        entities.add(entity);
		    }
			return new ResponseEntity<List<JSONObject>>	(
					  entities, 
				      HttpStatus.OK);
		} catch (Exception e) {
			logger.info("Something Went wrooong getting anuncios");
			return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).build();
		}
	}
}
