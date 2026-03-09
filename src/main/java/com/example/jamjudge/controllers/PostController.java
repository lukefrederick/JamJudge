package com.example.jamjudge.controllers;

import com.example.jamjudge.models.Post;
import com.example.jamjudge.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.util.List;

@RestController
@RequestMapping("/users")
public class PostController {

    @Autowired
    PostRepository postRepository;

    // Retrieve post based on ID
    @GetMapping(value = "/posts/{postId}", produces = MediaType.APPLICATION_JSON_VALUE)
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
    @GetMapping(value = "/posts/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllPosts() {

        List<Post> posts = postRepository.findAll();

        if (posts == null || posts.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(posts, HttpStatus.OK);
        }
    }








}
