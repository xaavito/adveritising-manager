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
	 * Metodo Helper para insertar usuario
	 * 
	 * @param newAnuncio
	 * @return
	 */
	@PostMapping("/add-usuario")
	ResponseEntity<Object> addUser(@RequestBody Usuario usuario) {
		logger.info("Adding new User");
		try {
			userRepository.save(usuario);
			return new ResponseEntity<Object>("Usuario Added Correctly", HttpStatus.OK);
		} catch (Exception e) {
			logger.info("NO OK Something Went wrooong adding user " + e.getMessage());
			return new ResponseEntity<Object>("Error agregando Usuarios", HttpStatus.SERVICE_UNAVAILABLE);
		}
	}

	/**
	 * Metodo helper para obtener usuarios
	 * 
	 * @return
	 */
	@GetMapping("/get-usuarios")
	ResponseEntity<Object> getUsuarios() {
		logger.info("Get anuncios sin ID");
		List<Usuario> allUsers = null;
		try {
			allUsers = userRepository.findAll();

			return new ResponseEntity<Object>(allUsers, HttpStatus.OK);
		} catch (Exception e) {
			logger.info("Something Went wrooong getting anuncios " + e.getStackTrace());
			return new ResponseEntity<Object>("Error Obteniendo Usuarios", HttpStatus.SERVICE_UNAVAILABLE);
		}
	}

	/**
	 * Metodo de entrada para el agregado de anuncios
	 * 
	 * @param newAnuncio
	 * @return
	 */
	@PostMapping("/add-anuncio")
	ResponseEntity<Object> addAnuncio(@RequestBody Anuncio newAnuncio) {
		logger.info("Adding new anuncio");
		try {
			repository.save(newAnuncio);
			return new ResponseEntity<Object>("Anuncio Added Correctly", HttpStatus.OK);
		} catch (Exception e) {
			logger.info("NO OK Something Went wrooong adding anuncio" + e.getMessage());
			return new ResponseEntity<Object>("Error agregando anuncio", HttpStatus.SERVICE_UNAVAILABLE);
		}
	}

	/**
	 * Metodo para obtener anuncios ya sea con o sin segmentacion
	 * 
	 * @param id
	 * @return
	 */
	@GetMapping("/get-anuncios/{id}")
	ResponseEntity<Object> getAnuncios(@PathVariable String id) {
		logger.info("Get anuncios usuario logueado");
		List<Anuncio> anunciosFromDB = null;
		List<Anuncio> randomAnuncios = null;
		try {
			Usuario user = userRepository.findById(id);

			if (user != null) {
				logger.info("Usuario en encontrado " + user.toPrettyString());
				anunciosFromDB = repository.findBySegmentacion(user.getPais(), user.getEdad(), user.getGenero());

				if (anunciosFromDB != null && anunciosFromDB.size() > 0) {
					logger.info("anuncios encontrados para la segmentacion " + anunciosFromDB.size());
					// Aca obtenemos los 3 anuncios con su logica.
					randomAnuncios = service.getRandomAnuncios(anunciosFromDB);

					// Aca marcamos los anuncios como impresos.
					for (Anuncio anuncio : randomAnuncios) {
						anuncio.setNumeroImpresiones(anuncio.getNumeroImpresiones() + 1);
						repository.save(anuncio);
					}
					return new ResponseEntity<Object>(randomAnuncios, HttpStatus.OK);
				} else {
					return new ResponseEntity<Object>("No hay anuncios para ese segmentacion",
							HttpStatus.SERVICE_UNAVAILABLE);
				}
			} else {
				return new ResponseEntity<Object>("No hay usuario con ese id", HttpStatus.SERVICE_UNAVAILABLE);
			}
		} catch (Exception e) {
			logger.info("Something Went wrooong getting anuncios");
			return new ResponseEntity<Object>("Error Obteniendo anuncios by user id", HttpStatus.SERVICE_UNAVAILABLE);
		}
	}

	/**
	 * Metodo para obtener anuncios sin segmentacion
	 * 
	 * @return
	 */
	@GetMapping("/get-anuncios")
	ResponseEntity<Object> getAnuncios() {
		logger.info("Get anuncios sin ID");
		List<Anuncio> anunciosFromDB = null;
		List<Anuncio> randomAnuncios = null;
		try {
			anunciosFromDB = repository.findAll();

			for (Anuncio anuncio : anunciosFromDB) {
				logger.info(anuncio.toPrettyString());
			}

			if (anunciosFromDB != null && anunciosFromDB.size() > 0) {
				// Aca obtenemos los 3 anuncios con su logica.
				randomAnuncios = service.getRandomAnuncios(anunciosFromDB);

				// Aca marcamos los anuncios como impresos.
				for (Anuncio anuncio : randomAnuncios) {
					anuncio.setNumeroImpresiones(anuncio.getNumeroImpresiones() + 1);
					repository.save(anuncio);
				}

				return new ResponseEntity<Object>(randomAnuncios, HttpStatus.OK);
			}
			return new ResponseEntity<Object>("No hay Anuncios a mostrar", HttpStatus.FORBIDDEN);
		} catch (Exception e) {
			logger.info("Something Went wrooong getting anuncios " + e.getStackTrace());
			return new ResponseEntity<Object>("Error Obteniendo anuncios", HttpStatus.SERVICE_UNAVAILABLE);
		}
	}
}
