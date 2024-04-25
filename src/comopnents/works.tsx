import React from 'react';
import img1 from './assests/imgs/logo.svg';
import img2 from './assests/imgs/cmp5.jpg';
import img3 from './assests/imgs/eco.jpg';
import img4 from './assests/imgs/live.png';
import img5 from './assests/imgs/sactin.png';
import img6 from './assests/imgs/prezenty.png';

export default function Works(){

    return (

<section className="section" id="testmonial">
        <div className="container text-center">
            <h6 className="section-title mb-6">Project Experience</h6>
            <div className="row">
                <div className="col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src={img1} className="testimonial-card-img"
                                />
                        </div>
                        <div className="testimonial-card-body">
                            <p className="testimonial-card-subtitle">Claims Family collaborates with reputable legal professionals and claims managers. You can submit a claim without paying upfront. If your claim is approved, a fee is taken from your compensation. The exact rate will be specified when you submit your claim.</p>
                            <a href='https://claimsfamily.co.uk/'><h6 className="testimonial-card-title">Claims Family</h6></a>
                            <h6 className='testimonial-card-title'>Role: BackEnd Developer</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src={img2} className="testimonial-card-img"
                                />
                        </div>
                        <div className="testimonial-card-body">
                            <p className="testimonial-card-subtitle"> This CRM system handles your tax needs while delivering accurate and straightforward information through advanced software and technology. It simplifies tax management, offering innovative solutions to keep you informed and on track with your financial requirements</p>
                            <a href='#'><h6 className="testimonial-card-title">Clear Start</h6></a>
                            <h6 className='testimonial-card-title'>Role: BackEnd Developer</h6>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src={img3} className="testimonial-card-img"
                                />
                        </div>
                        <div className="testimonial-card-body">
                            <p className="testimonial-card-subtitle">Ecogreen is a comprehensive ERP software designed to manage all aspects of a pharmacy in a retail chain, helping you meet customer needs and run your business more efficiently</p>
                            <a href='https://buy.csquare.in/'><h6 className="testimonial-card-title">Eco Green</h6></a>
                            <h6 className='testimonial-card-title'>Role: BackEnd Developer</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src={img4} className="testimonial-card-img"
                                />
                        </div>
                        <div className="testimonial-card-body">
                            <p className="testimonial-card-subtitle">Liveconnect is an app that helps retailers and distributors work together more efficiently by allowing retailers to place orders with distributors digitally.</p>
                            <a href='https://csquare.in/#/products/liveconnect'><h6 className="testimonial-card-title">Live Connect</h6></a>
                            <h6 className='testimonial-card-title'>Role: Full Stack Developer</h6>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src={img5} className="testimonial-card-img"
                                />
                        </div>
                        <div className="testimonial-card-body">
                            <p className="testimonial-card-subtitle">SACTIN is a web-based solution for all types of educational institutions, allowing users to access information anytime, anywhere through a web browser. Developed in collaboration with schools, SACTIN is customizable to meet varying administrative processes and educational models.</p>
                            <a href='https://sactin.com/erp.html'><h6 className="testimonial-card-title">Sactin ERP</h6></a>
                            <h6 className='testimonial-card-title'>Role: Full Stack Developer</h6>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src={img6} className="testimonial-card-img"
                                />
                        </div>
                        <div className="testimonial-card-body">
                            <p className="testimonial-card-subtitle">preZenty is India's first online gift registry, revolutionizing gifting. It lets you create events, send invites, and receive gifts from friends and family via your computer or smartphone. Operating in 25 categories, preZenty covers hospitality, retail, health, fashion, and food.</p>
                            <a href='https://play.google.com/store/apps/details?id=com.cocoalabs.event_app&hl=en_GB&gl=US'><h6 className="testimonial-card-title">preZenty</h6></a>
                            <h6 className='testimonial-card-title'>Role: Full Stack Developer </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 

    )
}