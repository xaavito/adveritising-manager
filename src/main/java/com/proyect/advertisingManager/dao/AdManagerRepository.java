package com.proyect.advertisingManager.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.proyect.advertisingManager.entity.Anuncio;

/**
 * Repositorio de acuerdo a las especificaciones, solamente para los anuncios
 * 
 * @author Javier Gonzalez
 *
 */
public interface AdManagerRepository extends MongoRepository<Anuncio, Long> {
	@Query("{ 'pais' : ?0, edad: ?1, genero: ?2 }")
	public List<Anuncio> findBySegmentacion(String pais, int edad, String genero);
}
