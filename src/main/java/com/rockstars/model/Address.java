package com.rockstars.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="address")
public class Address {// extends AbstractPersistable<Long> {

    private static final long serialVersionUID = 5993753032286458753L;
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
    @Column(length=150)
    private String fullname;

    private String title;
    
    private String firstname;
    
    private String lastname;
    
    private String telephone;
    
    private String label;
    
    private String address1;
    
    private String address2;
    
    private String address3;
    
    @Column(name="town_city")
    private String townCity;
    
    private String county;
    
//    @ManyToOne(fetch=FetchType.EAGER)
//    @JoinColumn(name="country_id", nullable=false)
//    private Country country;
    private String country;
    
    private String postcode;
    
    @ManyToOne
    @JoinColumn(name="customer_id", nullable=false)
    @JsonIgnore
    private Customer customer;
    
    public Address() {
    }
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
    public String getFullname() {
        return fullname;
    }
    
    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

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

//    public Country getCountry() {
//        return country;
//    }
//
//    public void setCountry(Country country) {
//        this.country = country;
//    }
    
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

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
    
    public void copyAddress(Address address) {
        // copy the address detail here
        title = address.getTitle();
        firstname = address.getFirstname();
        lastname = address.getLastname();
        fullname = address.getFullname();
        telephone = address.getTelephone();
        label = address.getLabel();
        address1 = address.getAddress1();
        address2 = address.getAddress2();
        address3 = address.getAddress3();
        townCity = address.getTownCity();
        county = address.getCounty();
        postcode = address.getPostcode();
        country = address.getCountry();
    }

    @Override
    public String toString() {
        return "Address [id=" + id + ", title=" + title + ", firstname="
                + firstname + ", lastname=" + lastname + ", label=" + label
                + ", address1=" + address1 + ", address2=" + address2
                + ", address3=" + address3 + ", townCity=" + townCity
                + ", county=" + county + ", country=" + country + ", postcode="
                + postcode + ", customer=" + customer + "]";
    }
    
}
