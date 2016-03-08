package com.rockstars.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

//@Configuration
//@EnableWebMvc
//@ComponentScan(basePackages={"com.rockstars.controller"})
@Configuration
public class MVCConfig {

    @Bean
    public javax.validation.Validator springValidator() {
        return new LocalValidatorFactoryBean();
    }
}
