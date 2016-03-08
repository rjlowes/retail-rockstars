package com.rockstars.controller.dto;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.validation.FieldError;

public class AjaxValidationResponse {
    
    private List<String> errors = new ArrayList<>();
    
    private Map<String, String> fieldErrors = new HashMap<>();
    
    public AjaxValidationResponse() {
    }
    
    public AjaxValidationResponse(List<FieldError> fieldErrors) {
        addFieldErrors(fieldErrors);
    }
    
    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }

    public Map<String, String> getFieldErrors() {
        return fieldErrors;
    }

    public void setFieldErrors(Map<String, String> fieldErrors) {
        this.fieldErrors = fieldErrors;
    }
    
    public void addFieldErrors(List<FieldError> fieldErrors) {
        for(FieldError fieldError : fieldErrors) {
            String field = fieldError.getField();
            String message = fieldError.getDefaultMessage();
            this.fieldErrors.put(field, message);
        }
    }
}
