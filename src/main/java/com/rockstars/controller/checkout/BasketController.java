package com.rockstars.controller.checkout;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.rockstars.exception.ServiceException;
import com.rockstars.exception.ValidationException;
import com.rockstars.form.BasketForm;
import com.rockstars.model.Basket;
import com.rockstars.controller.dto.AjaxResponse;
import com.rockstars.controller.dto.AjaxValidationResponse;
import com.rockstars.service.BasketService;

@RestController
@RequestMapping("/api/basket")
public class BasketController {
    
    private static final Logger log = Logger.getLogger(BasketController.class);
    
    @Autowired
    private BasketService basketService;

    @RequestMapping(method=RequestMethod.GET)
    public AjaxResponse<Basket> list() {
        AjaxResponse<Basket> ajaxResponse = new AjaxResponse<>();
        ajaxResponse.setPayload(basketService.getBasket());
        return ajaxResponse;
    }
    
    @RequestMapping(method=RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public void addBasketItem(HttpServletResponse response,
            @RequestBody @Valid BasketForm form, BindingResult result) throws ValidationException, ServiceException {
        
        if(result.hasErrors()) {
            AjaxValidationResponse ajaxResponse = new AjaxValidationResponse(result.getFieldErrors());
            throw new ValidationException(ajaxResponse);
        }
        
        try {
            basketService.add(form.getSku(), form.getQuantity());
        } catch (ServiceException e) {
            log.info("Error adding to basket", e);
            throw e;
        }
    }
    
    @RequestMapping(value="/sku/{sku}", method=RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void deleteBasketItem(@PathVariable("sku") String sku) {
        basketService.delete(sku);
    }
    
    @RequestMapping(value="/sku/{sku}", method=RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public void updateBasketItemQuantity(@PathVariable("sku") String sku, @RequestParam("qty") Integer qty) {
        basketService.updateQuantity(sku, qty);
    }
    
    @RequestMapping(value="/delivery", method=RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void selectDeliveryAddress(@RequestParam("addressId") Long addressId) throws ServiceException {
        basketService.selectDeliveryAddress(addressId);
    }
    
    @RequestMapping(value="/billing", method=RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void selectBillingAddress(@RequestParam("addressId") Long addressId) throws ServiceException {
        basketService.selectBillingAddress(addressId);
    }
    
}
