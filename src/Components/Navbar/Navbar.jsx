import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
// LƯU Ý: Kiểm tra đường dẫn import này có đúng với máy bạn không
import AvatarDropdown from '../AvatarDropdown/AvatarDropdown'; 
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);
  // const [user, setUser] = useState(() => {
  //   const saved = localStorage.getItem("user");
  //   return saved ? JSON.parse(saved) : null;
  // });

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

        <div className="navbar__actions">
          <button className="btn btn--primary">Become Partner</button>

          {auth?.token ? (
            <AvatarDropdown
              user={{ email: auth.email, role: auth.role }}
              logout={logout}
            />
          ) : (
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