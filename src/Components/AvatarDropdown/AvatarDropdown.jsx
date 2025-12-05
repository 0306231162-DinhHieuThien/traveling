import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AvatarDropdown.scss'; 

// ✅ SỬA 1: Nhận prop setIsLoggedIn để xử lý đăng xuất
const AvatarDropdown = ({ user, setIsLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // ✅ SỬA 2: Thêm hook navigate để chuyển trang sau khi logout
  const navigate = useNavigate();

  // Logic: Click ra ngoài thì đóng menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // ✅ SỬA 3: Hàm xử lý Logout chi tiết
  const handleLogout = () => {
    const confirm = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (confirm) {
      // 1. Set user ở Navbar về null (để hiện lại nút Login)
      if (setIsLoggedIn) {
        setIsLoggedIn(null);
      }
      // 2. Chuyển hướng về trang Login
      navigate('/login');
    }
  };

  return (
    <div className="avatar-dropdown-container" ref={dropdownRef}>
      {/* 1. Phần Avatar hiển thị */}
      <div 
        className={`avatar-trigger ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
          src={user.avatar || "https://i.pravatar.cc/150?img=3"} // Ảnh mặc định nếu thiếu
          alt="User Avatar" 
          className="avatar-img"
        />
        <div className="user-info">
            <span className="user-name">{user.name}</span>
            <span className="user-role">{user.role === 'seller' ? 'Partner' : 'Member'}</span>
        </div>
        <i className={`arrow-icon ${isOpen ? 'up' : 'down'}`}>▼</i>
      </div>

      {/* 2. Phần Menu xổ xuống */}
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <p className="email">{user.email || "email@example.com"}</p>
          </div>
          
          <ul className="dropdown-list">
            {/* SELLER MENU */}
            {user.role === 'seller' && (
              <>
                <li>
                  <Link to="/seller/dashboard" onClick={() => setIsOpen(false)}>
                    📊 Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/seller/revenue" onClick={() => setIsOpen(false)}>
                    💰 Doanh thu
                  </Link>
                </li>
              </>
            )}

            {/* USER MENU */}
            {user.role === 'user' && (
              <>
                <li>
                  <Link to="/user/my-trips" onClick={() => setIsOpen(false)}>
                    ✈️ Vé của tôi
                  </Link>
                </li>
                <li>
                  <Link to="/user/wishlist" onClick={() => setIsOpen(false)}>
                    ❤️ Yêu thích
                  </Link>
                </li>
              </>
            )}

            <hr />

            {/* CHUNG */}
            <li>
              <Link to="/profile" onClick={() => setIsOpen(false)}>
                ⚙️ Cài đặt
              </Link>
            </li>
            
            {/* NÚT ĐĂNG XUẤT */}
            <li className="logout-item" onClick={handleLogout}>
              🚪 Đăng xuất
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;