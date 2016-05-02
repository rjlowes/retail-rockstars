package com.rockstars.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.rockstars.model.Product;
import com.rockstars.model.Variant;
import com.rockstars.repository.ProductRepository;
import com.rockstars.repository.VariantRepository;

@Service
public class CatalogueServiceImpl implements CatalogueService {
    
    @Autowired
    private ProductRepository productRepository;
    
    @Autowired
    private VariantRepository variantRepository;
    
    @Override
    public Product findProduct(Long productId) {
        return productRepository.findOne(productId);
    }
    
    @Override
    public List<Product> findProductsByCategoryId(String categoryId) {
        return productRepository.findAll();
    }

    /**
     * http://springinpractice.com/2012/05/11/pagination-and-sorting-with-spring-data-jpa
     */
    @Override
    public Page<Product> findAll(Integer pageNumber) {
        // Spring uses 0 index but we'll pass index starting at 1 into here
        PageRequest request = new PageRequest(pageNumber - 1, 8, Sort.Direction.DESC, "id");
        return productRepository.findAll(request);
    }
    
    @Override
    public Variant getVariant(String sku) {
        return variantRepository.findOne(sku);
    }
}
