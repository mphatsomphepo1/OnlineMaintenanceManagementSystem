package com.maulidi.login.Wisdom.repository;

import com.maulidi.login.Wisdom.entity.Wisdom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repo extends JpaRepository<Wisdom, Long> {
}
