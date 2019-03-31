package com.proyect.advertisingManager.entity;

/**
 * Clase para la representacion de datos estadisticos
 * 
 * @author Javier Gonzalez
 *
 */
public class Stats {
	private int count_mutant_dna;
	private int count_human_dna;
	private String ratio;

	public Stats(int count_mutant_dna, int count_human_dna, String ratio) {
		this.count_mutant_dna = count_mutant_dna;
		this.count_human_dna = count_human_dna;
		this.ratio = ratio;
	}

	public Stats() {
	}

	public int getCount_mutant_dna() {
		return count_mutant_dna;
	}

	public void setCount_mutant_dna(int count_mutant_dna) {
		this.count_mutant_dna = count_mutant_dna;
	}

	public int getCount_human_dna() {
		return count_human_dna;
	}

	public void setCount_human_dna(int count_human_dna) {
		this.count_human_dna = count_human_dna;
	}

	public String getRatio() {
		return ratio;
	}

	public void setRatio(String ratio) {
		this.ratio = ratio;
	}
}
