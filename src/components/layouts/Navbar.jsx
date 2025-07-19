import cartImg from "../../assets/cart.svg";
import signinImg from "../../assets/signin.svg";
import SearchBar from "../SearchBar";
import LoginModal from "../LoginModal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../../stores/useAuthStore";

const Navbar = () => {
  const nav = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn, clearAuth } = useAuthStore();

  const handleSearch = (query) => {
    console.log("검색어:", query);
  };

  const handleCartClick = () => {
    if (isLoggedIn) {
      nav("/shoppingCart");
    } else {
      setIsModalOpen(true);
    }
  };

  const handleLogOut = () => {
    if (isLoggedIn) {
      clearAuth();
      console.log("로그아웃 되었습니다.");
    } else {
      nav("/signin");
    }
  };

  return (
    <>
      <nav className="ph:hidden dt:flex w-full h-[64px] py-[12px] flex-row fixed top-0 left-0 justify-between items-center shadow-lg bg-white z-50">
        <div
          className="pl-[96px] cursor-pointer font-bold text-[#4F46E5]"
          onClick={() => {
            // setIsOpen(false);
            nav("/");
          }}
        >
          ShopMall
        </div>

        {/* 검색창 */}
        <SearchBar onSearch={handleSearch} className="ph:flex" />

        <div className="flex flex-row pr-[96px] gap-[16px]">
          {/* 로그인 */}
          <div
            className="flex flex-row gap-[4px] cursor-pointer"
            onClick={handleLogOut}
          >
            <img className="w-[20px] h-[20px]" src={signinImg} alt="signin" />

            {!isLoggedIn && (
              <div className="items-center font-Inter text-sm">Sign-In</div>
            )}
            {isLoggedIn && (
              <div className="items-center font-Inter text-sm">LogOut</div>
            )}
          </div>

          {/* 장바구니 */}
          <div className="cursor-pointer" onClick={handleCartClick}>
            <img src={cartImg} alt="cartimage" />
          </div>
        </div>
      </nav>

      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Navbar;
