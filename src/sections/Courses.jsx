import React from 'react'
import './Courses.css'
import ArtsImage from '../assets/Courses/Arts.png'
import DrawingImage from '../assets/Courses/Drawing.png'
import EngagingImage from '../assets/Courses/Engaging.png'
import FunImage from '../assets/Courses/Fun.png'
import Handwriting from '../assets/Courses/Handwriting.png'
import Personality from '../assets/Courses/Personality.png'
import Sound from '../assets/Courses/Sound.png'
import Story from '../assets/Courses/Story.png'


function Courses() {
  const cardColors = ['#C8F5C8','#DCDCDC','#FFE3E3','#F7F4B5','#EEE0EC','#DCFFAE','#FFD798','#D5F0FF']
  const courses = [
    {
      title:'Handwriting Skills',
      img:Handwriting
    },
    {
      title:'Personality Development',
      img:Personality
    },
    {
      title:'Drawing & Coloring',
      img:DrawingImage
    },
    {
      title:'Storytelling',
      img:Story
    },
    {
      title:'Engaging Activities',
      img:EngagingImage
    },
    {
      title:'Fun Learning',
      img:FunImage
    },
    {
      title:'Arts & Crafts',
      img:ArtsImage
    },
    {
      title:'Sound Awareness',
      img:Sound
    },
  ]
  return (
   <section id='courses' className="courses-section">
    <h2 className="courses-title"><span className='highlight-letter-courses'>Ou</span>r Courses</h2>
    <p className='courses-subtitle'>We go beyond books to build skills for life. Our exciting learning areas include:</p>
    <div className="courses-grid">
      {courses.map((item,index)=>(
        <div key={index} className='course-card' style={{backgroundColor:cardColors[index]}} >
          <img src={item.img} alt={item.title} />
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
    <p className='courses-footer'>
      Every course is designed to enhance your child's motor skills, imagination, and social-emotional development.
    </p>
   </section>
  )
}

export default Courses
