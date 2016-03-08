package com.rockstars.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.rockstars.model.Customer;
import com.rockstars.repository.CustomerRepository;

/**
 * Customised customer log in service.
 * 
 * It works well but extending User on the model might be better
 * @see http://javahotpot.blogspot.in/2013/12/spring-security-adding-more-information.html
 * 
 * @author richard
 *
 */
@Service
public class CustomerUserDetailsService implements UserDetailsService {

    @Autowired
    private CustomerRepository customerRepository;
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Customer customer = customerRepository.findByEmail(username);
        
        if (customer == null) {
            throw new UsernameNotFoundException("Customer not found for email " + username);
        }

        return new CustomerUserDetails(customer);
    }

}
