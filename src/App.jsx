import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import ShoppingCart from "./pages/ShoppingCart";
import Layout from "./components/layouts/Layout";
import ProductsDetail from "./pages/ProductsDetail";
import ProductsSearch from "./pages/ProductsSearch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    if(!localStorage.getItem("cartId")) {
      localStorage.setItem("cartId", "1");
    }

    if (!localStorage.getItem("userId")) {
      localStorage.setItem("userId", "1");
    }
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
          <Route path="/products" element={<ProductsSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
