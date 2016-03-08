package com.rockstars.exception;

import javax.servlet.http.HttpServletResponse;

import com.rockstars.controller.dto.AjaxResponse;
import com.rockstars.controller.dto.AjaxValidationResponse;

public class ValidationException extends Exception {
    
    private static final long serialVersionUID = 1L;

    private AjaxValidationResponse ajaxResponse;
    
    private int statusCode = HttpServletResponse.SC_BAD_REQUEST;
    
    public ValidationException(AjaxValidationResponse ajaxResponse) {
        this.ajaxResponse = ajaxResponse;
    }
    
    public ValidationException(AjaxValidationResponse ajaxResponse, int statusCode) {
        this.ajaxResponse = ajaxResponse;
        this.statusCode = statusCode;
    }

    public AjaxValidationResponse getAjaxResponse() {
        return ajaxResponse;
    }

    public void setAjaxResponse(AjaxValidationResponse ajaxResponse) {
        this.ajaxResponse = ajaxResponse;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }
    
}
