import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export const reviewApi = {
  reviewBoard: () => api.get("review"),
  reviewDetail: (id) => api.get(`review/${id}`),
  reviewPost: (body) => api.post(`review/form`, { ...body }),
};

export const inquireApi = {
  reviewBoard: () => api.get("EduInquire"),
  reviewDetail: (id) => api.get(`EduInquire/${id}`),
  reviewPost: (body) => api.post(`EduInquire/form`, { ...body }),
};
