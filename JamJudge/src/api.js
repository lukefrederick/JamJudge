// API Service File

import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:8080"
});


// API Calls for user profiles
export const getUsers = () => API.get("/users/all");
export const getUser = (id) => API.get(`users/details/${id}`)
export const createUser = (user) => API.post("/users/create", user);
export const updateUser = (user) => API.put(`/users/update/${id}`)
export const deleteUser = (id) => API.delete(`/users/delete/${id}`);

// API calls for posts
export const getPosts = () => API.get("/posts/all");