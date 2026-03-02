package com.example.jamjudge.models;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "user_profiles")
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(length = 1000)
    private String bio;

    // One user can have many posts
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Post> posts;

    // Constructors
    public UserProfile() {}

    public UserProfile(String username, String firstName, String lastName, String email, String bio) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.bio = bio;
    }

    // Getters and Setters
}