import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
// LƯU Ý: Kiểm tra đường dẫn import này có đúng với máy bạn không
import AvatarDropdown from '../AvatarDropdown/AvatarDropdown'; 

const Navbar = () => {
  // --- 1. STATE QUẢN LÝ USER (GIẢ LẬP ĐỂ TEST) ---
  // Bạn thử đổi null thành object user bên dưới để xem giao diện thay đổi
  const [user, setUser] = useState({
    name: "Tùng Phạm",
    role: "seller", // Thử đổi thành 'user' để test menu khác
    avatar: "" // Để trống để test icon mặc định
  });
  // const [user, setUser] = useState(null); // <-- Bật dòng này để test giao diện CHƯA ĐĂNG NHẬP

  // --- 2. LOGIC DROPDOWN TOUR ---
  const [isTourDropdownOpen, setIsTourDropdownOpen] = useState(false);
  const handleMouseEnter = () => setIsTourDropdownOpen(true);
  const handleMouseLeave = () => setIsTourDropdownOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__top">
        <span className="navbar__inquire">For Further Inquires</span>
        <a href="tel:+01977259912" className="navbar__phone">+01 (977) 2599 12</a>
      </div>

      <div className="navbar__main">
        <div className="navbar__brand">TRAVELER</div>

        <nav className="navbar__links">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/destination">DESTINATION</Link>
          <Link to="/packages">PACKAGES</Link>
          
          {/* --- DROPDOWN TOUR --- */}
          <div
            className="dropdown-menu-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/tour" className="nav-link">TOUR</Link>
            {isTourDropdownOpen && (
              <div className="tour-dropdown-content">
                <Link to="/tour">Tours</Link>
                <Link to="/tour/guide">Guide</Link>
                <Link to="/tour/grid-2">Tours 2 Grid</Link>
                <Link to="/tour/grid-3">Tours 3 Grid</Link>
                <Link to="/tour/detail">Tours Detail</Link>
              </div>
            )}
          </div>
          
          <Link to="/pages">PAGES</Link>
          <Link to="/contact">CONTACT US</Link>
        </nav>

        {/* --- KHU VỰC HÀNH ĐỘNG (Nút bấm) --- */}
        <div className="navbar__actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          
          <button className="btn btn--primary">BOOK NOW</button>

          {/* --- LOGIC QUAN TRỌNG: KIỂM TRA ĐĂNG NHẬP --- */}
          {user ? (
            // CASE 1: Đã đăng nhập -> Hiện AvatarDropdown
            <AvatarDropdown 
              user={user} 
              setIsLoggedIn={setUser} // Truyền hàm này để nút Đăng xuất hoạt động (set user về null)
            />
          ) : (
            // CASE 2: Chưa đăng nhập -> Hiện nút Login/Register cũ
            <>
              <Link to="/login" className="btn btn--ghost">LOGIN</Link>
              <Link to="/register" className="btn btn--ghost">REGISTER</Link>
            </>
          )}

        </div>
      </div>
    </header>
  );
};

export default Navbar;