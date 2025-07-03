import {BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserDashboard from "./pages/UserDashboard";
import { useEffect } from "react";

export default function SkillShowcaseExplore() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("selected-theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element={<LandingPage />}
          />
          <Route 
            path="/user-dashboard"
            element={<UserDashboard />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}