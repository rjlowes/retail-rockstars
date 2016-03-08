package com.rockstars.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.rockstars.model.Address;
import com.rockstars.model.Customer;

public interface AddressRepository extends JpaRepository<Address, Long> {
    @Transactional(readOnly=true) 
    public List<Address> findByCustomer(Customer customer);
    
    @Transactional(readOnly=true)
    public Address findOneByCustomer(Customer customer);
}
