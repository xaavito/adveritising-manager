package com.proyect.advertisingManager.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import com.proyect.advertisingManager.entity.Usuario;

/**
 * Repositorio de acuerdo a las especificaciones, solamente para los anuncios
 * @author Javier Gonzalez
 *
 */
public interface UsuarioRepository extends MongoRepository<Usuario, Long>{
    Usuario findById(@Param("id") String id);
}
