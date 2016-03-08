package com.rockstars.service;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Service;

import com.rockstars.model.Basket;

@Service
@Scope(value="session", proxyMode=ScopedProxyMode.TARGET_CLASS)
public class CustomerSessionProxy implements CustomerSession {
    
    private Basket basket;
    
    public CustomerSessionProxy() {
        basket = new Basket();
    }

    @Override
    public Basket getBasket() {
        return basket;
    }

    @Override
    public void setBasket(Basket basket) {
        this.basket = basket;
    }
    
}
