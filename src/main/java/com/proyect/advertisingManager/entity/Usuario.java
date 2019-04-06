package com.proyect.advertisingManager.entity;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

/**
 * Representacion de BD y entidad del usuario que puede o no estar logueado al
 * sistema
 * 
 * @author Javier Gonzalez
 *
 */
@Document(collection = "usuario")
@Data
public class Usuario implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 530766931418543139L;

	private @Id String id;

	private String nombre;
	private String apellido;
	private String email;
	private String pais;
	private int edad;
	private String genero;

	// for deserialisation
	public Usuario() {
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
