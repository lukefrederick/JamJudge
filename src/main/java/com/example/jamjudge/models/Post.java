package com.example.jamjudge.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 5000)
    private String reviewContent;

    @Column(nullable = false)
    private int rating; // e.g. 1–10

    @Column(nullable = false)
    private String albumName;

    @Column(nullable = false)
    private String artistName;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    // Many posts belong to one user
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserProfile user;

    public Post() {
        this.createdAt = LocalDateTime.now();
    }

    public Post(String reviewContent, int rating, String albumName, String artistName, UserProfile user) {
        this.reviewContent = reviewContent;
        this.rating = rating;
        this.albumName = albumName;
        this.artistName = artistName;
        this.user = user;
        this.createdAt = LocalDateTime.now();
    }

    // Getters and Setters
}