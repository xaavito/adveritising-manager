package com.proyect.advertisingManager.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

/**
 * Representacion de BD y entidad del adn que se chequea e inserta en la BD
 * 
 * @author Javier Gonzalez
 *
 */
@Document(collection = "anuncio")
@Data
public class Anuncio {
	private @Id String id;
	
	private Double costoImpresion;
	private Double costoTotalMaximo;
	private Date fechaFinalizacion;
	private String titulo;
	private String descripcion;
	private String pais;
	private int edad;
	private String genero;
	
	// for deserialisation
	public Anuncio() {
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Double getCostoImpresion() {
		return costoImpresion;
	}

	public void setCostoImpresion(Double costoImpresion) {
		this.costoImpresion = costoImpresion;
	}

	public Double getCostoTotalMaximo() {
		return costoTotalMaximo;
	}

	public void setCostoTotalMaximo(Double costoTotalMaximo) {
		this.costoTotalMaximo = costoTotalMaximo;
	}

	public Date getFechaFinalizacion() {
		return fechaFinalizacion;
	}

	public void setFechaFinalizacion(Date fechaFinalizacion) {
		this.fechaFinalizacion = fechaFinalizacion;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
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
}
