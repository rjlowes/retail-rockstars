package com.rockstars.form.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

/**
 * Calls the validator to validate the object annotations and
 * additionally allows conditional password and email confirmation
 * validations.
 *
 *http://stackoverflow.com/questions/13155455/alternative-to-subclassing-localvalidatorfactorybean-in-spring
 */
@Component
public class CustomerRegistrationFormValidator implements Validator {

    @Autowired
    private Validator springValidator;
    
    @Override
    public boolean supports(Class<?> clazz) {
        return CustomerRegistrationForm.class.isAssignableFrom(clazz);
    }

    @Override
    public void validate(Object object, Errors errors) {
        CustomerRegistrationForm form = (CustomerRegistrationForm) object;
        springValidator.validate(form, errors);
    }

}
