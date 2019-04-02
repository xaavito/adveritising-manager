package com.proyect.advertisingManager.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.proyect.advertisingManager.entity.Anuncio;

/**
 * Repositorio de acuerdo a las especificaciones, solamente para los anuncios
 * @author Javier Gonzalez
 *
 */
public interface AdManagerRepository extends MongoRepository<Anuncio, Long>{
	Long countByEdad(int edad);
}
