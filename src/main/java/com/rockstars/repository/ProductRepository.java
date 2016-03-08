package com.rockstars.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rockstars.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
