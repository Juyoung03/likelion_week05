import Main from "./pages/Main";
import SignIn from "./pages/Signin";
import Layout from "./components/layouts/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}/>
          <Route path="/signin" element={<SignIn />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
