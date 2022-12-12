package com.maulidi.login.FaultPackage.controller;

import com.maulidi.login.FaultPackage.entity.Report;
import com.maulidi.login.FaultPackage.service.ReportService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class ReportController {
    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }
    @PostMapping("/report")
    public Report createReport(@RequestBody Report report){
        return reportService.createReport(report);
    }
    @GetMapping("/report")
    public List<Report> getAllreports(){
        return reportService.getAll();
    }

    @DeleteMapping("/report/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteFault(@PathVariable Long id){
        boolean deleted = false;
        deleted = reportService.deleteReport(id);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }
    @GetMapping("/report/{id}")
    public ResponseEntity<Report> editReport(@PathVariable Long id){
        Report report = null;
        report = reportService.editReport(id);
        return ResponseEntity.ok(report);
    }

    @PutMapping("/report/{id}")
    public ResponseEntity<Report> updateReport(@PathVariable Long id,
                                               @RequestBody Report report){
        report = reportService.updateReport(id, report);
        return ResponseEntity.ok(report);
    }
}
