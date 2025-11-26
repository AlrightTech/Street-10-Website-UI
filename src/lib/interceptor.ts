import axios from "axios";
import { toast } from "react-hot-toast";
import store from "@/redux";
import { resetUser } from "@/redux/authSlice";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "https://street10backend.up.railway.app/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
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
      // Network error - could be CORS, backend down, or connection issue
      if (error.code === 'ERR_NETWORK' || error.message?.includes('Network Error')) {
        console.error("Network Error Details:", {
          message: error.message,
          code: error.code,
          config: {
            url: error.config?.url,
            baseURL: error.config?.baseURL,
            method: error.config?.method,
          }
        });
        toast.error("Cannot connect to server. Please check if the backend is running and CORS is configured correctly.");
      } else {
        toast.error("Network error. Please check your connection.");
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
