import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './AvatarDropdown.scss'; 

const AvatarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const { auth, logout } = useContext(AuthContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất?")) {
      logout();
      navigate('/login');
    }
  };
  const goToMyTrips = () => {
    setIsOpen(false);     // đóng dropdown
    navigate('/user/dashboard');  // chuyển sang trang dashboard
  };

  return (
    <div className="avatar-dropdown-container" ref={dropdownRef}>
      <div 
        className={`avatar-trigger ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
          src={auth.user?.avatar || "https://i.pravatar.cc/150?img=3"} 
          alt="User Avatar" 
          className="avatar-img"
        />
        <div className="user-info">
          <span className="user-name">{auth.user?.fullName || "No Name"}</span>
          <span className="user-role">
            {auth.role === "ROLE_SELLER" ? "Partner" 
              : auth.role === "ROLE_ADMIN" ? "Admin" 
              : "Member"}
          </span>
        </div>
        <i className={`arrow-icon ${isOpen ? 'up' : 'down'}`}>▼</i>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <p className="email">{auth.user?.email}</p>
          </div>

          <ul className="dropdown-list">
            {auth.role === "ROLE_SELLER" && (
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

            {auth.role === "ROLE_CUSTOMER" && (
              <>
                <li onClick={() => { setIsOpen(false); navigate('/dashboard/user'); }}>
                  <span>✈️ Vé của tôi</span>
                </li>
                <li>
                  <Link to="/user/wishlist" onClick={() => setIsOpen(false)}>
                    ❤️ Yêu thích
                  </Link>
                </li>
              </>
            )}

            <hr />

            <li>
              <Link to="/profile" onClick={() => setIsOpen(false)}>
                ⚙️ Cài đặt
              </Link>
            </li>
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
