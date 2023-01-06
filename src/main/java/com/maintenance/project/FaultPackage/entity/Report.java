package com.maintenance.project.FaultPackage.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "Faults")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String faultName;
    private String description;
    private String roomNo;
    private String dateOccured;
}
