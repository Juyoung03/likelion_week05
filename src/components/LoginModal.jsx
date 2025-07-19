import { useNavigate } from "react-router-dom";

const LoginModal = ({ onClose }) => {
  const nav = useNavigate();

  const handleCloseClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLogin = () => {
    onClose();
    nav("/signin");
  };

  return (
    <div className="fixed inset-0 bg-[#0000006f] z-40 flex items-center justify-center">
      <div className="w-[360px] h-[240px] bg-white rounded-[16px] left-1/2 transform -translate-x-1/2 flex flex-col items-center absolute gap-[56px]">
        <div className="absolute right-[24px] top-[24px] cursor-pointer">
          <img
            src="/cross.svg"
            className="w-[14px] h-[14px]"
            onClick={handleCloseClick}
          />
        </div>

        <div className="flex flex-col items-center mt-[80px] font-bold text-[20px]">
          <div>로그인이 필요한 기능입니다.</div>
        </div>

        <div className="flex flex-row">
          <button
            className="w-[280px] h-[40px] mb-[40px] text-center rounded-[8px] font-semibold text-[16px] bg-[#4F46E5] text-[#ffff] hover:bg-[#f0f0f0] hover:text-black"
            onClick={handleLogin}
          >
            로그인하러 가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
