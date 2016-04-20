package com.rockstars.service;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rockstars.form.customer.CustomerDetailsForm;
import com.rockstars.model.Customer;
import com.rockstars.repository.CustomerRepository;
import com.rockstars.security.CustomerUserDetails;

@Service
@Transactional(readOnly=true)
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository repository;
    
    @Override
    public Customer findByEmail(String email) {
        return repository.findByEmail(email);
    }
    
    @Override
    public Customer findAuthenticatedCustomer() {
        Principal principal = SecurityContextHolder.getContext().getAuthentication();
        return repository.findByEmail(principal.getName());
    }
    
    @Override
    @Transactional
    public void create(Customer customer) {
        repository.save(customer);
    }
    
    @Override
    @Transactional
    public void save(Customer customer) {
        repository.save(customer);
    }

    @Override
    @Transactional
    public void updateCustomer(CustomerDetailsForm customerDetails, Principal principal) {
        Customer customer = repository.findByEmail(principal.getName());
        customer.setTitle(customerDetails.getTitle());
        customer.setFirstname(customerDetails.getFirstname());
        customer.setLastname(customerDetails.getLastname());
        repository.save(customer);
        repository.flush();
    }

    @Override
    public void deleteCustomer(Customer customer) {
        // TODO Auto-generated method stub   
    }
    
    @Override
    @Transactional
    public void updateEmail(String email, Principal principal) {
        Customer customer = repository.findByEmail(principal.getName());
        customer.setEmail(email);
        repository.save(customer);
        repository.flush();
        
        // http://stackoverflow.com/questions/4664893/how-to-manually-set-an-authenticated-user-in-spring-security-springmvc/4672083#4672083
        
        // Experimental
//        Authentication authentication = new UsernamePasswordAuthenticationToken(customer, customer.getPassword(), new CustomerUserDetails(customer).getAuthorities());
//        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    @Override
    public void updateFirstname(String firstname, Principal principal) {
        Customer customer = getPrincipalCustomer(principal);
        customer.setFirstname(firstname);
        repository.save(customer);
    }
    
    @Deprecated
    Customer getPrincipalCustomer(Principal principal) {
        return repository.findByEmail(principal.getName());
    }

}
