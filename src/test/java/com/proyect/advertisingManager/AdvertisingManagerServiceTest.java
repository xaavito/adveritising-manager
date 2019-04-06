package com.proyect.advertisingManager;

import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;

import com.proyect.advertisingManager.dao.AdManagerRepository;
import com.proyect.advertisingManager.dao.UsuarioRepository;
import com.proyect.advertisingManager.entity.Anuncio;

import reactor.core.publisher.Mono;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureWebTestClient
public class AdvertisingManagerServiceTest {

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
		Anuncio anuncio = new Anuncio("Nada", "Nada", 0.1, 2.5, "23/06/2019", "Argentina", 15, "F");

		this.webClient.post().uri("/add-anuncio").contentType(MediaType.APPLICATION_JSON_UTF8)
				.accept(MediaType.APPLICATION_JSON_UTF8).body(Mono.just(anuncio), Anuncio.class).exchange()
				.expectStatus().isOk();
		// this.webClient.get().uri("/all").exchange().expectBody().json("{\"ratio\":\"0.5\"}");
	}

	@Test
	public void getAnuncios() {
		// ANUNCIO 1
		Anuncio anuncio = new Anuncio("ANUNCIO 1", "aaaaaaaaaaaaaaaaaaaaaa", 0.3, 6.5, "23/06/2019", "Argentina", 20, "F");

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

		System.out.println(this.webClient.get().uri("/get-anuncios").exchange().expectBody(). returnResult().getResponseBody().toString());
	}
}
