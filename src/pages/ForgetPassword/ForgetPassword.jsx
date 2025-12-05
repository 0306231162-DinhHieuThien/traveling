import React, { useState } from 'react';
import './ForgetPassword.scss'; // Import file scss ở trên

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic gửi API reset password ở đây
    console.log("Reset link sent to:", email);
    alert(`A reset link has been sent to ${email}`);
  };

  return (
    <div className="forgot-password-container">
      <div className="glass-card">
        {/* Tiêu đề */}
        <h2>Forgot Password</h2>
        
        {/* Hướng dẫn ngắn gọn */}
        <p>
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Input Email */}
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          {/* Nút Submit màu cam */}
          <button type="submit" className="btn-submit">
            SEND RESET LINK
          </button>
        </form>

        {/* Link quay lại Login */}
        <div className="footer-links">
          <a href="/login" className="back-to-login">
            ← Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;