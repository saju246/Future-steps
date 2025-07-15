import React, {useRef} from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import Why from './sections/Why'
import Services from './sections/Services'
import About from './sections/About'
import Programs from './sections/Programs'
import Courses from './sections/Courses'
import Admission from './sections/Admission'
import Contact from './sections/ContactUs'
import Footer from './components/Footer'

function App() {
    const sections = {
        home :useRef(null),
        why :useRef(null),
        about:useRef(null),
        services:useRef(null),
        programs:useRef(null),
        courses:useRef(null),
        admission:useRef(null),
        contact:useRef(null),
        footer:useRef(null),
    };

        const scrollToSection = (key) =>{
            sections[key]?.current?.scrollIntoView({behaviour:'smooth'})
        };
  return (
   <>

   <Navbar scrollToSection={scrollToSection}/> 
   <div className="page-content">
    <section ref={sections.home}>
        <Home/>
    </section>
    <section ref={sections.about}>
        <About/>
    </section>
    <section ref={sections.services}>
        <Services/>
    </section>
    <section ref={sections.why}>
        <Why/>
    </section>
    <section ref={sections.programs}>
        <Programs/>
    </section>
    <section ref={sections.courses}>
        <Courses/>
    </section>
    <section ref={sections.admission}>
        <Admission/>
    </section>
    <section ref={sections.contact}>
        <Contact/>
    </section>
    <section ref={sections.footer}>
        <Footer/>
    </section>
   </div>
   </>
  )
}

export default App
