import React from 'react'
import Profile from '../images/profile.jpg'
import "./about.css"
 const About = () => {
    return (
        <section className="about-section">
            <h2>About</h2>
           <div className="photo">
                <img src={Profile} alt="profile"/>
           </div>
           <div className="about-text">
               <p>I am a web developer. I am a fresh graduate with decent knowledge of web developing techniques. I love structure, order, simple and clean design. Always keen on learning new technologies and update my work. Also, a pro Olympic athlete that has won multiple tournaments and travelled dozens of countries around the world.</p>
           </div>
        </section>
    )
}

export default About;