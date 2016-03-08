package com.rockstars.controller.account;

import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rockstars.controller.dto.AjaxResponse;
import com.rockstars.controller.dto.AjaxValidationResponse;
import com.rockstars.exception.ServiceException;
import com.rockstars.exception.ValidationException;
import com.rockstars.form.account.AddressForm;
import com.rockstars.model.Address;
import com.rockstars.service.AddressService;

@RestController
@RequestMapping("/api/addresses")
public class AddressController {
    
    @Autowired
    private AddressService addressService;
    
    @RequestMapping(method=RequestMethod.GET)
    public Set<Address> listCustomerAddresses() {
        return addressService.list();
    }
    
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public Address showCustomerAddress(@PathVariable("id") Long id) {
        return addressService.find(id);
    }

    @RequestMapping(method=RequestMethod.POST)
    public AjaxResponse<Address> createCustomerAddress(@RequestBody @Valid AddressForm addressForm, BindingResult result) throws ValidationException {
        if(result.hasErrors()) {
            AjaxValidationResponse ajaxResponse = new AjaxValidationResponse(result.getFieldErrors());
            throw new ValidationException(ajaxResponse);
        } else {
            Address newAddress = addressService.create(addressForm.getAddress());
            return new AjaxResponse<Address>(newAddress);
        }
    }
    
    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public AjaxResponse<Address> updateCustomerAddress(@PathVariable("id") Long id, 
            @RequestBody @Valid AddressForm addressForm, BindingResult result) throws ValidationException, ServiceException {
        if(result.hasErrors()) {
            AjaxValidationResponse ajaxResponse = new AjaxValidationResponse(result.getFieldErrors());
            throw new ValidationException(ajaxResponse);
        } else {
            Address updatedAddress = addressService.update(addressForm.getAddress());
            return new AjaxResponse<Address>(updatedAddress);
        }
    }
    
    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public void deleteCustomerAddress(@PathVariable("id") Long id) throws ServiceException {
        addressService.delete(id);
    }
}
