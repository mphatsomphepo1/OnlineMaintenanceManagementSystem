package com.maulidi.login.FaultPackage.service;

import com.maulidi.login.FaultPackage.entity.Report;

import java.util.List;

public interface ReportService {
    Report createReport(Report report);

    List<Report> getAll();

    boolean deleteReport(Long id);

    Report editReport(Long id);

    Report updateReport(Long id, Report report);
}
