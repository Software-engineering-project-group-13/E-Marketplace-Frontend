import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";
import NEVerification from "./pages/NEVerification";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="resetpassword" element={<ResetPassword />} />
      <Route path="changepassword" element={<ChangePassword />} />
      <Route path="neverification" element={<NEVerification />} />

    </Routes>
  );
};

export default App;
