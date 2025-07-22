import {axiosInstance} from './axios';

export const login = async (code) => {
    const res = await axiosInstance.post('/auth/kakao', {
        code,
});

    return res.data;
}