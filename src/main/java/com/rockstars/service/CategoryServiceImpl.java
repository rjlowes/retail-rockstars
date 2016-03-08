package com.rockstars.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rockstars.model.Category;
import com.rockstars.repository.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;
    
    @Override
    public Category getCategory(String id) {
        return categoryRepository.findOne(id);
    }

}
