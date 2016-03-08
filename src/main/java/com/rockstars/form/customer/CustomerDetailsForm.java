package com.rockstars.form.customer;

import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotBlank;

import com.rockstars.config.Const;

public class CustomerDetailsForm {
    
    @Size(min=Const.CUSTOMER_MIN, max=Const.CUSTOMER_TITLE_MAX)
    @NotBlank
    private String title;
    
    @Size(min=Const.CUSTOMER_MIN, max=Const.CUSTOMER_FNAME_MAX)
    @NotBlank
    private String firstname;
    
    @Size(min=Const.CUSTOMER_MIN, max=Const.CUSTOMER_LNAME_MAX)
    @NotBlank
    private String lastname;
    
    @Size(min=Const.TEL_MIN, max=Const.TEL_MAX)    // To include 123456789 before 6pm and 987654321 after 6pm
    @NotBlank
    private String telephone;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }
    
    
    
}
