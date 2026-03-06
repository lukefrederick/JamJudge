package com.example.jamjudge.controllers;

import com.example.jamjudge.models.UserProfile;
import com.example.jamjudge.repositories.UserProfileRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserProfileController {

    private final UserProfileRepository userProfileRepository;

    public UserProfileController(UserProfileRepository userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }

    // Get all users
    @GetMapping
    public List<UserProfile> getAllUsers() {
        return userProfileRepository.findAll();
    }

    // Get user by ID
    @GetMapping("/{id}")
    public UserProfile getUserById(@PathVariable Long id) {
        return userProfileRepository.findById(id).orElse(null);
    }

    // Create new user
    @PostMapping
    public UserProfile createUser(@RequestBody UserProfile userProfile) {

        return userProfileRepository.save(userProfile);

    }

    // Update user profiles
    @PutMapping("/{id}")
    public ResponseEntity<UserProfile> updateUser(@PathVariable Long id, @RequestBody UserProfile updatedUser) {

        // Find the existing user by ID and if found, update variables and save.
        return userProfileRepository.findById(id)
                .map(user -> {
                    user.setUsername(updatedUser.getUsername());
                    user.setFirstName(updatedUser.getFirstName());
                    user.setLastName(updatedUser.getLastName());
                    user.setEmail(updatedUser.getEmail());
                    user.setBio(updatedUser.getBio());
                    UserProfile savedUser = userProfileRepository.save(user);
                    return ResponseEntity.ok(savedUser);
                })
                .orElseGet(() -> ResponseEntity.notFound().build()); // Return 404 if not found.

    }

    // Delete users
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (!userProfileRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        userProfileRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}