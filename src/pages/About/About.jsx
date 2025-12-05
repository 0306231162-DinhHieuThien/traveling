import React, { useState } from 'react'; 
import './about.scss'; 
import img7 from '../../Assets/images/img7.jpg';
import { SiGoogledisplayandvideo360 } from "react-icons/si";
//import { FaUmbrellaBeach } from "react-icons/fa";
//import { FaHeadset } from "react-icons/fa";
///import { FaUserTag } from "react-icons/fa";
import { FaUmbrellaBeach, FaUserTag, FaHeadset } from "react-icons/fa";

// Giả định các thành phần Header, Footer, Hero đã được tạo ở nơi khác
// Import Header, Footer, Hero... 

// Thành phần cho phần bên phải (Affordable Tours, Guides...)
const FeatureItem = ({ icon, title, text }) => (
  <div className="feature-item">
    <div className="feature-icon">
      {icon} 
    </div>
    <div className="feature-content">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </div>
);

const About = () => {
  // 2. Tạo đối tượng style
    const heroStyle = {
        backgroundImage: `url(${img7})`
    };
    const ctaStyle = {
        backgroundImage: `url(${img7})`, // Ảnh nền cho CTA
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    };
    
  // Trạng thái videoVisible để kiểm soát khi nào video hiển thị
  const [videoVisible, setVideoVisible] = useState(false);

  // Hàm xử lý sự kiện khi nhấn vào Play
  const handlePlayClick = () => {
    setVideoVisible(true);
  };
  return (
    <div className="about-page">
      {/* Phần Hero (Banner lớn) 
        Hình ảnh cho thấy nó là một banner full width với tiêu đề 'ABOUT US' 
      */}
      <section className="about-hero" style={heroStyle}>
        <div className="hero-content">
          <h1>ABOUT US</h1>
        </div>
        {/* Có thể thêm ảnh nền qua CSS */}
      </section>

      {/* Phần Nội dung Chính - Chia 2 cột
        Cột Trái: Tiêu đề lớn và đoạn văn bản
        Cột Phải: Các Feature Icons
      */}
      <section className="about-main-content">
        <div className="container"> 
          {/* Box màu xanh 'WE ARE BEST FOR TOURS & TRAVEL SINCE 1985' */}
          <div className="best-since-box">
            WE ARE BEST FOR TOURS & TRAVEL SINCE 1985 !
          </div>
          
          <div className="content-grid">
            {/* Cột Trái: Văn bản */}
            <div className="content-left">
              <h2>HOW WE ARE BEST FOR TRAVEL !</h2>
              <p>
                Dictumst voluptas qui placeat omnis repellendus, est assumenda
                dolores facilisis, nostra, inceptos. Ullam laudantium deserunt 
                duis platea. Fermentum diam, perspiciatis cupiditat justo quam 
                voluptate, feugiat, quaerat. Delectus quia scelerisque blanditiis 
                venenatis aperiam rem. Tempore porttitor orci eligendi velit, vel 
                scelerisque minus scelerisque? Dict Aenean! Deleniti esse aperiam 
                adipiscing, sapiente!
              </p>
              <p>
                Ratione concubia incididunt nullam! Sodales, impedit, molestias 
                consectetuer itaque magni ut neque, lobortis expedita corporis 
                voluptatum natus praesent mollis quidum auctor curae, mattis 
                lobortis diamilorem iure nullam esse? Pariatur primis.
              </p>
            </div>
            
            {/* Cột Phải: Features Icon */}
            <div className="content-right">
              <FeatureItem
                icon={<FaUmbrellaBeach size={50} />}  
                title="AFFORDABLE TOURS"
                text="Lure doloremque saepe? Ultrices mi aliquam dis tempore incidunt sint, cumque dis temp!"
              />
              <FeatureItem
                icon={<FaUserTag  size={50} />} 
                title="BEST TOUR GUIDES"
                text="Lure doloremque saepe? Ultrices mi aliquam dis tempore incidunt sint, cumque dis temp!"
              />
              <FeatureItem
                icon={<FaHeadset size={50} />} 
                title="24/7 SUPPORT" 
                text="Lure doloremque saepe? Ultrices mi aliquam dis tempore incidunt sint, cumque dis temp!"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Phần Banner dưới (ARE YOU READY TO TRAVEL?)
      */}
      <section className="cta-banner" style={ctaStyle}>
        <div className="cta-overlay">
          <div className="cta-content">
            <div className="play-icon" onClick={handlePlayClick}>
              <i className='fas fa-play'></i><SiGoogledisplayandvideo360 />
            </div> 
            <h2>ARE YOU READY TO TRAVEL?<br/>REMEMBER US !!</h2>
            <p>
              Fusce hic augue velit wisi quibusdam porttitor, iusto primis, nec 
              nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia 
              tenetur, optent.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">VIEW PACKAGES</button>
              <button className="btn btn-outline">LEARN MORE</button>
            </div>
          </div>
        </div>
         {/* Hiển thị video khi nhấn vào biểu tượng play */}
        {videoVisible && (
          <div className="video-container">
            <video width="100%" height="auto" controls>
              <source src="path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </section>
      
      {/* Giả định Footer component được đặt ở đây */}
    </div>
  );
};

export default About;