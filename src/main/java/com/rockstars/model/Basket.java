package com.rockstars.model;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

// http://springinpractice.com/2008/05/08/session-scoped-beans-in-spring

// http://richardchesterwood.blogspot.co.uk/2011/03/using-sessions-in-spring-mvc-including.html

/**
 * Issues with testing
 * 
 * http://tuhrig.de/making-a-spring-bean-session-scoped/
 */

public class Basket {
    
    private List<BasketItem> basketItems = new ArrayList<>();
    private Address deliveryAddress;
    private Address billingAddress;

    public List<BasketItem> getBasketItems() {
        return basketItems;
    }

    public void setBasketItems(List<BasketItem> basketItems) {
        this.basketItems = basketItems;
    }
    
    /**
     * Add an item to the basket
     * 
     * @param newItem
     */
    public void addBasketItem(BasketItem newItem) {
        
        // If the sku already exists in the basket then update the quantity
        for(BasketItem item : basketItems) {
            if(item.getVariant().getSku().equals(newItem.getVariant().getSku())) {
                item.setQuantity(newItem.getQuantity() + item.getQuantity());
                return;
            }
        }
        
        // If the sku wasn't found above then add it to the basket
        basketItems.add(newItem);
    }
    
    /**
     * Delete an item from the basket
     * 
     * @param sku
     */
    public void deleteBasketItem(String sku) {        
        Iterator<BasketItem> iter = basketItems.iterator();
        
        while(iter.hasNext()) {
            BasketItem basketItem = (BasketItem) iter.next();
            if(basketItem.getVariant().getSku().equals(sku)) {
                iter.remove();
            }
        }
    }
    
    public void updateBasketItemQuantity(String sku, Integer qty) {
        for(BasketItem basketItem : basketItems) {
            if(basketItem.getVariant().getSku().equals(sku)) {
                basketItem.setQuantity(qty);
            }
        }
    }

    public Address getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(Address deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public Address getBillingAddress() {
        return billingAddress;
    }

    public void setBillingAddress(Address billingAddress) {
        this.billingAddress = billingAddress;
    }
    
}
