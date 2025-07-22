import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
  console.log("🧪 [INTERCEPTOR] accessToken:", accessToken)
);

//응답 인터셉터
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status == 401) {
      console.log("401: 토큰 만료 또는 인증 오류");
    }
    return Promise.reject(error);
  }
);

export default instance;
