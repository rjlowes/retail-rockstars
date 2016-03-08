package com.rockstars.form.account;

import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotBlank;

import com.rockstars.config.Const;
import com.rockstars.model.Address;
import com.rockstars.model.Country;

public class AddressForm {
    
    private Long id;
    
    @Size(min=Const.CUSTOMER_MIN, max=Const.CUSTOMER_TITLE_MAX)
    @NotBlank
    private String title;
    
    @Size(min=Const.CUSTOMER_MIN, max=Const.CUSTOMER_FNAME_MAX)
    @NotBlank
    private String firstname;
    
    @Size(min=Const.CUSTOMER_MIN, max=Const.CUSTOMER_LNAME_MAX)
    @NotBlank
    private String lastname;
    
    @Size(min=2, max=12)
    @NotBlank
    private String telephone;
    
    private String label;
    
    @Size(min=2, max=50)
    private String address1;
    
    private String address2;
    
    private String address3;
    
    @Size(min=2, max=50)
    private String townCity;
    
    private String county;
    
    @Size(min=2, max=2)
    private String country;
    
    @Size(min=2, max=50)
    private String postcode;

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

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getAddress3() {
        return address3;
    }

    public void setAddress3(String address3) {
        this.address3 = address3;
    }

    public String getTownCity() {
        return townCity;
    }

    public void setTownCity(String townCity) {
        this.townCity = townCity;
    }

    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }
    
    /**
     * Convenience method but should really be in a separate class as
     * The form is the DTO and also providing the assembler.
     * @see http://martinfowler.com/eaaCatalog/dataTransferObject.html
     * @return
     */
    public Address getAddress() {
        Address address = new Address();
        address.setId(id);
        address.setTitle(title);
        address.setFirstname(firstname);
        address.setLastname(lastname);
        address.setTelephone(telephone);
        address.setLabel(label);
        address.setAddress1(address1);
        address.setAddress2(address2);
        address.setAddress3(address3);
        address.setCounty(county);
        address.setCountry(country);
        address.setPostcode(postcode);
        return address;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
