package com.rockstars.controller.catalogue;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.rockstars.model.Category;

@RestController
public class CategoryController {
    
    @RequestMapping(value="/api/categories", method=RequestMethod.GET)
    public @ResponseBody Map<String, List<Category>> getCategories() {
        Map<String, List<Category>> categories = new LinkedHashMap<>();
        
        List<Category> subs = new ArrayList<>();
        subs.add(new Category("mens-tees"));
        subs.add(new Category("mens-jeans"));
        subs.add(new Category("mens-jackets"));
        categories.put("mens", subs);
        
        
        subs = new ArrayList<>();
        subs.add(new Category("womens-tees"));
        subs.add(new Category("womens-jeans"));
        subs.add(new Category("womens-jackets"));
        categories.put("womens", subs);
        
        
        return categories;
    }
    
}
