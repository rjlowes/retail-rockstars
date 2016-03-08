package com.rockstars.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rockstars.model.Variant;
import com.rockstars.repository.VariantRepository;

@Service
public class VariantServiceImpl implements VariantService {

    @Autowired
    private VariantRepository productVariantRepository;
    
    @Override
    public Variant getVariant(String sku) {
        return productVariantRepository.findOne(sku);
    }

}
