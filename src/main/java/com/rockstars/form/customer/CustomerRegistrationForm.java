package com.rockstars.form.customer;

import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

import com.rockstars.config.Const;

// TODO extend CustomerDetailsForm to keep it DRY
public class CustomerRegistrationForm {
    
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
    
    @NotBlank
    @Email
    private String email;
    
    @NotBlank
    @Email
    private String emailConfirm;
    
    @Size(min=Const.PASSWORD_MIN)
    @NotBlank
    private String password;
    
    @Size(min=Const.PASSWORD_MIN)
    @NotBlank
    private String passwordConfirm;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmailConfirm() {
        return emailConfirm;
    }

    public void setEmailConfirm(String emailConfirm) {
        this.emailConfirm = emailConfirm;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPasswordConfirm() {
        return passwordConfirm;
    }

    public void setPasswordConfirm(String passwordConfirm) {
        this.passwordConfirm = passwordConfirm;
    }
    
}
