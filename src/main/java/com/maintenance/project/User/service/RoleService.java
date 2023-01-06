package com.maintenance.project.User.service;

import com.maintenance.project.User.repository.RoleRepository;
import com.maintenance.project.User.entity.Role;
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
