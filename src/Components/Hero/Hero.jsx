import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Pratik_photo from '../../assets/Pratik_photo.png'


const Hero = () => {


  const handleViewResume = () => {
    window.open("/Pratik-Thengane-Hefshine.pdf", "_blank");
  };




  return (
    <div id='home' className='hero'>

        <div class="circle-wrapper">
          <img src={Pratik_photo} alt="" />
        </div>
        <h1><span>I am Pratik Thengane,</span> fullstack developer from India.</h1>
        <p>I am a full-stack developer and freelancer with a strong foundation in Java, Spring Boot, React, and database-driven applications.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume" onClick={handleViewResume}>My resume</div>
        </div>
      
    </div>
  )
}

export default Hero
