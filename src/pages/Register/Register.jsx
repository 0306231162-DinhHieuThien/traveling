import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.scss';
import authApi from '../../api/authApi';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: ''
  });

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // message backend

  const inputRefs = useRef([]);

  useEffect(() => {
    if (showOtpForm) inputRefs.current[0]?.focus();
  }, [showOtpForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Gửi OTP đăng ký
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      const res = await authApi.sendSignupOtp(formData.email);
      setShowOtpForm(true);
      setOtp(new Array(6).fill(""));
      alert(res.data.message || 'OTP đã gửi đến email của bạn!');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Gửi OTP thất bại! Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  // Nhập từng ô OTP
  const handleChangeOTP = (e, index) => {
    const val = e.target.value;
    if (!/^\d*$/.test(val)) return;

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    if (val && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDownOTP = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Xác nhận OTP & đăng ký
  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    setError("");
    const otpString = otp.join("");

    if (otpString.length !== 6) {
      setError("Vui lòng nhập đủ 6 số OTP!");
      return;
    }

    try {
      setLoading(true);
      const res = await authApi.signup({
        email: formData.email,
        fullName: formData.fullName,
        mobile: formData.mobile,
        otp: otpString
      });

      alert(res.data.message || "Đăng ký thành công! Vui lòng đăng nhập.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'OTP không đúng hoặc đăng ký thất bại!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2 className="register-title">Create Account</h2>
        <p className="register-subtitle">Join us to explore the world!</p>

        {error && <div className="error-message">{error}</div>}

        {!showOtpForm ? (
          <form onSubmit={handleSendOtp} className="register-form">
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-signup" disabled={loading}>
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmitOtp} className="register-form">
            <p className="otp-text">Nhập mã OTP đã gửi đến email</p>

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

            <button type="submit" className="btn-signup" disabled={loading}>
              {loading ? 'Verifying...' : 'Verify & Signup'}
            </button>

            <div className="otp-resend">
              <span onClick={handleSendOtp}>Gửi lại OTP</span>
              <br />
              <span
                onClick={() => {
                  setShowOtpForm(false);
                  setOtp(new Array(6).fill(""));
                  setError("");
                }}
              >
                ← Nhập lại Email
              </span>
            </div>
          </form>
        )}

        <div className="form-footer">
          <p>Already have an account? <Link to="/login" className="login-link">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
