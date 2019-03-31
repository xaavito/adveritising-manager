package com.proyect.advertisingManager.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

/**
 * Representacion de BD y entidad del adn que se chequea e inserta en la BD
 * 
 * @author Javier Gonzalez
 *
 */
@Document(collection = "adn")
@Data
//@NoArgsConstructor
public class Adn {
	private @Id String id;
	private String[] dna = new String[6];
	private int isMutant;

	// for deserialisation
	public Adn() {
	}

	public Adn(String[] dna) {
		this.setDna(dna);
		this.setIsMutant(0);
	}

	public int getIsMutant() {
		return isMutant;
	}

	public void setIsMutant(int isMutant) {
		this.isMutant = isMutant;
	}

	public String[] getDna() {
		return dna;
	}

	public void setDna(String[] dna) {
		this.dna = dna;
	}
}
