// src/pages/Dashboard/SellerDashboard.jsx

import React from 'react';
// Chú ý: ../.. để lùi ra 2 cấp thư mục, rồi vào Components
import Sidebar from '../../Components/Dashboard/Sidebar'; 
import StatCard from '../../Components/Dashboard/StatCard';
import RecentTable from '../../Components/Dashboard/RecentTable';

const SellerDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar role="seller" />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f4f7fe' }}>
         <h1>Seller Dashboard</h1>
         
         <div style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
            <StatCard title="Doanh thu" value="100tr" />
            <StatCard title="Đơn hàng" value="50" />
         </div>

         <RecentTable />
      </div>
    </div>
  );
};

export default SellerDashboard;