package com.rockstars.security;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.rockstars.model.Customer;
import com.rockstars.model.Role;

public class CustomerUserDetails implements UserDetails {

    private static final long serialVersionUID = 1L;
    
    private Customer customer;
    
    private List<SimpleGrantedAuthority> authorities = new LinkedList<>();
    
    public CustomerUserDetails(Customer customer) {
        super();
        this.customer = customer;
        
        // Temporary made up authority
        authorities.add(new SimpleGrantedAuthority("CUSTOMER"));
        
//        for(Role role : customer.getRoles()) {
//            authorities.add(new SimpleGrantedAuthority(role.getAuthority()));
//        }
    }
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return customer.getPassword();
    }

    @Override
    public String getUsername() {
        return customer.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    
    public Customer getCustomer() {
        return customer;
    }

}
