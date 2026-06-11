import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./Components/LoginPage";
import SignPage from "./Components/SignPage";
import GroceryHome from "./Components/GroceryHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Signup */}
        <Route path="/signup" element={<SignPage />} />

        {/* Home */}
        <Route path="/home" element={<GroceryHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;