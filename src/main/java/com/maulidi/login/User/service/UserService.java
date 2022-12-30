package com.maulidi.login.User.service;

import com.maulidi.login.User.entity.Role;
import com.maulidi.login.User.entity.Stakeholder;
import com.maulidi.login.User.repository.RoleRepository;
import com.maulidi.login.User.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userDao;

    @Autowired
    private RoleRepository roleDao;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void initRoleAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin role");
        roleDao.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDescription("Default role for newly created record");
        roleDao.save(userRole);

        Stakeholder adminUser = new Stakeholder();
        adminUser.setUserName("eva123");
        adminUser.setUserPassword(getEncodedPassword("1234"));
        adminUser.setUserFirstName("Evans");
        adminUser.setUserLastName("Maulidi");
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userDao.save(adminUser);

        Stakeholder user = new Stakeholder();
        user.setUserName("Phil");
        user.setUserPassword(getEncodedPassword("123"));
        user.setUserFirstName("philip");
        user.setUserLastName("maulidi");
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(userRole);
        user.setRole(userRoles);
        userDao.save(user);
    }

    public Stakeholder registerNewUser(Stakeholder user) {
        Role role = roleDao.findById("User").get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setRole(userRoles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));

        return userDao.save(user);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
}
