package com.proyect.advertisingManager;

import java.util.List;

import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.EntityExchangeResult;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.test.web.reactive.server.WebTestClient.BodyContentSpec;

import com.proyect.advertisingManager.dao.AdManagerRepository;
import com.proyect.advertisingManager.dao.UsuarioRepository;
import com.proyect.advertisingManager.entity.Anuncio;
import com.proyect.advertisingManager.entity.Usuario;

import reactor.core.publisher.Mono;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureWebTestClient
public class AdvertisingManagerServiceTest {

	private static final Logger logger = LoggerFactory.getLogger(AdvertisingManagerServiceTest.class);

	@Autowired
	private AdManagerRepository repository;

	@Autowired
	private UsuarioRepository userRepository;

	@Autowired
	private WebTestClient webClient;

	@After
	public void limpieza() throws Exception {
		repository.deleteAll();
		userRepository.deleteAll();
	}

	@Test
	public void addAnuncio() {
		// ANUNCIO 1
		Anuncio anuncio = new Anuncio("Anuncio 1", "Descripcion 1", 0.1, 2.5, "23/06/2019", "Argentina", 15, "F");

		this.webClient.post().uri("/add-anuncio").contentType(MediaType.APPLICATION_JSON_UTF8)
				.accept(MediaType.APPLICATION_JSON_UTF8).body(Mono.just(anuncio), Anuncio.class).exchange()
				.expectStatus().isOk();
	}

	@Test
	public void getAnuncios() {
		// ANUNCIO 1
		Anuncio anuncio = new Anuncio("ANUNCIO 1", "aaaaaaaaaaaaaaaaaaaaaa", 0.3, 6.5, "23/06/2019", "Argentina", 20,
				"F");

		this.webClient.post().uri("/add-anuncio").contentType(MediaType.APPLICATION_JSON_UTF8)
				.accept(MediaType.APPLICATION_JSON_UTF8).body(Mono.just(anuncio), Anuncio.class).exchange()
				.expectStatus().isOk();

		// ANUNCIO 2
		anuncio = new Anuncio("ANUNCIO 2", "BBBBBBBBBBBBBB", 0.1, 1.0, "23/06/2020", "Argentina", 15, "M");

		this.webClient.post().uri("/add-anuncio").contentType(MediaType.APPLICATION_JSON_UTF8)
				.accept(MediaType.APPLICATION_JSON_UTF8).body(Mono.just(anuncio), Anuncio.class).exchange()
				.expectStatus().isOk();

		// ANUNCIO 3
		anuncio = new Anuncio("ANUNCIO 3", "cccccccccccccccccccc", 0.5, 10.0, "23/07/2019", "Argentina", 45, "F");

		this.webClient.post().uri("/add-anuncio").contentType(MediaType.APPLICATION_JSON_UTF8)
				.accept(MediaType.APPLICATION_JSON_UTF8).body(Mono.just(anuncio), Anuncio.class).exchange()
				.expectStatus().isOk();

		BodyContentSpec body = this.webClient.get().uri("/get-anuncios").exchange().expectBody();
		body.jsonPath("$[0].['pais']").isEqualTo("Argentina");
		body.jsonPath("$[1].['pais']").isEqualTo("Argentina");
		body.jsonPath("$[2].['pais']").isEqualTo("Argentina");
	}

	@Test
	public void addAndgetUsuario() {
		// Add Usuario 1
		Usuario user = new Usuario("Jose", "Perez", "a@a.com", "Argentina", 35, "M");

		this.webClient.post().uri("/add-usuario").contentType(MediaType.APPLICATION_JSON_UTF8)
				.accept(MediaType.APPLICATION_JSON_UTF8).body(Mono.just(user), Usuario.class).exchange().expectStatus()
				.isOk();
		// get Usuario 1
		BodyContentSpec body = this.webClient.get().uri("/get-usuarios").exchange().expectBody();
		body.jsonPath("$[0].['nombre']").isEqualTo("Jose");
	}

	@Test
	public void getNoUsuario() {
		// Get No Usuario
		this.webClient.get().uri("/get-usuarios").exchange().expectStatus().is5xxServerError();
	}

	@Test
	public void getNoAdds() {
		// Get No Adds
		this.webClient.get().uri("/get-anuncios").exchange().expectStatus().is5xxServerError();
	}

