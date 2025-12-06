import React, { useState } from 'react';import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import các components
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import PopularDestination from './Components/PopularDestination/PopularDestination';
import VacationPackages from './Components/VacationPackages/VacationPackages';
import Testimonials from './Components/Testimonials/Testimonials';
import Gallery from './Components/Gallery/Gallery';
import FooterExtended from './Components/FooterExtended/FooterExtended';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

//import context
import {  AuthProvider } from './context/AuthContext';
// Import Pages
import About from './pages/About/About'; 
import Tour from './pages/Tour/Tour';
import Guide from './pages/Tour/Guide';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
// --- MỚI: Import trang Dashboard ---
// import Dashboard from './pages/Dashboard/SellerDashboard';
import SellerDashboard from './pages/Dashboard/SellerDashboard';
import UserDashboard from './pages/Dashboard/UserDashboard';
const PrivacyPolicy = () => (
  <div style={{ paddingTop: '150px', textAlign: 'center' }}>
    <h2>Chính sách bảo mật</h2>
    <p>Nội dung đang được cập nhật...</p>
  </div>
);

const Terms = () => (
  <div style={{ paddingTop: '150px', textAlign: 'center' }}>
    <h2>Điều khoản sử dụng</h2>
    <p>Nội dung đang được cập nhật...</p>
  </div>
);

const FAQ = () => (
  <div style={{ paddingTop: '150px', textAlign: 'center' }}>
    <h2>Câu hỏi thường gặp</h2>
    <p>Nội dung đang được cập nhật...</p>
  </div>
);
// -----------------------------------------------------------
const App = () => {
  return (
    <AuthProvider>
    <Router>
      <div className="app">
        {/* Header luôn hiển thị */}
        <Navbar />

        <Routes>
          {/* Trang chủ */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <PopularDestination />
                <VacationPackages />
                <Testimonials />
                <Gallery />
                <FooterExtended />
              </>
            }
          />
              {/* Trang Tour */}
            <Route
            path="/tour" // Thêm đường dẫn mới cho trang Tour
            element={
              <>
                <Tour />
                <FooterExtended />
              </>
            }
          />
   
   
          {/* Trang Guide (LẮP ĐẶT ĐỘC LẬP BÊN NGOÀI) */}
          <Route
            path="/tour/guide" 
            element={
              <>
                <Guide />
                <FooterExtended />
              </>
            }
          />

          {/* Trang About */}
          <Route
            path="/about"
            element={
              <>
                <About />
                <FooterExtended /> {/* ✅ thêm footer giống Home */}
              </>
            }
          />

          <Route
            path="/login" 
            element={
              <>
                <Login />
                <FooterExtended />
              </>
            }
          />

          <Route
            path="/register" 
            element={
              <>
                <Register />
                <FooterExtended />
              </>
            }
          />

            <Route
            path="/forgetpassword" 
            element={
              <>
                <ForgetPassword />
                <FooterExtended />
              </>
            }
          />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />

            {/* <Route 
            path="/dashboard" 
            element={<Dashboard />} 
          /> */}
            {/* --- ROUTE CHO SELLER (Quản lý) --- */}
         <Route 
            path="/seller/dashboard"
            element={
              <ProtectedRoute role="ROLE_SELLER">
                <SellerDashboard />
              </ProtectedRoute>
            }
          />

          {/* USER */}
          <Route 
            path="/dashboard/user"
            element={
              <ProtectedRoute role="ROLE_CUSTOMER">
                <UserDashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
};

export default App;
