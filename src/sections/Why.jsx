import React from "react";
import "./Why.css";
import AboutImage from "../assets/Why-image.png";

function Why() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={AboutImage} alt="About" />
        </div>

        <div className="about-text">
          <h2 className="about-title"><span className="highlight-letter-why">Wh</span>y Future Steps?</h2>
          <p className="about-subtitle">
            Nurturing Young Minds with Love, Learning & Laughter
          </p>
          <div className="about-items">
            <span className="about-item">Creative Curriculum</span>
            <span className="about-item">Caring Educators</span>
            <span className="about-item">Focused on Early Mind Development</span>
            <span className="about-item">Fun-Filled Activities Every Day</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
