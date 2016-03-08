package com.rockstars.service;

import java.util.Set;

import com.rockstars.exception.ServiceException;
import com.rockstars.model.Address;

public interface AddressService {
    public Set<Address> list();
    public Address find(Long id);
    public Address create(Address address);
    public Address update(Address address) throws ServiceException;
    public void delete(Long id) throws ServiceException;
    public Address findCustomerAddress(Long addressId);
}
