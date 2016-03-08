package com.rockstars.form.customer;

import javax.validation.constraints.Size;

public class NameForm {
    
    @Size(min=2, max=30)
    private String firstname;

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }
    
    
}
