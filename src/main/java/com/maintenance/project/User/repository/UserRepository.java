package com.maintenance.project.User.repository;

import com.maintenance.project.User.entity.Stakeholder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<Stakeholder, String> {
    Optional<Stakeholder> findByUserName(String userName);
}
