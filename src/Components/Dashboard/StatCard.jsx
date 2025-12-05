import React from 'react';
import { FaChartBar } from 'react-icons/fa';

// Component này giờ đây tự xử lý màu sắc, không cần import từ bên ngoài
const StatCard = ({ title, value, icon, color }) => {
  
  // 1. Thiết lập giá trị mặc định nếu không truyền props vào (Phòng tránh lỗi undefined)
  const displayIcon = icon || <FaChartBar />; // Mặc định là icon biểu đồ
  const displayColor = color || '#4e73df';    // Mặc định là màu xanh dương
  const displayTitle = title || 'Tiêu đề';
  const displayValue = value || '0';

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      borderLeft: `5px solid ${displayColor}`, // Dùng biến màu an toàn ở trên
      minWidth: '200px',
      marginBottom: '10px'
    }}>
      <div>
        <h6 style={{ 
          color: '#888', 
          fontSize: '12px', 
          fontWeight: 'bold', 
          textTransform: 'uppercase', 
          marginBottom: '5px' 
        }}>
          {displayTitle}
        </h6>
        <h3 style={{ 
          color: '#333', 
          fontSize: '20px', 
          fontWeight: 'bold', 
          margin: 0 
        }}>
          {displayValue}
        </h3>
      </div>
      
      <div style={{ 
        fontSize: '24px', 
        color: '#dddfeb' // Màu icon nhạt
      }}>
        {displayIcon}
      </div>
    </div>
  );
};

export default StatCard;