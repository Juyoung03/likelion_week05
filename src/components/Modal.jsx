import cartImg from "../assets/cart.svg";
import ExitImg from "../assets/exit.svg";
import { useNavigate } from "react-router-dom";

const Modal = ( {isOpen, setIsOpen, onConfirm}) => {
    const nav = useNavigate();
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-[#0000006f] z-40 flex items-center justify-center">
                  <div className="w-[450px] h-[220px] bg-white rounded-xl left-1/2 transform -translate-x-1/2 flex flex-col items-center absolute p-[24px]">
                    <div className="absolute right-[8px] top-[8px] cursor-pointer">
                      <img 
                        src={ExitImg} 
                        alt="modal close"
                        onClick={() => setIsOpen(false)}
                      />
                    </div>
                    <div className="flex flex-col items-center mb-[26px]">
                      <img 
                        src={cartImg} 
                        alt="cart Image" 
                        className="mt-[16px] mb-[18px] w-[32px]"
                      />
                      <div>장바구니에 추가되었습니다</div>
                    </div>
        
                    <div className="flex flex-row gap-[16px]">
                      <button 
                        className="w-[190px] h-[40px] text-center rounded-md text-[13px] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white"
                        onClick={() => nav("/")}
                      >
                        쇼핑 계속하기
                      </button>
                      <button 
                        className="w-[190px] h-[40px] text-center rounded-md text-[13px] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white"
                        onClick={onConfirm}
                      >
                        장바구니 보기
                      </button>
                    </div>
                  </div>
                </div>
    )
}

export default Modal;