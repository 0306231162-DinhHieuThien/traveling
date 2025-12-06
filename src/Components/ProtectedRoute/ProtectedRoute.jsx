import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { auth } = useContext(AuthContext);

  console.log("🔒 ProtectedRoute check:", {
    authToken: auth?.token,
    authRole: auth?.role,
    requiredRole: role,
    localStorageToken: localStorage.getItem("token"),
    localStorageRole: localStorage.getItem("role")
  });

  if (!auth?.token) {
    console.log("❌ Không có auth.token, redirect to login");
    return <Navigate to="/login" replace />;
  }
  
  if (role && auth.role !== role) {
    console.log(`❌ Role không đúng: ${auth.role} != ${role}`);
    return <Navigate to="/" replace />;
  }

  console.log("✅ Cho phép truy cập");
  return children;
};

export default ProtectedRoute;