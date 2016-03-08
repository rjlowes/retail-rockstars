package com.rockstars.config;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;

import com.rockstars.filter.CsrfHeaderFilter;
import com.rockstars.security.CustomerUserDetailsService;


// https://spring.io/guides/gs/securing-web/
// http://stackoverflow.com/questions/22591028/spring-security-java-configuration
// http://docs.spring.io/autorepo/docs/spring-security/4.0.0.CI-SNAPSHOT/reference/htmlsingle/#jc

@Configuration
@EnableWebMvcSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private CustomerUserDetailsService userDetailsService;
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        // https://spring.io/blog/2015/01/12/the-login-page-angular-js-and-spring-security-part-ii
        http.httpBasic()
            .and()
            .authorizeRequests()
            .antMatchers("/").permitAll()
            .antMatchers("/api/secure/**").hasRole("CUSTOMER")
            .antMatchers("/api/**").permitAll()
            .and()
            .addFilterAfter(new CsrfHeaderFilter(), CsrfFilter.class);
            //.and()
            //.formLogin().permitAll();//.loginPage("/login").permitAll();
    }
    
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService)
            .passwordEncoder(new ShaPasswordEncoder(256));
    }
}
