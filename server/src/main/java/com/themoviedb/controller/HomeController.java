package com.themoviedb.controller;

import com.themoviedb.response.MovieCustomMapping;
import com.themoviedb.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("movie-list-vite")
public class HomeController {
    @Autowired
    private HomeService homeService;

    @GetMapping()
    public ResponseEntity getListMovie() {
        List<MovieCustomMapping> movies = homeService.getListMovieService();
        if (movies.isEmpty()) {
            return new ResponseEntity("No data found", HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(movies);
    }


}
