package com.maintenance.project.User.entity;

public class JwtResponse {

    private Stakeholder user;
    private String jwtToken;

    public JwtResponse(Stakeholder user, String jwtToken) {
        this.user = user;
        this.jwtToken = jwtToken;
    }

    public Stakeholder getUser() {
        return user;
    }

    public void setUser(Stakeholder user) {
        this.user = user;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }
}
