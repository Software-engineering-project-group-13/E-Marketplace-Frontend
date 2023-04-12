import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<Profile />} />

    </Routes>
  );
};

export default App;
