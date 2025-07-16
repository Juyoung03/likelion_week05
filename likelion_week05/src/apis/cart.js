import instance from "./instance";

export const fetchAllCarts = async () => {
    const cartId = localStorage.getItem("cartId");
    const res = await instance.get(`/cart/${cartId}`);

    return res.data;
};

export const deleteCartItem = async (cartItemId) => {
    const res = await instance.delete(`/cart/${cartItemId}`);
    
    return res.data;
}

export const addToCart = async (userId, productId, quantity) => {
  const res = await instance.post(`/cart/${userId}`, {
    productId,
    quantity
  });
  return res.data;
};