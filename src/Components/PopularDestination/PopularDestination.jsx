import React from 'react';
import './PopularDestination.scss';

const destinations = [
  {
    country: 'Italy',
    location: 'SAN MIGUEL',
    description: 'Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit amore malitia tenetur, aperiam.',
    stars: 5,
    images:"https://tse4.mm.bing.net/th/id/OIP.lsknZGFBmvzXc8wzai1HngHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    country: 'Dubai',
    location: 'BURJ KHALIFA',
    description: 'Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.',
    stars: 5,
    images:"https://tse4.mm.bing.net/th/id/OIP.xk5roiF0yGYdXEvAoXF-jwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    country: 'Japan',
    location: 'KYOTO TEMPLE',
    description: 'Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.',
    stars: 5,
  },
];

const PopularDestination = () => {
  return (
    <section className="popular">
      <h2 className="popular__title">POPULAR DESTINATION</h2>
      <div className="popular__grid">
        {destinations.map((item, index) => (
          <div className="popular__card" key={index}>
            <div className="popular__image" >
            <img src={item.images} alt="" />
            </div>
            <div className="popular__info">
              <h3>{item.country}</h3>
              <h4>{item.location}</h4>
              <p>{item.description}</p>
              <div className="popular__stars">
                {'★'.repeat(item.stars)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestination;
