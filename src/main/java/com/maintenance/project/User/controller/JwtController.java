package com.maulidi.login.User.controller;

import com.maulidi.login.User.entity.JwtRequest;
import com.maulidi.login.User.entity.JwtResponse;
import com.maulidi.login.User.entity.UserInfo;
import com.maulidi.login.User.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class JwtController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping({"/authenticate"})
    public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        return jwtService.createJwtToken(jwtRequest);
    }

    @GetMapping("/auth/userinfo")
    public JwtResponse getUserInfo(@RequestBody UserInfo userInfo) throws Exception{
        return jwtService.getUser(userInfo);
    }
}
