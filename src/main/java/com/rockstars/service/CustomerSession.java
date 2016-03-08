package com.rockstars.service;

import com.rockstars.model.Basket;

public interface CustomerSession {
    public Basket getBasket();
    public void setBasket(Basket basket);
}
