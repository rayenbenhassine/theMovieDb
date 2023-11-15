package com.themoviedb.service;

import com.themoviedb.repository.MovieRepository;
import com.themoviedb.response.MovieCustomMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeService {
    @Autowired
    private MovieRepository movieRepository;

    public List<MovieCustomMapping> getListMovieService() {
        return movieRepository.findMovies();
    }
}
