import React from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router";
import Onboarding from "./components/Onboarding";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#212121] text-[#ffffff] min-h-screen">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
