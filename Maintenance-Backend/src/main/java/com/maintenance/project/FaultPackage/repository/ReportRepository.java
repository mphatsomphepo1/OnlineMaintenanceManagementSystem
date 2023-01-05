package com.maulidi.login.FaultPackage.repository;

import com.maulidi.login.FaultPackage.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends JpaRepository<Report, Long> {
}
