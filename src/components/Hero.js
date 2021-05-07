import React from 'react'
import './Hero.css';

function Hero(){
    return(
        <div className='hero-container'>
             <img className='JGPic' src = "images/jg.JPG" alt = "JG"/>
            
            <p1 className='hero-body'>
            <h1 className='hero-header'>
            Hi! I'm Josh
            <br></br> <br></br>
            </h1>
            I am a Computer Science student at the University of Michigan with interests in healthcare, startups, and tech for the common good. I enjoy understanding complex problems to create impactful solutions, and am seeking to leverage my interpersonal abilities, entrepreneurial mindset, and leadership skills to make a meaningful impact in the tech world. 
            
            <br></br> <br></br>

            In my free time I love to cook, enjoy books about startups and history, relieve stress with weightlifting, am learning to play guitar, and I am a diehard Philly sports fan.
     
            <br></br> <br></br>      
            fun fact: My top 2 Spotify artists are John Mayer and Kanye West

            <br></br> <br></br>
            Don't hesitate to reach out, I'd love to connect!

            <div className = 'link-container'>
                <a className = "link" href = "https://www.linkedin.com/in/jagoldstein" ><i class="fab fa-linkedin-in fa-2x"></i></a> 
                <a className = "link" href = "https://github.com/joshagoldstein" ><i class="fab fa-github fa-2x"></i></a>
                <a className = "link" href = "mailto:joshuagoldstein95@gmail.com" ><i class="fas fa-envelope fa-2x"></i></a>
            </div>
            </p1>
            
        </div>
    )
}

export default Hero