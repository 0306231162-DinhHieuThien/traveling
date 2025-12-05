// src/pages/Dashboard/UserDashboard.jsx
import React from 'react';

const UserDashboard = () => {
  return (
    <div className="user-dashboard-container" style={{ padding: '20px 50px', marginTop: '80px' }}>
      <h1>Xin chào, Tùng!</h1>
      <p>Đây là danh sách các chuyến đi bạn đã đặt.</p>
      
      <div className="my-trips-list">
        {/* Sau này map dữ liệu vé vào đây */}
        <div className="trip-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
          <h3>Tour Đà Nẵng - Hội An</h3>
          <p>Trạng thái: <span style={{ color: 'green' }}>Đã xác nhận</span></p>
          <button>Xem chi tiết</button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;