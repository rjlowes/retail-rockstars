package com.rockstars.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.rockstars.model.HomeBean;
import com.rockstars.model.Person;


@RestController
public class HomeController {
    
    private static final Logger LOG = Logger.getLogger(HomeController.class);
    
    @RequestMapping(value="/api/home")
    public @ResponseBody List<String> home(HttpSession session, Model model) {
        session.setAttribute("home", "Home variable");
        model.addAttribute("aString", "session mother fucker!");
        List<String> list = new ArrayList<String>();
        list.add("Hello");
        list.add("World");
        return list;
    }
    
    @RequestMapping(value="/api/secure/person", method=RequestMethod.GET)
    public String newPerson(Person person) {
        return "new.person";
    }
    
}
