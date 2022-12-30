package com.maulidi.login.User.repository;

import com.maulidi.login.User.entity.Stakeholder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<Stakeholder, String> {
}
