import {BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserDashboard from "./pages/UserDashboard";

export default function SkillShowcaseExplore() {
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