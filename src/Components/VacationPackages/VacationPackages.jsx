import React from 'react';
import './VacationPackages.scss';

const packages = [
  {
    title: "Summer Holiday to the Oxolotan River",
    description: "Loremel, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquid porttitor! Eaqua, eos, aspernatur.",
    price: "$520 / per person",
    location: "Malaysia",
    duration: "1 day",
    people: "50 people",
    image: "oxolotan.jpg", // thay bằng ảnh thật nếu có
  },
  {
    title: "Santorini Island's Weekend Vacation",
    description: "Loremel, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquid porttitor! Eaqua, eos, aspernatur.",
    price: "$660 / per person",
    location: "Malaysia",
    duration: "1 day",
    people: "50 people",
    reviews: "43 reviews",
    image: "santorini.jpg",
  },
];

const VacationPackages = () => {
  return (
    <section className="packages">
      <h2 className="packages__title">VACATION PACKAGES</h2>
      <div className="packages__grid">
        {packages.map((pkg, index) => (
          <div className="package__card" key={index}>
            <div className="package__image" style={{ backgroundImage: `url(${pkg.image})` }} />
            <div className="package__info">
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
              <div className="package__meta">
                <span>{pkg.price}</span>
                <span>{pkg.location}</span>
              </div>
              <div className="package__icons">
                <span>{pkg.people}</span>
                <span>{pkg.duration}</span>
                {pkg.reviews && <span>{pkg.reviews}</span>}
              </div>
              <button className="btn btn--primary">BOOK NOW</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VacationPackages;
