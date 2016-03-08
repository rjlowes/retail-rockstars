package com.rockstars;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.velocity.VelocityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

// SEE https://spring.io/guides/gs/accessing-data-jpa/#_create_an_application_class

@SpringBootApplication
@EnableAutoConfiguration(exclude = { VelocityAutoConfiguration.class })
public class Application {
    
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
