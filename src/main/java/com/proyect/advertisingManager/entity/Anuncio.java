package com.proyect.advertisingManager.entity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

/**
 * Representacion de BD y entidad del Anuncio generado para insertar y obtener
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
	private int numeroImpresiones;
	
	// for deserialisation
	public Anuncio() {
	}
	
	public Anuncio(String titulo, String desc, Double costoImpr, Double costoTotal, String fechaFin, String pais, int edad, String genero) {
		this.costoImpresion = costoImpr;
		this.costoTotalMaximo = costoTotal;
		
		try {
			this.fechaFinalizacion = new SimpleDateFormat("dd/MM/yyyy").parse(fechaFin);
		} catch (ParseException e) {
			e.printStackTrace();
			this.fechaFinalizacion = new Date();
		}
		this.titulo = titulo;
		this.descripcion = desc;
		this.pais = pais;
		this.edad = edad;
		this.genero = genero;
		this.numeroImpresiones = 0;
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

	public int getNumeroImpresiones() {
		return numeroImpresiones;
	}

	public void setNumeroImpresiones(int numeroImpresiones) {
		this.numeroImpresiones = numeroImpresiones;
	}
}
