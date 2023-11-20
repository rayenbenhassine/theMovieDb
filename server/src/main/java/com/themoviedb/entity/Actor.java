package com.themoviedb.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Actor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String character;
    private String profilePath;
    private Boolean adult;
    private Integer gender;
    private String knownForDepartment;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movie;

}
