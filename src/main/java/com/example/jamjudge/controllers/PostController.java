package com.example.jamjudge.controllers;

import com.example.jamjudge.models.Post;
import com.example.jamjudge.models.UserProfile;
import com.example.jamjudge.repositories.PostRepository;
import com.example.jamjudge.repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    PostRepository postRepository;


    // Retrieve post based on ID
    @GetMapping(value = "/{postId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getPostById(@PathVariable long postId) throws NoResourceFoundException {

        Post post = postRepository.findById(postId).orElse(null);

        if (post == null) {
            String path = "/api/users/posts/" + postId;
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found");
        } else {
            return new ResponseEntity<>(post, HttpStatus.OK);
        }
    }

    // Retrieve all posts
    @GetMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllPosts() {

        List<Post> posts = postRepository.findAll();

        if (posts == null || posts.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(posts, HttpStatus.OK);
        }
    }

    @Autowired
    UserProfileRepository userProfileRepository;
    // Create new post
    @PostMapping(value = "/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createPost(@RequestBody Post post) {

        System.out.println("Received Post: " + post);

        if (post.getUser() == null || post.getUser().getId() == null) {
            return ResponseEntity.badRequest().body("User ID is required");
        }

        // Fetch the UserProfile entity
        UserProfile user = userProfileRepository.findById(post.getUser().getId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Set the fetched UserProfile in the Post
        post.setUser(user);

        // Save the Post
        Post savedPost = postRepository.save(post);

        return ResponseEntity.ok(savedPost);
    }

    // No PutMapping because changing reviews is functionality that I don't plan on adding yet.

    @DeleteMapping(value = "/delete/{postId}")
    public ResponseEntity<?> deletePost(@PathVariable long postId) {

        if (!postRepository.existsById(postId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found");
        }

        postRepository.deleteById(postId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
