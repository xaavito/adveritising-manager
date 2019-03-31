package com.proyect.advertisingManager.service.impl;

import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.proyect.advertisingManager.excepction.NotValidDNASequenceException;
import com.proyect.advertisingManager.service.IAdvertisingManagerService;

/**
 * Servicio general que tiene todo el manejo de chequeo de ADN mutante o humano
 * 
 * @author Javier Gonzalez
 *
 */
@Service
public class AdvertisingManagerService implements IAdvertisingManagerService {

	private static final Logger logger = LoggerFactory.getLogger(AdvertisingManagerService.class);

	public String[][] matriz;
	public int filas = 0;
	public int columnas = 0;

	private String[] split;

	private boolean allEqual = false;

	private String letra = "";

	/**
	 * Metodo requerido por las especificaciones, recibe adn y devueve si es
	 * mutante.
	 */
	public boolean isMutant(String[] dna) {
		try {
			logger.info("@..isMutant");
			toSizeUpMatrix(dna);
			toMatrix(dna);
			boolean isMutant = matrixChecker();
			return isMutant;
		} catch (ArrayIndexOutOfBoundsException e) {
			throw new NotValidDNASequenceException();
		}
	}

	/**
	 * generador de matriz en base a la obtencion de filas y columnas del adn
	 * enviado
	 * 
	 * @param dna
	 */
	private void toSizeUpMatrix(String[] dna) {
		logger.info("@..toSizeUpMatrix");
		filas = 0;
		for (String string : dna) {
			if (columnas == 0 || string.length() > columnas) {
				columnas = string.length();
			}
			filas++;
		}
		logger.info("@..filas " + filas);
		logger.info("@..columnas " + columnas);
		matriz = new String[filas][columnas];
	}

	/**
	 * Chequea la matriz para saber si es mutante o no
	 * 
	 * @return
	 */
	private boolean matrixChecker() {
		logger.info("@..matrixChecker");

		for (int i = 0; i < filas; i++) {
			for (int j = 0; j < columnas; j++) {
				if (checkPosition(i, j)) {
					logger.info("MUTANT FOUND!");
					return true;
				}
			}
		}
		logger.info("HUMAN FOUND!");
		return false;
	}

	/**
	 * Chequeador de todas las posiciones posibles para el chequeo de la matriz
	 * 
	 * @param i
	 * @param j
	 * @return
	 */
	private boolean checkPosition(int i, int j) {
		//logger.info("@..checkPosition");
		return checkDiagUpLeft(i, j) || checkUp(i, j) || checkDiagUpRight(i, j) || checkLeft(i, j)
				|| /* middle */ checkRight(i, j) || checkDiagDownLeft(i, j) || checkDown(i, j)
				|| checkDiagDownRight(i, j);
	}

	/**
	 * Chequeo especifico de diagonal derecha abajo
	 * 
	 * @param i
	 * @param j
	 * @return
	 */
	private boolean checkDiagDownRight(int i, int j) {
		if (i + 3 >= filas || j + 3 >= columnas) {
			return false;
		} else {
			allEqual = allEqual(matriz[i][j], matriz[i + 1][j + 1], matriz[i + 2][j + 2], matriz[i + 3][j + 3]);
			if (allEqual) {
				logger.info("FOUND MATCH checkDiagDownRight i " + i + " j " + j);
			}
			return allEqual;
		}
	}

	/**
	 * Chequeo especifico hacia abajo
	 * 
	 * @param i
	 * @param j
	 * @return
	 */
	private boolean checkDown(int i, int j) {
		if (i + 3 >= filas) {
			return false;
		} else {
			allEqual = allEqual(matriz[i][j], matriz[i + 1][j], matriz[i + 2][j], matriz[i + 3][j]);
			if (allEqual) {
				logger.info("FOUND MATCH checkDown i " + i + " j " + j);
			}
			return allEqual;
		}
	}

	/**
	 * Chequeo diagonal izquierda abajo
	 * 
	 * @param i
	 * @param j
	 * @return
	 */
	private boolean checkDiagDownLeft(int i, int j) {
		if (i + 3 >= filas || j - 3 < 0) {
			return false;
		} else {
			allEqual = allEqual(matriz[i][j], matriz[i + 1][j - 1], matriz[i + 2][j - 2], matriz[i + 3][j - 3]);
			if (allEqual) {
				logger.info("FOUND MATCH checkDiagDownLeft i " + i + " j " + j);
			}
			return allEqual;
		}
	}

