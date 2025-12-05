import React from 'react';
import './home.scss';
import video from '../../Assets/video2.mp4';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__media">
        {/* Ảnh nền */}
        <img 
          className="home__background"
          src="https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMV9tb3VudF9ldmVyZXN0X3NreWxpbmVfc2ltcGxlX21pbmltYWxfY2FuZGlkX3Bob19mYTFhYTg4Ni01YjE3LTRhNjYtOGE2Ny05YThiNWZmMTZiYTlfMS5qcGc.jpg"
          alt="Background" 
        />
        {/* Overlay */}
        <div className="home__overlay" />
        <img className='ballon' 
        src="https://travlla.dexignzone.com/tailwind/demo/assets/images/hotballon-right.png"
         alt="Ballon1" />
        <img
          className="airplane"
          src="https://travlla.dexignzone.com/tailwind/demo/assets/images/airplane.png"
          alt="Airplane"
        />
        <img
          className="cloud"
          src="https://travlla.dexignzone.com/tailwind/demo/assets/images/inr-banner-cloud.png"
          alt="Cloud 1"
        />
        <img
          className="cloud"
          src="https://travlla.dexignzone.com/tailwind/demo/assets/images/inr-banner-cloud.png"
          alt="Cloud 2"
        />
      </div>

      <div className="home__content">
        <h1 className="home__title">JOURNEY TO EXPLORE WORLD</h1>
        <p className="home__subtitle">
          Ac mi quis mollis. Sapienetc? Selerisque, que, penatibus? Suspendi class corpors nostra rem quas
          voluptatibus habitant? Fames, vivamus minim nemo enim, gravida lobortis quos, eum.
        </p>

        <div className="home__cta">
          <button className="btn btn--primary">BOOK NOW</button>
          <button className="btn btn--ghost">LEARN MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
