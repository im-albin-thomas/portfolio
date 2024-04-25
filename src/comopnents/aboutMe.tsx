
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
                    I am Albin Thomas. A Full Stack Developer having specialization in Back end and Front end development. I have 4+ years of experience in Web Development having strong Programming Skills!
                    </p>
                    <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
                </div>
            </div>
        </div>
        </section>
)
}