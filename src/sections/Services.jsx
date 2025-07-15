import React, { useState } from "react";
import "./Services.css";
import AfterSchoolCareImage from "../assets/Services/AfterSchoolCare.png";
import DayCareImage from "../assets/Services/DayCare.png";
import PreSchoolImage from "../assets/Services/PreSchool.png";
import TransportationImage from "../assets/Services/Transportation.png";
import ArrowIcon from "../assets/Icons/arrow-icon.png";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const arrowColors = ['#FBA928', '#79BD79', '#CC56A5', '#3C8DAF'];

  const services = [
    {
      img: DayCareImage,
      title: "Day Care",
      subtitle: "Safe, caring environment where kids feel at home.",
      details: "Our Day Care program provides a nurturing environment with structured activities, naps, healthy meals, and a focus on social development.",
    },
    {
      img: AfterSchoolCareImage,
      title: "After School Care",
      subtitle: "Homework help, tuition & skill-based activities.",
      details: "After school hours are productive with our support for homework, academic enrichment, and fun indoor & outdoor games.",
    },
    {
      img: PreSchoolImage,
      title: "Pre-School",
      subtitle: "Laying strong foundations with structured learning & play.",
      details: "Our Pre-School blends early learning with creativity, language development, storytelling, arts & crafts in a joyful setting.",
    },
    {
      img: TransportationImage,
      title: "Transportation",
      subtitle: "Safe pickup & drop services for your convenience.",
      details: "We offer door-to-door transport with trained drivers and helpers ensuring your child travels safely and comfortably.",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">
        <span className="highlight-letter-services">Ou</span>r Services
      </h2>

      <div className="services-grid">
        {services.map((item, index) => (
          <div
            key={index}
            className="service-box"
            onClick={() => setSelectedService(item)}
          >
            <div className="service-img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="service-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <div
                className="arrow-icon-container"
                style={{ backgroundColor: arrowColors[index] }}
              >
                <img className="arrow-icon" src={ArrowIcon} alt="Arrow" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}>✖</button>
            <img src={selectedService.img} alt={selectedService.title} className="modal-img" />
            <h3>{selectedService.title}</h3>
            <p>{selectedService.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
