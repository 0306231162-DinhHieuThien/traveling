// src/components/OtpInput.jsx
import React, { useState, useRef } from 'react';
import './OtpInput.scss';

const OtpInput = ({ length = 6, value, onChange }) => {
  const [otpValues, setOtpValues] = useState(Array(length).fill(''));
  const inputsRef = useRef([]);

  const handleChange = (e, idx) => {
    const val = e.target.value.replace(/\D/, ''); // chỉ nhập số
    if (!val) return;

    const newOtp = [...otpValues];
    newOtp[idx] = val;
    setOtpValues(newOtp);
    onChange(newOtp.join(''));

    if (idx < length - 1) {
      inputsRef.current[idx + 1].focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otpValues];
      newOtp[idx] = '';
      setOtpValues(newOtp);
      onChange(newOtp.join(''));

      if (!otpValues[idx] && idx > 0) {
        inputsRef.current[idx - 1].focus();
      }
    }
  };

  return (
    <div className="otp-container">
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          type="text"
          maxLength={1}
          value={otpValues[idx]}
          onChange={e => handleChange(e, idx)}
          onKeyDown={e => handleKeyDown(e, idx)}
          ref={el => inputsRef.current[idx] = el}
          className="otp-input"
        />
      ))}
    </div>
  );
};

export default OtpInput;
