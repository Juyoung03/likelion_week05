import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";
import { useEffect } from "react";
import { login } from "../apis/auth";

const KakaoRedirect = () => {
    const nav = useNavigate();
    const location = useLocation();
    const {setTokens} = useAuthStore();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const code = searchParams.get('code');

        if (!code) {
            alert("인가 코드 없음");
            nav("/signin");
            return;
        }

        const kakaoLogin = async() => {
            try {
                const {accessToken, refreshToken} = await login(code);
                setTokens(accessToken, refreshToken);
                nav("/");
            } catch (error) {
                alert("로그인 실패 : ", error);
                nav("/signin");
            }
        }
        kakaoLogin();

        console.log("카카오 인가 코드 : ", code);
    }, [location.search, nav])
    
    return (
        <div>로딩 중</div>
    )
}

export default KakaoRedirect;