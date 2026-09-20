import api from "./api";

// Get all case studies
export const getCaseStudies = async () => {
  const response = await api.get("/case-studies");
  return response.data;
};

// Get single case study by slug
export const getCaseStudyBySlug = async (slug) => {
  const response = await api.get(`/case-studies/slug/${slug}`);
  return response.data;
};