package com.maulidi.login.FaultPackage.service;

import com.maulidi.login.FaultPackage.entity.Report;
import com.maulidi.login.FaultPackage.repository.ReportRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportServiceImpl implements ReportService{
    private ReportRepository reportRepository;

    public ReportServiceImpl(ReportRepository reportRepository) {
        this.reportRepository = reportRepository;
    }

    @Override
    public Report createReport(Report report) {
        Report report1 = new Report();

        report1.setFaultName(report.getFaultName());
        report1.setDescription(report.getDescription());
        report1.setRoomNo(report.getRoomNo());
        report1.setDateOccured(report.getDateOccured());
        reportRepository.save(report1);
        return report1;
    }

    @Override
    public List<Report> getAll() {
        List<Report> report = reportRepository.findAll();

        return report;
    }

    @Override
    public boolean deleteReport(Long id) {
        Report report = reportRepository.findById(id).get();
        reportRepository.delete(report);
        return true;
    }

    @Override
    public Report editReport(Long id) {
        Report report = reportRepository.findById(id).get();

        return report;
    }

    @Override
    public Report updateReport(Long id, Report report) {
         report = reportRepository.findById(id).get();
         report.setFaultName(report.getFaultName());
         report.setDescription(report.getDescription());
         report.setRoomNo(report.getRoomNo());

        return report;
    }
}
