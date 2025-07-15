import React from 'react'
import HeroImg from '../assets/Hero.png'
import './Home.css'
import WhatsappIcon from '../assets/Icons/Whatsapp.png'
import BackgroundHero from '../assets/Icons/background-hero.png'
import ArrowIcon from '../assets/Icons/arrow-icon.png'

function Home() {
 const handleCallNow = () => {
  const phoneNumber = "9710505280523"; 
  const message = "Hi, I would like to enquire about enrollment."; 
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
};
  return (
    <section id='home' className='hero'>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1>Bright Beginnings Start Here</h1>
          <p>Discover a safe, fun, and creative world for your little one at Future Steps</p>
          <div className="hero-buttons">
            <button onClick={()=>{
              document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
            }} className="btn primary-btn">Enrol Now <img className='arrow-icon-home' src={ArrowIcon} alt="arrow" /></button>
            <button onClick={handleCallNow} className="btn secondary-btn">WhatsApp<img src={WhatsappIcon} alt="Phone" /></button>
          </div>
        </div>
        <div className="hero-image">
          <img src={HeroImg} alt="Hero" />
        </div>
      </div>
    </section>
  )
}

export default Home
