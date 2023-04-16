import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Product from "./pages/Product";

import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";
import NEVerification from "./pages/NEVerification";
import Favorites from "./pages/Buyer/Favorites"
import AddProducts from "./pages/Seller/AddProduct";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<Profile />} />
      <Route path="product" element={<Product />} />
      <Route path="login" element={<Login />} />
      <Route path="resetpassword" element={<ResetPassword />} />
      <Route path="changepassword" element={<ChangePassword />} />
      <Route path="neverification" element={<NEVerification />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="addproducts" element={<AddProducts />} />


    </Routes>
  );
};

export default App;
