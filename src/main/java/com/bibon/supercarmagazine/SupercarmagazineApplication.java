package com.bibon.supercarmagazine;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;

@SpringBootApplication
public class SupercarmagazineApplication {

	public static void main(String[] args) {
		SpringApplication.run(SupercarmagazineApplication.class, args);
	}

}
