import React, { useState } from "react";
import "./ContactUs.css";
import PhoneIcon from "../assets/Icons/phone-2.png";
import MailIcon from "../assets/Icons/mail.png";
import Location from "../assets/Icons/map-pin.png";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;


function ContactUs() {
  const [formData, setFormData] = useState({
    parentName: "",
    contactNumber: "",
    email: "",
    childName: "",
    childAge: "",
    program: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (number) => /^[0-9]{7,15}$/.test(number);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.parentName.trim())
      newErrors.parentName = "Parent name is required";
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!validatePhoneNumber(formData.contactNumber.trim())) {
      newErrors.contactNumber = "Enter a valid phone number (7-15 digits)";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.childName.trim())
      newErrors.childName = "Child's name is required";
    if (!formData.childAge.trim()) {
      newErrors.childAge = "Child's age is required";
    } else if (+formData.childAge <= 0 || +formData.childAge > 18) {
      newErrors.childAge = "Enter a valid age between 1 and 18";
    }
    if (!formData.program.trim()) newErrors.program = "Please select a program";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        Swal.fire({
          title: "Submitted!",
          text: "Your message has been sent successfully.",
          icon: "success",
          confirmButtonColor: "#E32626",
        });

        setFormData({
          parentName: "",
          contactNumber: "",
          email: "",
          childName: "",
          childAge: "",
          program: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again later.",
        });
      });
  };

  return (
    <section id="contact-section" className="contact-page">
      <div className="container">
        <h2 className="contact-title">
          <span className="highlight-letter-contact">Co</span>ntact Us
        </h2>
        <p className="contact-subtitle">
          Have questions or want to visit? We’re happy to help!
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <a className="contact-row" href="tel:+971505280523">
              <img src={PhoneIcon} alt="phone" />
              <span>050 528 0523 | 055 140 4768</span>
            </a>

            <a
              className="contact-row"
              href="mailto:futuresteps.abudhabi@gmail.com"
            >
              <img src={MailIcon} alt="mail" />
              <span>futuresteps.abudhabi@gmail.com</span>
            </a>

            <a
              className="contact-row"
              href="https://maps.app.goo.gl/RdGumWA6m1TomonZ6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Location} alt="location" />
              <span>
                Shabiya 12 – Opposite Model School <br />
                Building No. 203, M Floor – M2, M3
              </span>
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>Parent's Name :</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                />
                {errors.parentName && <span className="error">{errors.parentName}</span>}
              </div>
            </div>

            <div className="form-group">
              <label>Contact Number :</label>
              <div className="input-wrapper">
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
                {errors.contactNumber && <span className="error">{errors.contactNumber}</span>}
              </div>
            </div>

            <div className="form-group">
              <label>Email Address :</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Child's Name:</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                  />
                  {errors.childName && <span className="error">{errors.childName}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Child's Age:</label>
                <div className="input-wrapper">
                  <input
                    type="number"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                  />
                  {errors.childAge && <span className="error">{errors.childAge}</span>}
                </div>
              </div>
            </div>

            <div className="form-group radio">
              <label>Program :</label>
              <div className="radio-group">
                {["Pre School", "Day Care", "After School"].map((program) => (
                  <label key={program} className="radio-label">
                    <input
                      type="radio"
                      name="program"
                      value={program}
                      checked={formData.program === program}
                      onChange={handleChange}
                    />
                    {program}
                  </label>
                ))}
              </div>
              {errors.program && <span className="error">{errors.program}</span>}
            </div>

            <div className="form-group">
              <label>Enter your message :</label>
              <div className="input-wrapper">
                <textarea
                  name="message"
                  rows="1"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
