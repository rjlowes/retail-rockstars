package com.rockstars.controller.account;

import java.security.Principal;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.rockstars.controller.dto.AjaxResponse;
import com.rockstars.controller.dto.AjaxValidationResponse;
import com.rockstars.exception.ValidationException;
import com.rockstars.form.customer.CustomerRegistrationForm;
import com.rockstars.form.customer.CustomerRegistrationFormValidator;
import com.rockstars.model.Customer;
import com.rockstars.service.CustomerService;

@Controller
@RestController
public class AuthController {
    
    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Autowired
    private CustomerService customerService;
    
    @Autowired
    private CustomerRegistrationFormValidator customerRegistrationFormValidator;
    
    @InitBinder("customerRegistrationForm")
    public void initBinder(WebDataBinder binder) {
        binder.setValidator(customerRegistrationFormValidator);
    }
    
    @RequestMapping(value="/api/customer")
    public Principal getPrincipal(Principal customer) {
        return customer;
    }
    
    @RequestMapping(value="/api/customer", method=RequestMethod.POST)
    @ResponseStatus(value=HttpStatus.OK)
    public AjaxResponse<Boolean> create(@RequestBody @Valid CustomerRegistrationForm customerRegistrationForm, BindingResult result) throws ValidationException {
        
        if(!result.hasErrors()) {
            Customer customer = new Customer();
            customer.setFirstname(customerRegistrationForm.getFirstname());
            customer.setLastname(customerRegistrationForm.getLastname());
            customer.setEmail(customerRegistrationForm.getEmail());
            customer.setPassword(customerRegistrationForm.getPassword());
            
            customerService.create(customer);
            // Log in after
            // https://gerrydevstory.com/2014/03/11/spring-security-auto-login-after-successful-registration/
            AjaxResponse<Boolean> ajaxResponse = new AjaxResponse<>();
            ajaxResponse.setPayload(true);
            return ajaxResponse;
        } else {
            AjaxValidationResponse ajaxResponse = new AjaxValidationResponse(result.getFieldErrors());
            throw new ValidationException(ajaxResponse);
        }
    }
}
