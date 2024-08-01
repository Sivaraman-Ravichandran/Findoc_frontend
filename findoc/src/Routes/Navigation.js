import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultAuth from "../Page/Authentication/DefaultAuth";
import AdminLogin from "../Page/Authentication/AdminLogin";
import UserAuth from "../Page/Authentication/UserAuth";
import Home from "../Page/Home";
import Hospital from "../Page/Hospital";
import Doctors from "../Page/Doctors";
import Specialists from "../Page/Specialist";
import Events from "../Page/Events";
import Locations from "../Page/Location";
import Profile from "../Page/Profile";
import HospitalDetail from "../Page/HospitalDetail";
import DoctorDetail from "../Page/DoctorDetail";
import LandingPage from "../Page/Landingpage/LandingPage";
import DoctorPage from "../Page/DoctorPage";
function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authState = localStorage.getItem("isAuthenticated");
    if (authState === "true") {
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <BrowserRouter>
    {isAuthenticated}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/default" element={<DefaultAuth />} />
        <Route
          path="/admin-login"
          element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/user-login"
          element={<UserAuth setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/events" element={<Events />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/hospital/:id" element={<HospitalDetail />} />
        <Route path="/doctor/:id" element={<DoctorDetail />} />
        <Route path="/special/:id" element={<DoctorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
