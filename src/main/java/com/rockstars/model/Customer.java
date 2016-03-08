package com.rockstars.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.AbstractPersistable;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="customer")
public class Customer extends AbstractPersistable<Long> {
    
    private static final long serialVersionUID = 1L;
    
    @Column(length=150)
    private String fullname;
    
    @Column(length=20)
    private String title;
    
    @Column(length=30)
    private String firstname;
    
    @Column(length=30)
    private String lastname;
    
    @Column(length=50)    // To include 123456789 before 6pm and 987654321 after 6pm
    private String telephone;
    
    @Column(unique=true, length=320)
    private String email;
    
    @Column(length=64)      // To accommodate sha254 encryptions
    private String password;
    
    @ManyToMany
    private List<Role> roles = new ArrayList<>();
    
    @OneToMany(mappedBy="customer", fetch=FetchType.LAZY)
    @JsonIgnore
    private Set<Address> addresses = new HashSet<Address>();

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        ShaPasswordEncoder encoder = new ShaPasswordEncoder(256);
        password = encoder.encodePassword(password, null);
        this.password = password;
    }

    @JsonIgnore
    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    public Set<Address> getAddresses() {
        return addresses;
    }

    public void setAddresses(Set<Address> addresses) {
        this.addresses = addresses;
    }
    
}
