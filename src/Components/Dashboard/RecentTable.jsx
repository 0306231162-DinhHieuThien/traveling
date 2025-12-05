import React from 'react';

const RecentTable = () => {
  // 1. KHỞI TẠO DỮ LIỆU CỨNG NGAY TẠI ĐÂY
  // (Để đảm bảo biến 'orders' luôn tồn tại, không bao giờ bị undefined)
  const orders = [
    {
      id: "#ORD-001",
      customer: "Nguyễn Văn A",
      tour: "Đà Nẵng - Hội An (3N2Đ)",
      date: "2023-10-15",
      amount: "3.500.000đ",
      status: "Approved"
    },
    {
      id: "#ORD-002",
      customer: "Trần Thị B",
      tour: "Hạ Long Bay Cruise",
      date: "2023-10-16",
      amount: "5.200.000đ",
      status: "Pending"
    },
    {
      id: "#ORD-003",
      customer: "Lê Văn C",
      tour: "Sapa Trekking",
      date: "2023-10-18",
      amount: "2.100.000đ",
      status: "Rejected"
    },
    {
      id: "#ORD-004",
      customer: "Phạm Văn D",
      tour: "Phú Quốc Resort",
      date: "2023-10-20",
      amount: "8.000.000đ",
      status: "Approved"
    }
  ];

  // Hàm chọn màu cho trạng thái
  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return { bg: '#e6f4ea', text: '#137333' }; // Xanh lá
      case 'Pending': return { bg: '#fef7e0', text: '#b06000' };  // Vàng
      case 'Rejected': return { bg: '#fce8e6', text: '#c5221f' }; // Đỏ
      default: return { bg: '#eee', text: '#333' };
    }
  };

  return (
    <div style={{ 
      backgroundColor: 'white', 
      padding: '20px', 
      borderRadius: '10px', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      marginTop: '20px'
    }}>
      <h3 style={{ marginBottom: '15px', color: '#333' }}>Đơn đặt Tour gần đây</h3>
      
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #f0f0f0', textAlign: 'left' }}>
              <th style={{ padding: '12px', color: '#666' }}>ID Đơn</th>
              <th style={{ padding: '12px', color: '#666' }}>Khách hàng</th>
              <th style={{ padding: '12px', color: '#666' }}>Tour</th>
              <th style={{ padding: '12px', color: '#666' }}>Ngày đi</th>
              <th style={{ padding: '12px', color: '#666' }}>Tổng tiền</th>
              <th style={{ padding: '12px', color: '#666' }}>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {/* 2. SỬ DỤNG .map() TRÊN BIẾN orders ĐÃ KHAI BÁO Ở TRÊN */}
            {orders.map((item, index) => {
              const statusStyle = getStatusColor(item.status);
              return (
                <tr key={index} style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold' }}>{item.id}</td>
                  <td style={{ padding: '12px' }}>{item.customer}</td>
                  <td style={{ padding: '12px' }}>{item.tour}</td>
                  <td style={{ padding: '12px' }}>{item.date}</td>
                  <td style={{ padding: '12px', fontWeight: 'bold' }}>{item.amount}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{
                      backgroundColor: statusStyle.bg,
                      color: statusStyle.text,
                      padding: '5px 10px',
                      borderRadius: '15px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTable;