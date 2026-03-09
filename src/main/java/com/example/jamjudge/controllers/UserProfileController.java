package com.example.jamjudge.controllers;

import com.example.jamjudge.models.UserProfile;
import com.example.jamjudge.repositories.UserProfileRepository;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserProfileController {

    private final UserProfileRepository userProfileRepository;

    public UserProfileController(UserProfileRepository userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }

    // Get all users
    @GetMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllUsers() {

        List<UserProfile> users = userProfileRepository.findAll();

        if (users == null || users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // 404
        } else {
            return new ResponseEntity<>(users, HttpStatus.OK); // 200
        }
    }

    // Get user by ID
    @GetMapping(value = "/details/{userId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getUserById(@PathVariable Long userId) throws NoResourceFoundException {

        UserProfile user = userProfileRepository.findById(userId).orElse(null);

        if (user == null) {
            String path = "/api/users/details/" + userId;
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"); // this is different from the example because I'm apparently using a different version of Spring than Carri's example
        } else {
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
    }

    // Create new user
    @PostMapping(value = "/create", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createUser(@RequestBody UserProfile user) {

        UserProfile savedUser = userProfileRepository.save(user);

        if (savedUser == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
        }
    }

    // Update user profiles
    @PutMapping(value = "/update/{userId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateUser(@PathVariable Long userId, @RequestBody UserProfile updatedUser) {

        UserProfile existingUser = userProfileRepository.findById(userId).orElse(null);

        if (existingUser == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // 404
        } else {

            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setFirstName(updatedUser.getFirstName());
            existingUser.setLastName(updatedUser.getLastName());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setBio(updatedUser.getBio());

            UserProfile savedUser = userProfileRepository.save(existingUser);

            return new ResponseEntity<>(savedUser, HttpStatus.OK);
        }
    }

    // Delete users
    @DeleteMapping(value = "/delete/{userId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteUser(@PathVariable Long userId) {

        UserProfile user = userProfileRepository.findById(userId).orElse(null);

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // 404
        } else {
            userProfileRepository.delete(user);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 204
        }
    }
}