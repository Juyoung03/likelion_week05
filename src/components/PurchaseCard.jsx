import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

//import { fetchAllProducts } from "../apis/products";

const PurchaseCard = ({ products }) => {
  const navigate = useNavigate();

  const handleClickCart = () => {
    alert("장바구니에 추가되었습니다!");
  };

  // const {
  //   data: products,
  //   isLoading,
  //   error,
  // } = useQuery({ queryKey: ["products"], queryFn: fetchAllProducts });

  // if (isLoading) return <div>로딩중...</div>;
  // if (error) return <div>ERRROR</div>;

  return (
    <div className="grid dt:grid-cols-4 ph:grid-cols-2 ph:gap-[24px] dt:gap-[16px] py-[16px] ">
      {products.map((item) => (
        <div
          key={item.id}
          className="icard"
          onClick={() => navigate(`/products/${item.id}`)}
        >
          <img
            src="/merchandise.png"
            alt={item.name}
            className="w-full h-[192px] object-cover"
          />
          <div className="p-[16px]">
            <div className="text-[10px] font-semibold text-[#4F46E5] mt-[5px] mb-[8px]">
              {item.category}
            </div>
            <div className="text-[15px]">{item.name}</div>
            <div className="w-full flex justify-between mt-[14px]">
              <p className="font-bold text-[15px] ph:mr-[10px]">{item.price}</p>
              <div className="text-[11px] dt:w-[97px] dt:h-[28px] ph:w-[80px] ph:h-[48px]">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickCart();
                  }}
                  text="Add to Cart"
                  className={`dt:px-[12px] dt:py ph:px-[18px] ph:py-[4px] whitespace-normal`}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseCard;
