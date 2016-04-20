package com.rockstars.service;

import java.security.Principal;

import com.rockstars.form.customer.CustomerDetailsForm;
import com.rockstars.model.Customer;

public interface CustomerService {

    public Customer findByEmail(String email);
    public Customer findAuthenticatedCustomer();
    
    // Same methods
    public void save(Customer customer);
    public void create(Customer customer);
    
    public void updateCustomer(CustomerDetailsForm customer, Principal principal);
    
    public void updateEmail(String email, Principal principal);
    public void updateFirstname(String firstname, Principal principal);
    public void deleteCustomer(Customer customer);
    
}
