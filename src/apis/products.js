import instance from "./instance";

export const fetchAllProducts = async () => {
  const res = await instance.get("/products");
  return res.data;
};

export const getProductsById = async (productId) => {
  const res = await instance.get(`/products/${productId}`);
  return res.data;
};

export const getProductsByName = async (productName) => {
  const res = await instance.get("/products", {
    params: { name: productName },
  });
  return res.data;
};
