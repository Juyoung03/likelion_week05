import { useQuery } from "@tanstack/react-query";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getProductsByName } from "../apis/products";
import PurchaseCard from "../components/PurchaseCard";

const ProductsSearch = () => {
  const [params] = useSearchParams();
  const name = params.get("name");

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["search", name],
    queryFn: () => getProductsByName(name),
    enabled: !!name,
  });

  if (isLoading) return <div className="p-4">검색 중...</div>;
  if (error) return <div className="p-4">ERROR</div>;
  if (!products || products.length === 0)
    return (
      <div className="font-Inter flex justify-center mt-[32px] text-xl">
        검색 결과가 없습니다🥺
      </div>
    );

  return (
    <div className="font-Inter pt-[32px] pb-[80px] px-[16px]  dt:mx-[80px]  ph:mx-[16px] ph:mb-[0px]">
      <div className="flex mb-[20px] text-xl">
        '{String(name)}' 의 검색 결과입니다.
      </div>
      <PurchaseCard products={products} />
    </div>
  );
};

export default ProductsSearch;
