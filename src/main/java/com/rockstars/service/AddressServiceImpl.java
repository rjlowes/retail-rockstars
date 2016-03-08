package com.rockstars.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rockstars.exception.ServiceException;
import com.rockstars.model.Address;
import com.rockstars.model.Customer;
import com.rockstars.repository.AddressRepository;

@Service
public class AddressServiceImpl implements AddressService {
    
    @Autowired
    private CustomerService customerService;
    
    @Autowired
    private AddressRepository addressRepository;

    @Override
    public Set<Address> list() {
        // TODO considering keeping the full loaded customer in the session
        // Need to define a method of keep a single truth between session and the db
        Customer customer = customerService.findAuthenticatedCustomer();
        return customer.getAddresses();
    }

    @Override
    public Address find(Long id) {
        Customer customer = customerService.findAuthenticatedCustomer();
        return addressRepository.findOneByCustomer(customer);
    }

    @Override
    public Address create(Address address) {
        Customer customer = customerService.findAuthenticatedCustomer();
        address.setCustomer(customer);
        addressRepository.save(address);
        return address;
    }

    @Override
    public Address update(Address address) throws ServiceException {
        Address oldAddress = findCustomerAddress(address.getId());
        
        if(oldAddress == null) {
            throw new ServiceException("Address not found for existing customer");
        }        
        
        addressRepository.save(address);
        return address;
    }

    @Override
    public void delete(Long id) throws ServiceException {
        Address address = findCustomerAddress(id);
        
        if(address == null) {
            throw new ServiceException("Address not found for existing customer");
        }
        
        addressRepository.delete(id);
    }
    
    /**
     * Find an address for a specific customer or throw an exception
     * @return
     */
    @Override
    public Address findCustomerAddress(Long addressId) {
        Set<Address> addresses = list();
        
        for(Address address : addresses) {
            if(address.getId() == addressId) {
                return address;
            }
        }
        
        return null;
    }
}
