import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:8080"
});


// API Calls for user profiles
export const getUsers = () => API.get("/users/all");
export const getUser = (id) => API.get(`users/details/${id}`)
export const createUser = (user) => API.post("/users/create", user);
export const updateUser = (userId, user) => API.put(`/users/update/${userId}`, user);
export const deleteUser = (id) => API.delete(`/users/delete/${id}`);

// API calls for posts
export const getPosts = () => API.get("/posts/all");
export const getPost = (id) => API.get(`/posts/${id}`);
export const getPostsByUserId = (userId) => API.get(`/posts/user/${userId}`);
export const createPost = (post) => API.post("/posts/create", post);
export const updatePost = (id, post) => API.put(`/posts/update/${id}`, post);
export const deletePost = (id) => API.delete(`/posts/delete/${id}`);