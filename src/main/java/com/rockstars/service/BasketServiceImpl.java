package com.rockstars.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rockstars.exception.ServiceException;
import com.rockstars.model.Address;
import com.rockstars.model.Basket;
import com.rockstars.model.BasketItem;
import com.rockstars.model.Variant;

@Service
public class BasketServiceImpl implements BasketService {

    @Autowired
    private CustomerSession customerSession;
    
    @Autowired
    private VariantService variantService;
    
    @Autowired
    private AddressService addressService;
   
    @Override
    public Basket getBasket() {
        return customerSession.getBasket();
    }
    
    @Override
    public void add(String sku, Integer qty) throws ServiceException {
        // Retreive the sku
        Variant variant = variantService.getVariant(sku);
        
        if (variant == null) {
            throw new ServiceException("Unable to find product for sku + " + sku);
        }
        
        // add to basket
        BasketItem newItem = new BasketItem();
        newItem.setProductVariant(variant);
        newItem.setQuantity(qty);
        
        customerSession.getBasket().addBasketItem(newItem);
    }
    
    @Override
    public void delete(String sku) {
        customerSession.getBasket().deleteBasketItem(sku);
    }

    @Override
    public void updateQuantity(String sku, Integer qty) {
        customerSession.getBasket().updateBasketItemQuantity(sku, qty);
    }
    
    @Override
    public void selectDeliveryAddress(Long addressId) throws ServiceException {
        Address address = addressService.find(addressId);
        
        if(address == null) {
            throw new ServiceException("No address found for customer with id " + addressId);
        }
        
        customerSession.getBasket().setDeliveryAddress(address);
    }
    
    @Override
    public void selectBillingAddress(Long addressId) throws ServiceException {
        Address address = addressService.findCustomerAddress(addressId);
        
        if(address == null) {
            throw new ServiceException("No address found for customer with id " + addressId);
        }
        
        customerSession.getBasket().setBillingAddress(address);
    }
    
    

}
