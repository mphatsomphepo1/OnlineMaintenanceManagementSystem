package com.maintenance.project.User.service;

import com.maintenance.project.User.repository.RoleRepository;
import com.maintenance.project.User.repository.UserRepository;
import com.maintenance.project.User.entity.Role;
import com.maintenance.project.User.entity.Stakeholder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
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

        Role workerRole = new Role();
        workerRole.setRoleName("Worker");
        workerRole.setRoleDescription("Worker's role");
        roleDao.save(workerRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDescription("Default role for user");
        roleDao.save(userRole);

        Stakeholder adminUser = new Stakeholder();
        adminUser.setUserName("bsc-com-01-19");
        adminUser.setUserPassword(getEncodedPassword("1234"));
        adminUser.setUserFirstName("Thokozanie");
        adminUser.setUserLastName("Mambere");
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userDao.save(adminUser);

        Stakeholder user = new Stakeholder();
        user.setUserName("bsc-inf-20-19");
        user.setUserPassword(getEncodedPassword("123"));
        user.setUserFirstName("Ben");
        user.setUserLastName("Kaponda");
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(userRole);
        user.setRole(userRoles);
        userDao.save(user);
    }

    public Stakeholder registerNewUser(Stakeholder user) {
        Role role = roleDao.findById("Admin").get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setRole(userRoles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));

        return userDao.save(user);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }


    public List<Stakeholder> getUser() {
        return (List<Stakeholder>) userDao.findAll();
    }

    public Stakeholder getUserById(String userName) {
        return userDao.findById(userName).get();
    }
    public Optional<Stakeholder> getByUserName(Authentication authentication){
        return userDao.findByUserName(authentication.getName());
    }
}