	@Test
	public void getAnunciosConSegmentacion() {
		// Add Usuario 1
		Usuario user = new Usuario("Jose", "Perez", "a@a.com", "Argentina", 35, "M");

		this.webClient.post().uri("/add-usuario").contentType(MediaType.APPLICATION_JSON_UTF8)
				.accept(MediaType.APPLICATION_JSON_UTF8).body(Mono.just(user), Usuario.class).exchange().expectStatus()
				.isOk();

		// Add Usuario 2
		user = new Usuario("Pele", "Carioca", "a@a.com", "Brasil", 35, "M");

		this.webClient.post().uri("/add-usuario").contentType(MediaType.APPLICATION_JSON_UTF8)
				.accept(MediaType.APPLICATION_JSON_UTF8).body(Mono.just(user), Usuario.class).exchange().expectStatus()
				.isOk();

		// Get Usuarios
		BodyContentSpec body = this.webClient.get().uri("/get-usuarios").exchange().expectBody();

		body.jsonPath("$[0].['nombre']").isEqualTo("Jose");
		body.jsonPath("$[1].['nombre']").isEqualTo("Pele");

		// GET USUARIOS
		EntityExchangeResult<List<Usuario>> result = this.webClient.get().uri("/get-usuarios").exchange()
				.expectBodyList(Usuario.class).returnResult();

		String idJose = null;
		String idPele = null;

		for (Usuario usr : result.getResponseBody()) {
			if (usr.getNombre().equals("Jose")) {
				idJose = usr.getId();
			}
			if (usr.getNombre().equals("Pele")) {
				idPele = usr.getId();
			}
			// logger.info(usr.toPrettyString());
		}

		// ANUNCIO 1
		Anuncio anuncio = new Anuncio("ANUNCIO 1", "aaaaaaaaaaaaaaaaaaaaaa", 0.3, 6.5, "23/06/2019", "Brasil", 35, "M");

		this.webClient.post().uri("/add-anuncio").contentType(MediaType.APPLICATION_JSON_UTF8)
				.accept(MediaType.APPLICATION_JSON_UTF8).body(Mono.just(anuncio), Anuncio.class).exchange()
				.expectStatus().isOk();

		// ANUNCIO 2
		anuncio = new Anuncio("ANUNCIO 2", "BBBBBBBBBBBBBB", 0.1, 1.0, "23/06/2020", "Brasil", 35, "M");

		this.webClient.post().uri("/add-anuncio").contentType(MediaType.APPLICATION_JSON_UTF8)
				.accept(MediaType.APPLICATION_JSON_UTF8).body(Mono.just(anuncio), Anuncio.class).exchange()
				.expectStatus().isOk();

		// ANUNCIO 3
		anuncio = new Anuncio("ANUNCIO 3", "cccccccccccccccccccc", 0.5, 10.0, "23/07/2019", "Brasil", 35, "M");

		this.webClient.post().uri("/add-anuncio").contentType(MediaType.APPLICATION_JSON_UTF8)
				.accept(MediaType.APPLICATION_JSON_UTF8).body(Mono.just(anuncio), Anuncio.class).exchange()
				.expectStatus().isOk();

		// COMO SOLO HAY ANUNCIOS GENERADOS PARA BRASIL, EL USUARIO ARGENTINO NO VA A
		// OBTENER ANUNCIOS
		this.webClient.get().uri("/get-anuncios/" + idJose).exchange().expectStatus().is5xxServerError();

		// COMO SOLO HAY ANUNCIOS GENERADOS PARA BRASIL, EL USUARIO OBTIENE TODOS LOS
		// ANUNCIOS
		this.webClient.get().uri("/get-anuncios/" + idPele).exchange().expectStatus().is2xxSuccessful();

		// AHORA GENERAMOS ANUNCIOS PARA ARGENTINA
		// ANUNCIO 4
		anuncio = new Anuncio("ANUNCIO 4", "aaaaaaaaaaaaaaaaaaaaaa", 0.3, 6.5, "23/06/2019", "Argentina", 35, "M");

		this.webClient.post().uri("/add-anuncio").contentType(MediaType.APPLICATION_JSON_UTF8)
				.accept(MediaType.APPLICATION_JSON_UTF8).body(Mono.just(anuncio), Anuncio.class).exchange()
				.expectStatus().isOk();

		// ANUNCIO 5
		anuncio = new Anuncio("ANUNCIO 5", "BBBBBBBBBBBBBB", 0.1, 1.0, "23/06/2020", "Argentina", 35, "M");

		this.webClient.post().uri("/add-anuncio").contentType(MediaType.APPLICATION_JSON_UTF8)
				.accept(MediaType.APPLICATION_JSON_UTF8).body(Mono.just(anuncio), Anuncio.class).exchange()
				.expectStatus().isOk();

		// ANUNCIO 6
		anuncio = new Anuncio("ANUNCIO 6", "cccccccccccccccccccc", 0.5, 10.0, "23/07/2019", "Argentina", 35, "M");

		this.webClient.post().uri("/add-anuncio").contentType(MediaType.APPLICATION_JSON_UTF8)
				.accept(MediaType.APPLICATION_JSON_UTF8).body(Mono.just(anuncio), Anuncio.class).exchange()
				.expectStatus().isOk();

		// AHORA SI EL USUARIO ARGENTINO OBTENDRA ANUNCIOS
		this.webClient.get().uri("/get-anuncios/" + idJose).exchange().expectStatus().is2xxSuccessful();

		// Buscando para un usuario inexistente
		this.webClient.get().uri("/get-anuncios/" + "a").exchange().expectStatus().is5xxServerError();
	}
}
