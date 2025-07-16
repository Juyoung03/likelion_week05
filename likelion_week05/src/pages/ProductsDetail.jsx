import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import container from "../assets/container";
import Modal from "../components/Modal";
import { addToCart } from "../apis/cart";
import { useQuery } from "@tanstack/react-query";
import { getProductsById } from "../apis/products";

const ProductsDetail = () => {
  const { id } = useParams();
  const nav = useNavigate();

  //const [productItem, setProductItem] = useState();
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: productItem,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductsById(id),
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error || !productItem) return <div>ERROR</div>;

  // useEffect(() => {
  //   const findItem = products.find(
  //     (container) => String(container.id) === String(id)
  //   );
  //   console.log(findItem);

  //   if (!findItem) {
  //     window.alert("존재하지 않는 상품입니다!");
  //     nav("/", { replace: true });
  //   }

  //   setProductItem(findItem);
  // }, [id, nav]);

  if (!productItem) return <div>로딩중 ...</div>;

  //const numberPrice = Number(String(productItem.price).replace(/[^0-9.]/g, ""));


  const handleInfo = async () => {
    const userId = localStorage.getItem("userId");
    const productId = productItem.id;
    const quantity = count;
    console.log(userId, productId, quantity);

    try {
      await addToCart(userId, productId, quantity);
      nav("/shoppingCart");
    } catch (error) {
      console.error("장바구니 추가 실패:", error);
    }
  };

  const handleModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="px-[16px] py-[32px] gap-[32px] border-[1px] border-rgba(0,0,0,0.08) w-[1280px] h-[440px] mt-[67px] bg-white flex">
        {/* 이미지 영역 */}
        <div className="w-[608px] h-[376px] flex justify-center items-center content-center ">
          <img
            src="/merchandise.png"
            alt="상품 이미지"
            className="object-cover"
          />
        </div>

        {/* 상품 정보 */}
        <div className="py-[16px] items-start justify-center w-full">
          <div className="flex justify-between items-start mb-[16px]">
            <p className="text-[#4B5563] font-[14px]">{productItem.category}</p>
            <img src="/heart.svg" alt="찜하기" className="w-[24px] h-[24px]" />
          </div>

          <div className="flex justify-between items-start text-[#1F2937] text-[25.5px] font-bold mb-[16px]">
            <p>{productItem.name}</p>
            <p>{productItem.price}</p>
          </div>

          <div className="text-[#4B5563] flex items-center mb-[42px]">
            <p>description</p>
          </div>

          <div className="flex justify-between h-[32px] mb-[16px]">
            <p className="text-[#374151] text-[13.6px]">구매수량</p>
            <div className="flex gap-[16px] items-center">
              <button
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                <img
                  src="/minus.svg"
                  alt="minus"
                  className="w-[16px] h-[16px]"
                />
              </button>
              <p>{count}</p>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <img src="/plus.svg" alt="plus" className="w-[16px] h-[16px]" />
              </button>
            </div>
          </div>

          <div className="flex justify-between mb-[32.3px]">
            <p className="text-[#374151] text-[13.6px]">총 상품 금액</p>
            <p className="text-[17px] font-bold">
              \{(count * productItem.price).toFixed(2)}
            </p>
          </div>

          <button
            className="w-[283px] h-[48px] mx-auto flex justify-center items-center content-center px-[114px] py-[12px] rounded-[6px] bg-[#6B21A8] text-[#FFFFFF] text-[13.6px]"
            onClick={handleModal}
          >
            장바구니
          </button>

          <Modal isOpen={isOpen} setIsOpen={setIsOpen} onConfirm={handleInfo} />
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
