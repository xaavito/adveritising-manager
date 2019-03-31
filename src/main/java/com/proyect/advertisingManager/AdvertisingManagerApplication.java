package com.proyect.advertisingManager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * Punto de entrada y ejecucion de la aplicacion que chequea mutantes
 * 
 * @author Javier Gonzalez
 *
 */
@SpringBootApplication
@ComponentScan("com.proyect.advertisingManager") // to scan packages mentioned
@EnableMongoRepositories(basePackages = "com.proyect.advertisingManager")
public class AdvertisingManagerApplication {
	public static void main(String[] args) {
		SpringApplication.run(AdvertisingManagerApplication.class, args);
	}
}
