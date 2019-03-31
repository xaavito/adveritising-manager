package com.proyect.advertisingManager.excepction;

/**
 * Excepcion para manejar cadenas de ADN no validas
 * 
 * @author Javier Gonzalez
 *
 */
public class NotValidDNASequenceException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1600691802114943991L;

	public NotValidDNASequenceException() {
		super("DNA Sequence is NOT Valid");
	}
}
