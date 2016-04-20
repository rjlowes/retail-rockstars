package com.rockstars.form.customer;

import javax.validation.constraints.Pattern;

import com.rockstars.config.Const;

public class EmailForm {
    
    @Pattern(regexp = Const.REGEX_EMAIL)
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "EmailForm [email=" + email + "]";
    }
}
