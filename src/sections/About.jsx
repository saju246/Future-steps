import React from "react";
import AboutImg from "../assets/About-image.png";
import "../sections/About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        
        <div className="about-text-block">
          <h2 className="about-title">
            <span className="highlight-letter-about">Ab</span>out Us
          </h2>
          <p>
            Shaping Little Minds for a Brighter Tomorrow At Future Steps, we
            believe every child is unique. Our mission is to nurture creativity,
            confidence, and curiosity in a warm, playful, and supportive
            environment. With age-appropriate programs, creative courses, and
            experienced staff, we make learning exciting and joyful.
          </p>
          <p className="about-subtext">
            Expert care for the most important people in your life.
          </p>
        </div>
        <div className="about-image">
          <img src={AboutImg} alt="About Us" />
        </div>
      </div>
    </section>
  );
}

export default About;
