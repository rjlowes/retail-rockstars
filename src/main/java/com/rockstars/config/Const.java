package com.rockstars.config;

public interface Const {
    int CUSTOMER_TITLE_MAX = 20;
    int CUSTOMER_FNAME_MAX = 30;
    int CUSTOMER_LNAME_MAX = 30;
    int CUSTOMER_MIN = 2;
    
    int TEL_MAX = 50;
    int TEL_MIN = 8;
    
    int PASSWORD_MIN = 8;
    
    String REGEX_EMAIL = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
}
