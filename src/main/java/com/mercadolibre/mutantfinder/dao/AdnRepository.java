package com.mercadolibre.mutantfinder.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mercadolibre.mutantfinder.entity.Adn;

/**
 * Repositorio de acuerdo a las especificaciones, solamente para el ADN
 * @author Javier Gonzalez
 *
 */
public interface AdnRepository extends MongoRepository<Adn, Long>{
	Long countByIsMutant(int isMutant);
}