	/**
	 * Chequeo derecha
	 * 
	 * @param i
	 * @param j
	 * @return
	 */
	private boolean checkRight(int i, int j) {
		if (j + 3 >= columnas) {
			return false;
		} else {
			allEqual = allEqual(matriz[i][j], matriz[i][j + 1], matriz[i][j + 2], matriz[i][j + 3]);
			if (allEqual) {
				logger.info("FOUND MATCH checkRight i " + i + " j " + j);
			}
			return allEqual;
		}
	}

	/**
	 * Chequeo izquierda
	 * 
	 * @param i
	 * @param j
	 * @return
	 */
	private boolean checkLeft(int i, int j) {
		if (j - 3 < 0) {
			return false;
		} else {
			allEqual = allEqual(matriz[i][j - 3], matriz[i][j - 2], matriz[i][j - 1], matriz[i][j]);
			if (allEqual) {
				logger.info("FOUND MATCH checkLeft i " + i + " j " + j);
			}
			return allEqual;
		}
	}

	/**
	 * Chequeo diagonal arriba derecha
	 * 
	 * @param i
	 * @param j
	 * @return
	 */
	private boolean checkDiagUpRight(int i, int j) {
		if (i - 3 < 0 || j + 3 >= columnas) {
			return false;
		} else {
			allEqual = allEqual(matriz[i - 3][j + 3], matriz[i - 2][j + 2], matriz[i - 1][j + 1], matriz[i][j]);
			if (allEqual) {
				logger.info("FOUND MATCH checkDiagUpRight i " + i + " j " + j);
			}
			return allEqual;
		}
	}

	/**
	 * Chequeo arriba
	 * 
	 * @param i
	 * @param j
	 * @return
	 */
	private boolean checkUp(int i, int j) {
		if (i - 3 < 0) {
			return false;
		} else {
			allEqual = allEqual(matriz[i - 3][j], matriz[i - 2][j], matriz[i - 1][j], matriz[i][j]);
			if (allEqual) {
				logger.info("FOUND MATCH checkUp i " + i + " j " + j);
			}
			return allEqual;
		}
	}

	/**
	 * Chequeo diagonal izquierda arriba
	 * 
	 * @param i
	 * @param j
	 * @return
	 */
	private boolean checkDiagUpLeft(int i, int j) {
		if (i - 3 < 0 || j - 3 < 0) {
			return false;
		} else {
			allEqual = allEqual(matriz[i - 3][j - 3], matriz[i - 2][j - 2], matriz[i - 1][j - 1], matriz[i][j]);
			if (allEqual) {
				logger.info("FOUND MATCH checkDiagUpLeft i " + i + " j " + j);
			}
			return allEqual;
		}
	}

	/**
	 * Comparador de las 4 letras. TODAS deben ser iguales
	 * 
	 * @param string
	 * @param string2
	 * @param string3
	 * @param string4
	 * @return
	 */
	private boolean allEqual(String string, String string2, String string3, String string4) {
		return string.equalsIgnoreCase(string2) && string2.equalsIgnoreCase(string3)
				&& string3.equalsIgnoreCase(string4);
	}

	/**
	 * Metodo de conversion de adn a matriz de comparaciones
	 * 
	 * @param dna
	 */
	public void toMatrix(String[] dna) {
		logger.info("@..toMatrix");
		for (int i = 0; i < filas; i++) {
			split = dna[i].split("");
			for (int j = 0; j < columnas; j++) {
				letra = split[j];
				if (allowed(letra)) {
					matriz[i][j] = split[j];
				}
			}
		}
	}

	/**
	 * Metodo de chequeo de caracteres validos
	 * 
	 * @param letra2
	 * @return
	 */
	private boolean allowed(String letra2) {
		String[] permitidos = { "A", "C", "T", "G" };
		boolean contains = Arrays.asList(permitidos).contains(letra2);
		if (!contains) {
			throw new NotValidDNASequenceException();
		}
		return contains;
	}
}
