package com.maulidi.login.Wisdom.controller;

import com.maulidi.login.Wisdom.entity.Wisdom;
import com.maulidi.login.Wisdom.repository.Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/w1/")
@CrossOrigin(origins = "*")
public class WellcomeController {
    @Autowired
    private Repo repo;

    @PostMapping("/report")
    public Wisdom createReport(@RequestBody Wisdom wisdom){
        Wisdom w1 = new Wisdom();

        w1.setUsername(wisdom.getUsername());
//        w1.setEmail(wisdom.getEmail());
//        w1.setDesc(wisdom.getDesc());
//        w1.setPhonenumber(wisdom.getPhonenumber());
//        w1.setLocation(wisdom.getLocation());
        w1.setFacility(wisdom.getFacility());

        return repo.save(w1);
    }
    @GetMapping("/report")
    public List<Wisdom> getAllreports(){
        return repo.findAll();
    }
}
