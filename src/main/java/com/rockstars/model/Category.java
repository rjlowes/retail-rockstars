package com.rockstars.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="category")
public class Category {// extends AbstractTimestamp implements Serializable {
    
    private static final long serialVersionUID = 1L;

    @Id
    private String id;
    
    private String name;
    
    @ManyToMany
    @JoinTable(name="product_category", 
               joinColumns=@JoinColumn(name="category_id"), 
               inverseJoinColumns=@JoinColumn(name="product_id"))
    @JsonIgnore
    private List<Product> products;
    
    public Category() {
    }
    
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Category(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Category [name=" + name + "]";
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
    
    
}
