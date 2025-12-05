import React from 'react';
import './Gallery.scss';

// Import ảnh từ src/Assets
import gallery1 from '../../Assets/images/img1.jpg';
import gallery2 from '../../Assets/images/img2.jpg';
import gallery3 from '../../Assets/images/img3.jpg';
import gallery4 from '../../Assets/images/img4.jpg';
import gallery5 from '../../Assets/images/img5.jpg';
import gallery6 from '../../Assets/images/img6.jpg';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery = () => {
  return (
    <section className="gallery">
      <h2 className="gallery__title">TRAVEL GALLERY</h2>
      <p className="gallery__intro">
        Explore moments captured from unforgettable journeys around the world.
      </p>
      <div className="gallery__grid">
        {images.map((src, i) => (
          <div key={i} className="gallery__item">
            <img src={src} alt={`Gallery ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
