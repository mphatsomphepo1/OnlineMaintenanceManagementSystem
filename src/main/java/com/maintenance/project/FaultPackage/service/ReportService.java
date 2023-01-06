package com.maintenance.project.FaultPackage.service;

import com.maintenance.project.FaultPackage.entity.Report;

import java.util.List;

public interface ReportService {
    Report createReport(Report report);

    List<Report> getAll();

    boolean deleteReport(Long id);

    Report editReport(Long id);

    Report updateReport(Long id, Report report);
}
