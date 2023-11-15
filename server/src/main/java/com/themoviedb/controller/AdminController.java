package com.themoviedb.controller;

import com.themoviedb.service.SynchronizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("admin")
public class AdminController {
    @Autowired
    private SynchronizeService movieScheduledTask;

    @GetMapping("synchronizeMovies")
    public ResponseEntity synchronize() {
        movieScheduledTask.insertMoviesFromApi();
        return ResponseEntity.ok("Movies added to database");
    }

}
