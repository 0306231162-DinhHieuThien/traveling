import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  // State quản lý các bước: 'INPUT_EMAIL' hoặc 'INPUT_OTP'
  const [step, setStep] = useState('INPUT_EMAIL'); 
  
  // Dữ liệu form
  const [email, setEmail] = useState('');
  
  // State riêng cho OTP: Mảng 6 chuỗi rỗng
  const [otp, setOtp] = useState(new Array(6).fill(""));
  
  // Dùng để focus vào các ô input
  const inputRefs = useRef([]);

  // Tự động focus vào ô đầu tiên khi chuyển sang bước OTP
  useEffect(() => {
    if (step === 'INPUT_OTP') {
      inputRefs.current[0]?.focus();
    }
  }, [step]);

  // Xử lý khi nhập vào ô OTP
  const handleChangeOTP = (element, index) => {
    if (isNaN(element.value)) return false; // Chỉ cho nhập số

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Nếu nhập xong 1 số & không phải ô cuối -> Focus ô tiếp theo
    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Xử lý khi bấm nút xóa (Backspace)
  const handleKeyDownOTP = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        // Nếu ô hiện tại rỗng mà bấm xóa -> Lùi về ô trước
        inputRefs.current[index - 1].focus();
      } 
    }
  };

  const handleGetOTP = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Vui lòng nhập Email!");
      return;
    }
    // Giả lập gửi OTP
    console.log("Đang gửi OTP đến:", email);
    alert(`Mã OTP của bạn là: 123456`);
    setStep('INPUT_OTP');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const otpString = otp.join(""); // Gộp mảng ['1','2'...] thành "123456"
    console.log("OTP nhập vào:", otpString);

    if (otpString === '123456') {
        alert("Đăng nhập thành công!");
        navigate('/dashboard'); // Chuyển hướng
    } else {
        alert("Mã OTP sai rồi! (Thử lại: 123456)");
        setOtp(new Array(6).fill("")); // Reset ô nhập
        inputRefs.current[0].focus();
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* --- Header thay đổi theo bước --- */}
        <h2 className="login-title">
            {step === 'INPUT_EMAIL' ? 'Login' : 'Xác thực OTP'}
        </h2>
        
        <p className="login-subtitle">
            {step === 'INPUT_EMAIL' 
                ? 'Sign in with your email' 
                : `Mã xác thực đã gửi đến ${email}`}
        </p>

        <form className="login-form">
          {/* --- BƯỚC 1: NHẬP EMAIL --- */}
          {step === 'INPUT_EMAIL' && (
            <>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <button onClick={handleGetOTP} className="btn-signin">
                LẤY MÃ OTP
              </button>
            </>
          )}

          <div className="forgot-password-link">
                 <Link to="/forgetpassword">Forgot Password?</Link>
              </div>
          {/* --- BƯỚC 2: NHẬP 6 SỐ OTP --- */}
          {step === 'INPUT_OTP' && (
            <>
              <div className="otp-input-group">
                {otp.map((data, index) => (
                    <input
                        className="otp-box"
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        ref={el => inputRefs.current[index] = el}
                        onChange={e => handleChangeOTP(e.target, index)}
                        onKeyDown={e => handleKeyDownOTP(e, index)}
                        onFocus={e => e.target.select()}
                    />
                ))}
              </div>

              <button onClick={handleLogin} className="btn-signin">
                XÁC NHẬN
              </button>

              <div className="otp-resend">
                  <p>Bạn chưa nhận được mã?</p>
                  <span onClick={() => alert("Đã gửi lại mã!")}>Gửi lại</span>
                  <br/>
                  <span 
                    className="change-email"
                    onClick={() => setStep('INPUT_EMAIL')} 
                  >
                    ← Nhập lại Email
                  </span>
              </div>
            </>
          )}

          {/* --- Footer Social --- */}
          {step === 'INPUT_EMAIL' && (
            <>
                <div className="separator">
                    <span>— Or Sign In With —</span>
                </div>
                <div className="social-login">
                    <button type="button" className="btn-social facebook">Facebook</button>
                    <button type="button" className="btn-social twitter">Twitter</button>
                </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;