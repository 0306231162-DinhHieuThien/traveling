import React from 'react';
import './Testimonials.scss';

const testimonials = [
  {
    name: 'ALISON WHITE',
    role: 'TRAVELLERS',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stars: 4,
  },
  {
    name: 'GEORGE SMITH',
    role: 'TRAVELLERS',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stars: 4,
  },
  {
    name: 'ALISON WHITE',
    role: 'TRAVELLERS',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stars: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">CLIENT'S REVIEWS</h2>
      <h3 className="testimonials__subtitle">TRAVELLER'S TESTIMONIAL</h3>
      <p className="testimonials__intro">
        Fusce hic augue velit wisi quibusdam pariatur, justo primis nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
      </p>

      <div className="testimonials__grid">
        {testimonials.map((item, index) => (
          <div className="testimonial__card" key={index}>
            <div className="testimonial__stars">
              {'★'.repeat(item.stars)}{'☆'.repeat(5 - item.stars)}
            </div>
            <p className="testimonial__text">{item.text}</p>
            <div className="testimonial__author">
              <div className="testimonial__avatar" />
              <div>
                <strong>{item.name}</strong>
                <div className="testimonial__role">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
