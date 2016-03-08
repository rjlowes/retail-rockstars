package com.rockstars.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.rockstars.model.Product;

public interface ProductService {

    public Product findProduct(Long productId);
    public List<Product> findProductsByCategoryId(String categoryId);
    public Page<Product> findAll(Integer pageNumber);
}
