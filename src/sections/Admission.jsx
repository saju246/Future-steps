import React from "react";
import "./Admission.css";

function Admission() {
  return (
    <section id="admissions" className="admission-section">
      <h2 className="admission-title"><span className="highlight-letter-admission">Ad</span>missions</h2>
      <p className="admission-subtitle">
        Enroll Your Child in a Brighter Tomorrow. We are now open for
        admissions! Seats are limited to ensure quality care and personal
        attention
      </p>
      <div className="admission-steps">
        <div className="admission-step short">Visit our center</div>
        <div className="admission-step medium">
          Fill out the enrollment form
        </div>
        <div className="admission-step long">
          Let your child explore and begin their joyful learning journey
        </div>
      </div>
      <div className="admission-contact">
        <div className="contact-box location">
          <h4>Located at:</h4>
          <p>Shabiya 12, Opposite Model School Building Number 203, M Floor - M2, M3</p>
        </div>
        <div className="contact-box contact">
          <h4>Contact:</h4>
          <p>050 528 0523 <br />  055 140 4768</p>
        </div>
      </div>
    </section>
  );
}

export default Admission;
