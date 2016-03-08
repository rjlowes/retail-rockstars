package com.rockstars.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.rockstars.model.Customer;

// https://github.com/igo/spring-boot-userdetails/blob/master/src/main/java/com/sample/service/DatabaseUserDetailsService.java

public class CustomerDetailsService implements UserDetailsService {
    
    @Autowired
    private CustomerService customerService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Customer customer = customerService.findByEmail(email);
        return null;
    }

}
