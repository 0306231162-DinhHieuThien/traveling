import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__grid">
        <div>
          <h4 className="footer__title">TRAVELER</h4>
          <p className="footer__text">Curating journeys that stay with you long after you return.</p>
        </div>
        <div>
          <h4 className="footer__title">Contact</h4>
          <p className="footer__text">+01 (977) 2599 12</p>
          <p className="footer__text">hello@traveler.com</p>
        </div>
        <div>
          <h4 className="footer__title">Follow</h4>
          <p className="footer__text">Instagram • Facebook • TikTok</p>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} TRAVELER — All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
