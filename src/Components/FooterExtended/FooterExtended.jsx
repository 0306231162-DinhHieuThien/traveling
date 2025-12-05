import React from 'react';
import './FooterExtended.scss';
import { Link } from 'react-router-dom';
// Import ảnh từ src/Assets/images
import img1 from '../../Assets/images/img1.jpg';
import img2 from '../../Assets/images/img2.jpg';
import img3 from '../../Assets/images/img3.jpg';
import img4 from '../../Assets/images/img4.jpg';
import img5 from '../../Assets/images/img5.jpg';
import img6 from '../../Assets/images/img6.jpg';
const FooterExtended = () => {
  return (
    <section className="cta-footer">
      {/* Call to Action */}
      <div className="cta">
        <h2>CALL TO ACTION</h2>
        <h3>READY FOR UNFORGETTABLE TRAVEL. REMEMBER US!</h3>
        <p>
          Fusce hic augue vel nisi quisadburn portair, lacus nec nemo, rutrum. Vestibulum cunque laudantium.
          Sit ornare mollitia tenetur, optent.
        </p>
        <button className="btn btn--primary">CONTACT US!</button>
      </div>

      {/* Footer */}
      <footer className="footer-extended">
        <div className="footer__grid">
          {/* Logo & Description */}
          <div>
            <h4 className="footer__logo">TRAVELER</h4>
            <p>
              Una ratione ante harum provident, eleifend, vulputate molestiae proin fringilla, praesentium magna conubia est perferendis, pretium, ultricies aut.
            </p>
          </div>

          {/* Recent Posts */}
          <div>
            <h4>RECENT POST</h4>
            <ul className="footer__posts">
              <li>
                <strong>BEST JOURNEY TO PEACEFUL PLACES</strong>
                <span>February 12, 2022</span>
              </li>
              <li>
                <strong>TRAVEL WITH FRIENDS IS BEST</strong>
                <span>February 11, 2022</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4>CONTACT US</h4>
            <p>Feel free to contact and reach us!</p>
            <p>Phone: +(098) 256 203</p>
            <p>Email: info@domain.com</p>
            <p>Address: 346 Koontz, California</p>
          </div>

          {/* Gallery */}
          {/* GALLERY */}
        <div className="footer__column">
          <h3>GALLERY</h3>
          <div className="footer__gallery">
            <img src={img1} alt="Gallery 1" />
            <img src={img2} alt="Gallery 2" />
            <img src={img3} alt="Gallery 3" />
            <img src={img4} alt="Gallery 4" />
            <img src={img5} alt="Gallery 5" />
            <img src={img6} alt="Gallery 6" />
          </div>
        </div>

          {/* Newsletter */}
          <div>
            <h4>SUBSCRIBE</h4>
            <p>Subscribe for updates and travel news</p>
            <form className="footer__form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn btn--primary">SUBSCRIBE</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <div className="footer__links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Condition</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <p>© 2022 Traveler. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default FooterExtended;
