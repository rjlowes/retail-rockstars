package com.rockstars.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rockstars.model.Variant;

public interface VariantRepository extends JpaRepository<Variant, String> {
    
}
