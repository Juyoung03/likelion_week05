import DelImg from "../assets/exit.svg";
import cartMockData from "../mocks/CartItems";
import shopImg from "../assets/shopImg.svg";
import CartImg from "../assets/cart.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {deleteCartItem, fetchAllCarts} from "../apis/cart";


const ShopCard = ({onTotalPriceChange}) => {
    const nav = useNavigate();

    const [checkItems, setCheckItems] = useState([]);

    const [cartProducts, setCartProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const handleSingleCheck = (checked, index) => {
        if(checked) {
            setCheckItems(prev => [...prev, index]);
        }
        else {
            setCheckItems(prev => prev.filter((el) => el !== index));
        }
    }

    const handleAllCheck = (checked) => {
        if (checked) {
            const idArray = cartProducts.map((_, index) => index);
            setCheckItems(idArray);
        }
        else {
            setCheckItems([]);
        }
    }


    const isAllChecked =
        Array.isArray(cartProducts) &&
        checkItems.length === cartProducts.length &&
        cartProducts.length > 0;

    useEffect(() => {
        const selectedItems = cartProducts
            .map((item, index) => ({ ...item, index })) // 👉 index를 포함시켜서
            .filter(item => checkItems.includes(item.index));

        const totalPrice = selectedItems.reduce(
            (acc, item) => acc + item.price * item.quantity, 0
        );

        onTotalPriceChange(totalPrice);
    }, [checkItems, cartProducts, onTotalPriceChange]);

    
    useEffect(() => {
        const getCartProducts = async () => {
            try {
                const data = await fetchAllCarts();
                const cartProducts = data.cartItems;
                console.log("fetch 응답 데이터:", data);

                console.log("장바구니 전체 상품 목록: ", cartProducts);
                setCartProducts(cartProducts);

                setIsError(false);
            } catch (error) {
                console.log("장바구니 상품 조회 실패 : ", error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getCartProducts();
    },[]);

    const handleDelete = async (index) => {
        const item = cartProducts[index];
        console.log(item);

        try {
            await deleteCartItem(item.cartItemId);

            const newCart = cartProducts.filter((_, i) => i !== index);
            setCartProducts(newCart);

            setCheckItems((prev) => prev.filter((i) => i !== index));
        } catch (error) {
            console.log("삭제 실패 : ", error);
        }
    };


    return (
        <div className="w-[90%] flex flex-col items-center mx-auto ph:justify-between pt-[10px]">
            <div>
                {cartMockData.cartTotalItems === 0 ? (
                <div className="flex flex-col items-center">
                    <div className="relative mt-[20px] flex flex-col items-center">
                        <img 
                            src={CartImg} 
                            alt="cart" 
                            className="w-[100px]"
                        />
                        <div className="my-[10px] text-cente">장바구니가 비어있습니다.</div>
                    </div>
                    <div className="mt-[20px]">
                        <button 
                            onClick={()=>nav("/")}
                            className="text-[20px] text-[#6B21A8] cursor-pointer"
                        >
                            쇼핑하러 가기
                        </button>
                    </div>
                </div>
            ) : (<>
                {isLoading && <p>불러오는 중...</p>}

                {isError && (
                    <p>장바구니 목록을 불러오지 못했습니다.</p>
                )}

                {!isLoading && !isError && Array.isArray(cartProducts) && cartProducts.length > 0 && (
                <ul>
                    {cartProducts.map((product, index) => (
                    <li key={index}>
                        <div  className="w-[100%] h-[128px] border border-black rounded-2xl flex flex-row items-center m-[5px] p-[5px] font-Inter font-bold ph:justify-between dt:justify-normal">
                            <div className="ml-[10px]">
                                <input 
                                    type="checkbox" 
                                    onChange={(e) => handleSingleCheck(e.target.checked, index)}
                                    checked={checkItems.includes(index)}
                                />
                            </div>

                            <div className="ph:w-15 dt:ml-[60px] dt:w-[74px]">
                                <img src={shopImg} alt="img" />
                            </div>

                            <div className="dt:ml-[50px] dt:w-[170px]">
                                {product.name}
                            </div>

                            <div className="dt:ml-[450px] dt:w-[95px]">
                                {product.quantity}
                            </div>

                            <div className="dt:ml-[30px] dt:w-[95px]">
                                {product.price}원
                            </div>
                            
                            <div 
                                className="dt:ml-[30px] mr-[10px]"
                                onClick={() => handleDelete(index)}    
                            >
                                    <img src={DelImg} alt="delete" />
                            </div>
                        </div>         
                    </li>
                    ))}
                </ul>
                )}
                
                <div className="w-[100%] h-[60px] flex flex-row items-center p-[5px] font-Inter font-bold">
                    <div className="ml-[10px]">
                        <input 
                            type="checkbox" 
                            onChange={(e) => handleAllCheck(e.target.checked)}
                            checked={isAllChecked}
                        />
                    </div>

                    <div className="ml-[20px] text-gray-700 text-sm">
                        전체 선택
                    </div>
                </div>
                </>
            )}
            
            </div>
        
        </div>
    )
}

export default ShopCard;


