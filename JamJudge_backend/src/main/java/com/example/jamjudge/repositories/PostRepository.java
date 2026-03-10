package com.example.jamjudge.repositories;

import com.example.jamjudge.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {

}