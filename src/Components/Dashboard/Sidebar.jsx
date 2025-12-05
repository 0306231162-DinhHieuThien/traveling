import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// Import icon từ thư viện
import { FaUser, FaSuitcase, FaChartBar, FaSignOutAlt, FaCog, FaCalendarAlt, FaWallet, FaHeart } from "react-icons/fa";

const Sidebar = ({ role = 'seller' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Định nghĩa menu trực tiếp tại đây để tránh lỗi import
  const menus = {
    seller: [
      { label: 'Dashboard', path: '/seller/dashboard', icon: <FaChartBar /> },
      { label: 'My Tours', path: '/seller/tours', icon: <FaSuitcase /> },
      { label: 'Bookings', path: '/seller/orders', icon: <FaCalendarAlt /> },
      { label: 'Wallet', path: '/seller/wallet', icon: <FaWallet /> },
      { label: 'Settings', path: '/seller/settings', icon: <FaCog /> },
    ],
    user: [
      { label: 'Dashboard', path: '/user/my-trips', icon: <FaUser /> },
      { label: 'My Bookings', path: '/user/bookings', icon: <FaSuitcase /> },
      { label: 'Wishlist', path: '/user/wishlist', icon: <FaHeart /> },
      { label: 'Settings', path: '/user/settings', icon: <FaCog /> },
    ]
  };

  // CHỐT CHẶN LỖI: Nếu role không đúng, tự động lấy mảng rỗng để không bị crash
  const menuItems = menus[role] || [];

  return (
    <div style={{ 
      width: '260px', 
      minHeight: '100vh', 
      backgroundColor: '#fff', 
      borderRight: '1px solid #eee', 
      padding: '20px',
      display: 'flex', 
      flexDirection: 'column'
    }}>
      {/* Logo */}
      <h2 style={{ color: '#007bff', marginBottom: '30px' }}>TRAVEL GO</h2>

      {/* Danh sách Menu */}
      <div style={{ flex: 1 }}>
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <div 
              key={index}
              onClick={() => navigate(item.path)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 15px',
                marginBottom: '10px',
                cursor: 'pointer',
                borderRadius: '8px',
                backgroundColor: isActive ? '#e6f2ff' : 'transparent',
                color: isActive ? '#007bff' : '#555',
                fontWeight: isActive ? 'bold' : 'normal'
              }}
            >
              <span style={{ marginRight: '10px', fontSize: '18px' }}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* Nút Logout */}
      <div 
        onClick={() => navigate('/login')}
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: '12px 15px', 
          cursor: 'pointer', 
          color: 'red', 
          borderTop: '1px solid #eee',
          marginTop: '20px' 
        }}
      >
        <span style={{ marginRight: '10px' }}><FaSignOutAlt /></span>
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;