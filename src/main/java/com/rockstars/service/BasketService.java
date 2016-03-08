package com.rockstars.service;

import com.rockstars.exception.ServiceException;
import com.rockstars.model.Basket;

public interface BasketService {
    public Basket getBasket();
    public void add(String sku, Integer qty) throws ServiceException;
    public void delete(String sku);
    public void updateQuantity(String sku, Integer qty);
    public void selectDeliveryAddress(Long addressId) throws ServiceException;
    public void selectBillingAddress(Long addressId) throws ServiceException;
}
