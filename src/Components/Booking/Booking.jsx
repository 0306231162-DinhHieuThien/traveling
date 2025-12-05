import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.scss';

// Dữ liệu mặc định (đề phòng trường hợp không truyền props)
const defaultSteps = [
  { id: 1, number: '01', title: 'Choose Destination', desc: 'Select your preferred destination.', icon: '', path: '/' },
  { id: 2, number: '02', title: 'Make Payment', desc: 'Pay safely and securely.', icon: '', path: '/' },
  { id: 3, number: '03', title: 'Ready For Travelling', desc: 'Enjoy your trip.', icon: '', path: '/' }
];

// Nhận props { steps } từ cha
const Booking = ({ steps }) => {
  const navigate = useNavigate();
  
  // Nếu có props 'steps' truyền vào thì dùng, nếu không thì dùng 'defaultSteps'
  const dataToRender = steps || defaultSteps;

  const handleCardClick = (path) => {
    if (path) {
      navigate(path);
      window.scrollTo(0, 0);
    } else {
      alert("Chức năng đang phát triển!");
    }
  };

  return (
    <section className="booking-section">
      <h2 className="booking-title">
        Easy Steps <span>For Bookings</span>
      </h2>

      <div className="booking-grid">
        {dataToRender.map((item) => (
          <div 
            className="booking-item" 
            key={item.id}
            onClick={() => handleCardClick(item.path)}
          >
            <div className="booking-icon-box">
              <img src={item.icon} alt={item.title} className="booking-icon-img" />
              <span className="booking-number-badge">{item.number}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Booking;