package com.rockstars.controller.catalogue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rockstars.model.Category;
import com.rockstars.model.Product;
import com.rockstars.model.Variant;
import com.rockstars.service.CategoryService;
import com.rockstars.service.ProductService;

@RestController
@RequestMapping("/api/catalogue")
public class CatalogueController {
    
    @Autowired
    private CategoryService categoryService;
    
    @Autowired
    private ProductService productService;
    
    @RequestMapping(value="/categories/{categoryId}", method=RequestMethod.GET)
    public Category getCategory(@PathVariable("categoryId") String categoryId) {
        return categoryService.getCategory(categoryId);
    }
    
    @RequestMapping(value="/categories/{categoryId}/products", method=RequestMethod.GET)
    public Page<Product> getCategoryProducts(@RequestParam(required=false, defaultValue="1") Integer pageNumber) {
        Page<Product> pages = productService.findAll(pageNumber);
        return pages;
    }

    @RequestMapping(value="/product/{productId}", method=RequestMethod.GET)
    public Product getProductById(@PathVariable("productId") Long productId) {
        Product product = productService.findProduct(productId);
        for(Variant s : product.getVariants()) {
            System.out.println(s);
        }
        return product;
        //return productService.findProduct(productId);
    }
}
