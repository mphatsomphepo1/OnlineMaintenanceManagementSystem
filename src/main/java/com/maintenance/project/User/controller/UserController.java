package com.maintenance.project.User.controller;

import com.maintenance.project.User.service.UserService;
import com.maintenance.project.User.entity.Stakeholder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserDetailsService userDetailsService;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    @PostMapping({"/register"})
    public Stakeholder registerNewUser(@RequestBody Stakeholder user) {
        return userService.registerNewUser(user);
    }

    @GetMapping("/auth/userinfo")
    public List<Stakeholder> getUser(){
        return userService.getUser();
    }

    @GetMapping("/user")
    public Optional<Stakeholder> getByUserName(Authentication authentication){
        return userService.getByUserName(authentication);
    }
    @RequestMapping(value = "/userInfo/{userName}", method = RequestMethod.GET)
    public Stakeholder getUserById(@PathVariable("userName") String userName){
        return userService.getUserById(userName);
    }

}
