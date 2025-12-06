import { createContext, useState, useEffect } from "react";
import authApi from "../../src/api/authApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    return {
      token: token || null,
      role: role || null,
      user: null,
    };
  });

  // 🟢 Tự động load profile khi có token (F5 vẫn còn token)
  useEffect(() => {
  if (!auth.token) return;

  const fetchProfile = async () => {
    try {
      let res;
      if (auth.role === "ROLE_SELLER") {
        res = await authApi.getSellerInfo();   // gọi /seller/profile
      } else {
        res = await authApi.getUserInfo();     // gọi /user/profile
      }

      setAuth(prev => ({
        ...prev,
        user: res.data,
        role: res.data.role || prev.role,
      }));

    } catch (err) {
      console.log("Load profile thất bại:", err);
      logout(); // chỉ khi token hết hạn hoặc invalid
    }
  };

  fetchProfile();
}, [auth.token]);
   
  useEffect(() => {
    console.log("📡 Auth state changed:", auth);
    console.log("ROLE HIỆN TẠI:", auth.role);
    if (auth.token) {
      localStorage.setItem("token", auth.token);
      localStorage.setItem("role", auth.role || "");
    }
  }, [auth]); // Thêm auth vào dependency

  const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");

  setAuth({
    token: null,
    role: null,
    user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
