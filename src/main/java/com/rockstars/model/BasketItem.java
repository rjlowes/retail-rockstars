package com.rockstars.model;


public class BasketItem {
    
    private Variant variant;
    
    private Integer quantity;

    public Variant getVariant() {
        return variant;
    }

    public void setProductVariant(Variant variant) {
        this.variant = variant;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }   
}
