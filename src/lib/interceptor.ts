import axios from "axios";
import { toast } from "react-hot-toast";
import store from "@/redux";
import { resetUser } from "@/redux/authSlice";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error instanceof Error ? error : new Error(error));
  }
);
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;
      switch (status) {
        case 401:
          window.location.href = "/login";
          store.dispatch(resetUser());
          localStorage.clear();
          toast.error("Session expired. Please log in again.");
          break;
        case 403:
          toast.error(error.response?.data?.message);
          break;
        case 404:
          toast.error(error.response?.data?.message);
          break;
        case 500:
          toast.error("Internal server error. Please try again later.");
          break;
        default:
          toast.error(error.response?.data?.message);
          break;
      }
    } else {
      toast.error("Network error. Please check your connection.");
    }

    return Promise.reject(error);
  }
);

export default apiClient;
