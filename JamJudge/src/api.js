import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:8080"
});

const DISCOGS = axios.create({
  baseURL: "https://api.discogs.com"
});

const DISCOGS_KEY = import.meta.env.VITE_DISCOGS_TOKEN;

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

// Discogs API call
export const searchDiscogsAlbums = ({
  page = 1,
  perPage = 25,
  sort = "want",
  sortOrder = "desc"
} = {}) =>
  DISCOGS.get("/database/search", {
    params: {
      type: "release",
      format: "album",
      sort,
      sort_order: sortOrder,
      per_page: perPage,
      page,
      token: DISCOGS_KEY
    }
  });