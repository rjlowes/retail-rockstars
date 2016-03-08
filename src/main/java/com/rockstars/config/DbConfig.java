package com.rockstars.config;

import java.net.URI;
import java.net.URISyntaxException;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.apache.commons.dbcp.BasicDataSource;

// http://forum.spring.io/forum/spring-projects/boot/747607-using-a-spring-boot-app-on-heroku-with-postgresql

@Configuration
public class DbConfig {

    @Bean
    public DataSource dataSource()  {    

        URI dbUri;
        
        try {
            String username = "postgres";
            String password = "password";
            String url = "jdbc:postgresql://localhost/rockstars";
            
            String dbProperty = System.getProperty("database.url");
            
            if(dbProperty != null) {
                dbUri = new URI(dbProperty);

                username = dbUri.getUserInfo().split(":")[0];
                password = dbUri.getUserInfo().split(":")[1];
                url = "jdbc:postgresql://" + dbUri.getHost() + ':' + dbUri.getPort() + dbUri.getPath();
            }     

            BasicDataSource basicDataSource = new BasicDataSource();
            basicDataSource.setUrl(url);
            basicDataSource.setUsername(username);
            basicDataSource.setPassword(password);
            return basicDataSource;

        } catch (URISyntaxException e) {
            //Deal with errors here.
        }
        
        return null;
    }
}
