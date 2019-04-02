package com.proyect.advertisingManager.service;

import java.util.List;

import com.proyect.advertisingManager.entity.Anuncio;

/**
 * Servicio interfaz de advertising manager
 * 
 * @author Javier Gonzalez
 */
public interface IAdvertisingManagerService {
	public List<Anuncio> getRandomAnuncios(List<Anuncio> anunciosFromDB);
}
