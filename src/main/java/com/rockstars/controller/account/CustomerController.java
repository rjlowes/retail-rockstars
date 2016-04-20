package com.rockstars.controller.account;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.rockstars.controller.dto.AjaxResponse;
import com.rockstars.controller.dto.AjaxValidationResponse;
import com.rockstars.exception.ValidationException;
import com.rockstars.form.customer.CustomerDetailsForm;
import com.rockstars.form.customer.CustomerRegistrationForm;
import com.rockstars.form.customer.EmailForm;
import com.rockstars.form.customer.NameForm;
import com.rockstars.model.Address;
import com.rockstars.model.Customer;
import com.rockstars.service.CustomerService;

@RestController
public class CustomerController {
    
    @Autowired
    private CustomerService customerService;
    
    @RequestMapping(value="/api/customer/details", method=RequestMethod.GET)
    public Customer getCustomer() {
        return customerService.findAuthenticatedCustomer();
    }
    
    @RequestMapping(value="/api/customer/details", method=RequestMethod.PUT)
    @ResponseStatus(value=HttpStatus.OK)
    public AjaxResponse<Boolean> updateCustomer(HttpServletRequest request, 
            HttpServletResponse response,
            Principal principal,
            @RequestBody @Valid CustomerDetailsForm customerDetails, 
            BindingResult result) {
        
        if(result.hasErrors()) {
            // How do we handle validation issues???
            // http status code for error
            
            // 400 validation error
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            // TODO make generic response with form errors
            List<String> errors = new ArrayList<>();
            errors.add("Someting went wrong");
            
            // throw new ValidationException();
        }
        
        request.getUserPrincipal();
        
        customerService.updateCustomer(customerDetails, principal);
        
        // 204 no content returned
        response.setStatus(HttpServletResponse.SC_NO_CONTENT);
        
        return null;
    }
    
    @RequestMapping(value="/api/customer/email", method=RequestMethod.PUT)
    public AjaxResponse<Boolean> updateEmail(Principal principal,
            @RequestBody @Valid EmailForm emailForm, 
            BindingResult result) throws ValidationException {
        
        if(result.hasErrors()) {
            AjaxValidationResponse ajaxResponse = new AjaxValidationResponse(result.getFieldErrors());
            throw new ValidationException(ajaxResponse);
        } else {
            customerService.updateEmail(emailForm.getEmail(), principal);
            return new AjaxResponse<Boolean>(Boolean.TRUE);
        }
    }
    
    @RequestMapping(value="/api/customer/password", method=RequestMethod.PUT)
    public void updatePassword(@RequestBody @Valid Customer customer, BindingResult result) {
        
    }
}
