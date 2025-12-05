// src/pages/Register/Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icon con mắt
import './Register.scss';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // State để quản lý ẩn/hiện mật khẩu
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
    console.log('Register data:', formData);
    // Gọi API đăng ký tại đây
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2 className="register-title">Create Account</h2>
        <p className="register-subtitle">Join us to explore the world!</p>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <input 
              type="text" 
              name="username"
              placeholder="Username" 
              value={formData.username}
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

          {/* Phần Mật khẩu chính */}
          <div className="form-group password-wrapper">
            <input 
              type={showPassword ? "text" : "password"} // Thay đổi type dựa trên state
              name="password"
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span 
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Phần Xác nhận Mật khẩu */}
          <div className="form-group password-wrapper">
            <input 
              type={showConfirmPassword ? "text" : "password"} // Thay đổi type dựa trên state
              name="confirmPassword"
              placeholder="Confirm Password" 
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <span 
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" className="btn-signup">REGISTER</button>

          <div className="form-footer">
            <p>Already have an account? <Link to="/login" className="login-link">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;