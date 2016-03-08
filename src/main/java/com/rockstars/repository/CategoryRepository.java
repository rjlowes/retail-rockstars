package com.rockstars.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rockstars.model.Category;

public interface CategoryRepository extends JpaRepository<Category, String> {

}
