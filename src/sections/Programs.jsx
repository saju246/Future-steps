import React from "react";
import "./Programs.css";
import ArrowIcon from "../assets/Icons/arrow-icon.png";

function Programs() {
  const buttonColors = ["#CC56A5", "#FBA928", "#3C8DAF"];
  const programs = [
    {
      title: "Pre-School Program",
      text: "A perfect blend of academics, play, and values. Our pre-schoolers explore through storytelling, sensory play, music, and guided learning sessions.",
    },
    {
      title: "Day Care Program",
      text: "Flexible, full-day or part-time care with activities, rest, healthy meals, and personal attention in a secure space.",
    },
    {
      title: "After School Care",
      text: "For school-going kids:",
      bullets: [
        "Homework Assistance",
        "Subject Tuition (Arabic, English & Science)",
        "Creative Activities",
        "Dance Classes",
        "Skill Building Games",
      ],
    },
  ];
  return (
    <section id="programs" className="program-page">
      <h2 className="program-title">
        <span className="highlight-letter-programs">Pr</span>ograms We Offer
      </h2>

      <div className="program-wrapper">
        <div className="program-grid">
          {programs.map((item, index) => (
            <div
              key={index}
              className={`program-box ${index === 2 ? "wide-box" : ""}`}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>

              {item.bullets && (
                <ul className="program-bullets">
                  {item.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
              <div className="gap"></div>
              <button
                className="program-btn"
                style={{ backgroundColor: buttonColors[index] }}
                onClick={() => {
                  const contactSection = document.getElementById("contact-section");
                  if (contactSection)
                    contactSection.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Enroll Now
                <img className="arrow-icon" src={ArrowIcon} alt="arrow" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
