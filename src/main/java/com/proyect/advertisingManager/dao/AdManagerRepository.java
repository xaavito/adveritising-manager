package com.proyect.advertisingManager.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

import com.proyect.advertisingManager.entity.Anuncio;
import com.proyect.advertisingManager.entity.Usuario;

/**
 * Repositorio de acuerdo a las especificaciones, solamente para los anuncios
 * @author Javier Gonzalez
 *
 */
public interface AdManagerRepository extends MongoRepository<Anuncio, Long>{
	Long countByEdad(int edad);
	
	//@Query("SELECT * FROM usuario u where u.id = :id") 
    Usuario findUsuarioById(@Param("id") String id);
	
	//@Query("SELECT * FROM anuncio a where a.pais = ?1 AND a.edad = ?2 AND a.genero = ?3")
	@Query("{ 'pais' : ?0, edad: ?1, genero: ?2 }")
    public List<Anuncio> findBySegmentacion(String pais, int edad, String genero);
	
}
