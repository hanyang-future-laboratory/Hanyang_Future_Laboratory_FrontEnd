import axios from "axios";

const api = axios.create({
    baseURL:
        "http://ec2-15-165-205-14.ap-northeast-2.compute.amazonaws.com:8080",
});

api.interceptors.request.use((req) => {
    if (localStorage.getItem("jwtToken")) {
        req.headers.authorization = `Bearer ${localStorage.getItem(
            "jwtToken"
        )}`;
    }
    return req;
});

export const reviewApi = {
    reviewBoard: () => api.get("/boards"),
    reviewDetail: (id) => api.get(`/boards/${id}`),
    reviewPost: (body) => api.post(`/boards`, { ...body }),
    reviewDelete: (id) => api.delete(`/boards/${id}`),
};

export const registerApi = {
    register: (body) => api.post(`/auth/signup`, { ...body }),
};
export const loginApi = {
    login: (body) => api.post(`/auth/login`, { ...body }),
};
