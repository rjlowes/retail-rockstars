package com.rockstars.exception;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

public class ServiceException extends Exception {
    
    private static final long serialVersionUID = 1L;
    
    private List<String> errors = new ArrayList<>();
    
    private int statusCode = HttpServletResponse.SC_BAD_REQUEST;
    
    public ServiceException() {}
    
    public ServiceException(String... errors) {
        for(String error : errors) {
            this.errors.add(error);
        }
    }

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }
    
}
