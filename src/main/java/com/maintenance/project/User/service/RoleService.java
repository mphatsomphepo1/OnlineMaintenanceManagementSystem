package com.maulidi.login.User.service;

import com.maulidi.login.User.entity.Role;
import com.maulidi.login.User.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleDao;

    public Role createNewRole(Role role) {
        return roleDao.save(role);
    }
}
