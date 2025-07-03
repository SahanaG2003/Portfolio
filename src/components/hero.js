import React from 'react';
import './hero.css';
import profileImg from '../assets/profile.jpg';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container fade-in">
        <div className="hero-text slide-up">
          <h1>Hello, I'm <span className="highlight">Sahana G</span></h1>
          <h2>Frontend Developer</h2>
          <p>
            I specialize in building modern, responsive, and user-friendly web interfaces using ReactJS. Let's create something impactful together!
          </p>
          <a href="#projects" className="btn hero-btn">View Projects</a>
        </div>

        <div className="hero-img zoom-in">
          <img src={profileImg} alt="Sahana" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
