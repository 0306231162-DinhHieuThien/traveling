// src/pages/Dashboard/UserDashboard.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const UserDashboard = () => {
  const { auth } = useContext(AuthContext);

  // Lấy tên user nếu có, fallback "Khách"
  const userName = auth.user?.fullName || "Khách";

  // Dữ liệu tạm ví dụ
  const trips = [
    { id: 1, title: "Tour Đà Nẵng - Hội An", status: "Đã xác nhận" },
    { id: 2, title: "Tour Hà Nội - Hạ Long", status: "Chờ xác nhận" },
  ];

  return (
    <div className="user-dashboard-container" style={{ padding: '20px 50px', marginTop: '80px' }}>
      <h1>Xin chào, {userName}!</h1>
      <p>Đây là danh sách các chuyến đi bạn đã đặt.</p>
      
      <div className="my-trips-list">
        {trips.map(trip => (
          <div 
            key={trip.id} 
            className="trip-card" 
            style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}
          >
            <h3>{trip.title}</h3>
            <p>Trạng thái: <span style={{ color: trip.status === "Đã xác nhận" ? 'green' : 'orange' }}>{trip.status}</span></p>
            <button>Xem chi tiết</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
