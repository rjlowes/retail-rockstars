package com.rockstars.service;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rockstars.form.customer.CustomerDetailsForm;
import com.rockstars.model.Customer;
import com.rockstars.repository.CustomerRepository;

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
    public void updateCustomer(CustomerDetailsForm customerDetails, Principal principal) {
        Customer customer = repository.findByEmail(principal.getName());
        customer.setTitle(customerDetails.getTitle());
        customer.setFirstname(customerDetails.getFirstname());
        customer.setLastname(customerDetails.getLastname());

        repository.save(customer);
    }

    @Override
    public void deleteCustomer(Customer customer) {
        // TODO Auto-generated method stub
        
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
