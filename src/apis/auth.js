import { axiosInstance } from "./instance";

export const login = async (code) => {
  const res = await axiosInstance.get(`/oauth2/authorization/kakao`, {
    code,
  });
  return res.data;
  //window.location.href = "https://taewon.store/auth/kakao";
};
