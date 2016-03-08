package com.rockstars.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.rockstars.model.Customer;

// http://stackoverflow.com/questions/24723201/spring-boot-with-custom-userdetailsservice

public interface CustomerRepository extends JpaRepository<Customer, Long>, JpaSpecificationExecutor<Customer> {
    
    public Customer findByEmail(String email);
}
