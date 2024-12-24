import React from 'react';
import './home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <main className="home-main">
        <section className="intro">
          <h1>Welcome to Our Website!</h1>
          <p>We are glad to have you here. Explore our services and learn more about what we offer.</p>
          <button>Get Started</button>
        </section>

        <section className="services">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>Building modern and responsive websites for businesses and individuals.</p>
            </div>
            <div className="service-card">
              <h3>App Development</h3>
              <p>Creating high-performance mobile applications for Android and iOS.</p>
            </div>
            <div className="service-card">
              <h3>Digital Marketing</h3>
              <p>Helping brands grow through innovative and effective marketing strategies.</p>
            </div>
          </div>
        </section>

        <section className="about">
          <h2>About Us</h2>
          <p>We are a team of passionate professionals dedicated to helping businesses succeed in the digital world.</p>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
