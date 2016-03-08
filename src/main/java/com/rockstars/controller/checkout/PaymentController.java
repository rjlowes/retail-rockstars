package com.rockstars.controller.checkout;

import javax.validation.Valid;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rockstars.controller.dto.AjaxResponse;
import com.rockstars.controller.dto.AjaxValidationResponse;
import com.rockstars.exception.ValidationException;
import com.rockstars.form.checkout.PaymentForm;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @RequestMapping("/card")
    public AjaxResponse makePayment(@RequestBody @Valid PaymentForm paymentForm, 
            BindingResult result) throws ValidationException {
        
        if (result.hasErrors()) {
            AjaxValidationResponse ajaxResponse = new AjaxValidationResponse(result.getFieldErrors());
            throw new ValidationException(ajaxResponse);
        } else {
            
        }
        
        System.out.println(paymentForm);
        return null;
    }
}
