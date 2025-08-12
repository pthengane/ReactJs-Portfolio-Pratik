import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_about from '../../assets/profile_about.jpg'



const About = () => {
  return (
    <div id='about' className='about'>
    <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt=""></img>
    </div>
    <div className="about-sections">
        <div className="about-left">
            <img src={profile_about} alt=""></img>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a full-stack developer and freelancer with a strong foundation in Java, Spring Boot, React, and database-driven applications. I have had the opportunity to work with organizations such as HefShine Softwares, the Government of Maharashtra’s MRSAC, and VNIT Nagpur, contributing to impactful projects.</p>
                <p>My passion for full-stack development is reflected not only in my diverse project experience but also in the dedication, problem-solving skills, and collaborative spirit I bring to every endeavor.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"65%"}} /></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>SQL</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Spring Boot</p><hr style={{width:"65%"}} /></div>
                <div className="about-skill"><p>Git/Github</p><hr style={{width:"65%"}} /></div>
            </div>
        </div>
    </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h1>CERTIFIED</h1>
            <p>FULLSTACK DEVELOPER</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>3+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>3+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
    </div>
      
    </div>
  )
}

export default About
