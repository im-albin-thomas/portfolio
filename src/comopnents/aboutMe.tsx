
import React from 'react';
import myImage from './assests/imgs/me.jpg'
export default function AboutMe(){
    return (
        <section className="section pt-0" id="about">
        <div className="container text-center">
            <div className="about">
                <div className="about-img-holder">
                    
                    <img src={myImage} className="about-img"></img>
                </div>
                <div className="about-caption">
                    <p className="section-subtitle">Who Am I ?</p>
                    <h2 className="section-title mb-3">About Me</h2>
                    <p>
                    I am Albin Thomas, a seasoned Full Stack Developer specializing in both Back-end and Front-end development. With over 5 years of experience in web development, I possess strong programming skills, complemented by solid management expertise and DevOps knowledge. My background equips me to handle a variety of projects from start to finish, ensuring high-quality results
                    </p>
                    <a href="https://drive.google.com/file/d/1DYMOcLPJs2AZXC7jWpnAYXQdGzy50kMP/view?usp=sharing" target="_blank"><button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button></a>
                </div>
            </div>
        </div>
        </section>
)
}