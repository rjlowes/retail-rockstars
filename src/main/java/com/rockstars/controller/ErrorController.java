package com.rockstars.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rockstars.controller.dto.AjaxResponse;
import com.rockstars.controller.dto.AjaxValidationResponse;
import com.rockstars.exception.ServiceException;
import com.rockstars.exception.ValidationException;

@ControllerAdvice
public class ErrorController {
    
    @ExceptionHandler(ValidationException.class)
    @ResponseBody
    public AjaxValidationResponse handleValidationException(HttpServletResponse response, ValidationException e) {
        response.setStatus(e.getStatusCode());
        return e.getAjaxResponse();
    }
    
    @ExceptionHandler(ServiceException.class)
    @ResponseBody
    public AjaxValidationResponse handleServiceException(HttpServletResponse response, ServiceException e) {
        //AjaxResponse<List<String>> ajaxResponse = new AjaxResponse<>();
        AjaxValidationResponse ajaxResponse = new AjaxValidationResponse();
        ajaxResponse.setErrors(e.getErrors());
        response.setStatus(e.getStatusCode());
        return ajaxResponse;
    }
}
