import "./Main.css";
import PurchaseCard from "../components/PurchaseCard";
import { fetchAllProducts } from "../apis/products";
import { useQuery } from "@tanstack/react-query";

const Main = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({ queryKey: ["products"], queryFn: fetchAllProducts });

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>ERRROR</div>;

  return (
    <>
      <div className="font-Inter pt-[32px] pb-[80px] px-[16px]  dt:mx-[80px] bg-[##F9FAFB] ph:mx-[16px] ph:mb-[0px]">
        <p className="text-[25.5px] font-bold text-[#1F2937]">
          Welcome to ShopMall
        </p>
        <p className="text-[13px] text-[#4B5563] mt-[7px]">
          Discover our latest products and deals
        </p>

        <div>
          <div className="flex justify-between mt-[32px]">
            <p className="font-semibold text-[20px] text-[#1F2937]">
              Featured Products
            </p>
            <p className="text-[#4F46E5] content-center col-end-1 text-[11px]">
              View All
            </p>
          </div>
          <PurchaseCard products={products} />
        </div>
      </div>
    </>
  );
};

export default Main;
