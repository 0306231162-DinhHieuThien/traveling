import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import authApi from "../../api/authApi";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const [step, setStep] = useState("INPUT_EMAIL"); // INPUT_EMAIL | INPUT_OTP
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // message backend

  const inputRefs = useRef([]);

  // Auto focus ô đầu khi chuyển step OTP
  useEffect(() => {
    if (step === "INPUT_OTP") inputRefs.current[0]?.focus();
  }, [step]);

  // ==========================  
  // 1) Gửi OTP
  // ==========================
  const handleGetOTP = async () => {
    if (!email.trim()) {
      setError("Vui lòng nhập Email!");
      return;
    }
    try {
      setLoading(true);
      setError("");
      const res = await authApi.sendLoginOtp(email);
      alert(res.data.message || "Đã gửi OTP!");
      setStep("INPUT_OTP");
      setOtp(new Array(6).fill(""));
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Gửi OTP thất bại! Vui lòng thử lại."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================  
  // 2) Nhập OTP
  // ==========================
  const handleChangeOTP = (e, index) => {
    const val = e.target.value;
    if (!/^\d*$/.test(val)) return; // chỉ cho số

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    // auto move
    if (val && index < 5) inputRefs.current[index + 1].focus();
  };

  const handleKeyDownOTP = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // ==========================  
  // 3) Login with OTP
  // ==========================
  const handleLogin = async () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setError("Vui lòng nhập đủ 6 số OTP!");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const res = await authApi.loginWithOtp(email, otpString);

      const { jwt, role } = res.data;
      localStorage.setItem("token", jwt);
      localStorage.setItem("role", role);
      localStorage.setItem("email", email);

      setAuth({ token: jwt, role, email });

      alert("Đăng nhập thành công!");

      if (role === "ROLE_CUSTOMER") navigate("/dashboard/user");
      else if (role === "ROLE_SELLER") navigate("/seller/dashboard");
      else if (role === "ROLE_ADMIN") navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "OTP sai hoặc hết hạn! Vui lòng thử lại."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">
          {step === "INPUT_EMAIL" ? "Login" : "Xác thực OTP"}
        </h2>

        <p className="login-subtitle">
          {step === "INPUT_EMAIL"
            ? "Sign in with your email"
            : `Mã OTP đã gửi đến ${email}`}
        </p>

        {error && <div className="error-message">{error}</div>}

        {/* ================= EMAIL ================= */}
        {step === "INPUT_EMAIL" && (
          <>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={handleGetOTP}
              className="btn-signin"
              disabled={loading}
            >
              {loading ? "Đang gửi OTP..." : "LẤY MÃ OTP"}
            </button>
          </>
        )}

        {/* ================= OTP ================= */}
        {step === "INPUT_OTP" && (
          <>
            <div className="otp-input-group">
              {otp.map((val, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength="1"
                  value={val}
                  ref={(el) => (inputRefs.current[idx] = el)}
                  onChange={(e) => handleChangeOTP(e, idx)}
                  onKeyDown={(e) => handleKeyDownOTP(e, idx)}
                  className="otp-box"
                />
              ))}
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="btn-signin"
              disabled={loading}
            >
              {loading ? "Đang xác nhận..." : "XÁC NHẬN"}
            </button>

            <div className="otp-resend">
              <span onClick={handleGetOTP}>Gửi lại OTP</span>
              <br />
              <span
                onClick={() => {
                  setStep("INPUT_EMAIL");
                  setOtp(new Array(6).fill(""));
                  setError("");
                }}
              >
                ← Nhập lại Email
              </span>
            </div>
          </>
        )}

        {/* Forgot password */}
        <div className="forgot-password-link">
          <Link to="/forgetpassword">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
