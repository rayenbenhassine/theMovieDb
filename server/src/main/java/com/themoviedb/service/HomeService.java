package com.themoviedb.service;

import com.themoviedb.entity.Movie;
import com.themoviedb.repository.ActorRepository;
import com.themoviedb.repository.CrewRepository;
import com.themoviedb.repository.ImageRepository;
import com.themoviedb.repository.MovieRepository;
import com.themoviedb.response.ActorCustomMapping;
import com.themoviedb.response.CrewCustomMapping;
import com.themoviedb.response.ImageCustomMapping;
import com.themoviedb.response.MovieCustomMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeService {
    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private ActorRepository actorRepository;
    @Autowired
    private CrewRepository crewRepository;
    @Autowired
    private ImageRepository imageRepository;


    public List<MovieCustomMapping> getListMovieService() {
        return movieRepository.findMovies();
    }

    public Movie getMovieService(Long id) {
        return movieRepository.getById(id);
    }

    public List<ActorCustomMapping> getListActorService(Long id) {
        return actorRepository.getActorByMovie(id);
    }

    public List<CrewCustomMapping> getListCrewService(Long id) {
        return crewRepository.getCrewByMovie(id);
    }

    public List<ImageCustomMapping> getListImageService(Long id) {
        return imageRepository.getImagesByMovie(id);
    }
}
