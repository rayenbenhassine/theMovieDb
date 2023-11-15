package com.themoviedb.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Backdrop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double aspectRatio;
    private Integer height;
    private Integer width;
    private String filePath;
    private Double voteAverage;
    private Integer voteCount;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movie;

}
