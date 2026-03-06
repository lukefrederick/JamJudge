package com.example.jamjudge.repositories;

import com.example.jamjudge.models.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<UserProfile, Long> {

}