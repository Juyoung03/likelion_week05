import kakaoImg from "../assets/kakao.svg";

const SocialLogin = () => {
  return (
    <main className="rounded-lg shadow-lg h-[640px] flex flex-col items-center justify-center dt:w-[448px] ph:w-[370px]">
      <div className="flex flex-col text-center mb-[50px] text-[20px] font-bold">
        <p>카카오톡으로 간편하게 로그인하고</p>
        <p>서비스를 이용해보세요!</p>
      </div>

      <div>
        <button className="relative rounded-[6px] bg-[#FEE500] dt:w-[400px] ph:w-[322px] h-[40px] text-white">
          <p className="font-extrabold text-[15px] text-black">
            카카오톡으로 로그인
          </p>
          <img
            src={kakaoImg}
            alt="kakao"
            className="absolute bottom-[6px] right-[17px]"
          />
        </button>
      </div>
    </main>
  );
};

export default SocialLogin;
