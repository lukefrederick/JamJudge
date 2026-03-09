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

    // Create new post
    @PostMapping(value = "/add", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createPost(@RequestBody Post post) {
        Post savedPost = postRepository.save(post);

        if (savedPost == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(savedPost, HttpStatus.OK);
        }
    }

    // No PutMapping because changing reviews is functionality that I don't plan on adding.


    @DeleteMapping(value = "/delete/{postId}")
    public ResponseEntity<?> deletePost(@PathVariable long postId) {

        // Check if it's in there
        Post post = postRepository.findById(postId).orElse(null);

        // Null if not found and returns post not found HTTP Status
        if (post == null) {
            String path = "/api/users/delete/" + postId;
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found");
        } else {
            postRepository.deleteById(post.getId());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }




}
