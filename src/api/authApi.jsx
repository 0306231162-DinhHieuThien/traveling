import axios from "axios";

const API = "http://localhost:8081";

// Tạo instance axios để tự gắn token
const api = axios.create({
  baseURL: API,
});

// Tự động gắn JWT token vào header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const authApi = {
  // sendLoginOtp: (email) => {
  //   return api.post("/auth/send/login-login-otp", {
  //     email: email,
  //     role: "ROLE_CUSTOMER",
  //   });
  // },
  sendLoginOtp: (email) => {
    return api.post("/auth/send/login-login-otp", { email });
  },
  loginWithOtp: (email, otp) => {
    return api.post("/auth/login", {
      email: email,
      otp: otp,
    });
  },

  getMyInfo: () => {
    return api.get("/user/profile");
  },
  getSellerInfo:()=>{
    return api.get("/sellers/profile");
  },
  // --- Mới thêm: Signup OTP ---
  sendSignupOtp: (email) => {
    return api.post("/auth/send/signup-signup-otp", { email });
  },

  signup: ({ email, fullName, mobile, otp }) => {
    return api.post("/auth/user/signup", { email, fullName, mobile, otp });
  },
};

export default authApi;
