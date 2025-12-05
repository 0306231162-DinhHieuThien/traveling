import React from 'react';
import './main.scss';

const Main = () => {
  return (
    <main className="main">
      <section id="destination" className="main__section">
        <h2 className="main__heading">Popular Destinations</h2>
        <div className="cards">
          {['Santorini', 'Bali', 'Hallstatt'].map((place) => (
            <article className="card" key={place}>
              <div className="card__image" />
              <div className="card__content">
                <h3 className="card__title">{place}</h3>
                <p className="card__text">Discover breathtaking views, local culture, and curated experiences.</p>
                <button className="btn btn--primary">View Package</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="packages" className="main__section">
        <h2 className="main__heading">Featured Packages</h2>
        <ul className="list">
          <li className="list__item">
            <span className="list__label">7D6N Coastal Escape</span>
            <span className="list__meta">From $899 • Flights + Hotel</span>
          </li>
          <li className="list__item">
            <span className="list__label">Romantic Getaway</span>
            <span className="list__meta">From $499 • Weekend</span>
          </li>
          <li className="list__item">
            <span className="list__label">Adventure Bundle</span>
            <span className="list__meta">From $1099 • Guided</span>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Main;
