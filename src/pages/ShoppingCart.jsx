import ShopCard from "../components/ShopCard";
import { useState } from "react";

const ShoppingCart = () => {
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <div className="pt-[32px] px-[86px]">
            <div className="border-b-[2px] p-[10px]">
                <h1 className="font-bold text-3xl">장바구니</h1>
            </div>

            <div className="flex flex-row justify-between">
                <div className="w-[100%]">
                    <ShopCard onTotalPriceChange = {setTotalPrice} /> 
                </div>
                
                <div className="relative w-[400px] h-[300px] m-[10px] p-[24px] bg-[#dbdddf44] font-Inter text-[14px]">
                    <div className="flex flex-row justify-between mb-[12px]">
                        <div>
                            총 주문 금액 :
                        </div>
                        <div>
                            {totalPrice.toLocaleString()}원
                        </div>
                    </div>

                    <div className="flex flex-row justify-between mb-[12px]">
                        <div>
                            할인 금액 : 
                        </div>
                        <div>
                            0원
                        </div>
                    </div>

                    <div className="flex flex-row justify-between mb-[70px]">
                        <div>
                            배송비 : 
                        </div>
                        <div>
                            0원
                        </div>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div>
                            총 금액 :
                        </div>
                        <div>
                            {totalPrice.toLocaleString()}원
                        </div>
                    </div>

                    <div className="absolute bottom-[25px] left-1/2 transform -translate-x-1/2">
                        <button className="ph:w-[200px] ph:h-[45px] bg-[#6B21A8] rounded-md text-white">결제하기</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ShoppingCart;