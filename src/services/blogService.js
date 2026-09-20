import api from "./api";

// Get all blogs
export const getBlogs = async () => {
  const response = await api.get("/blogs");
  return response.data;
};

// Get published blogs
export const getPublishedBlogs = async () => {
  const response = await api.get("/blogs/published");
  return response.data;
};

// Get single blog by slug
export const getBlogBySlug = async (slug) => {
  const response = await api.get(`/blogs/slug/${slug}`);
  return response.data;
};