import React from "react";
import img1 from './assests/imgs/front.png';
import img2 from './assests/imgs/backend.png';
import img3 from './assests/imgs/db.png';
import img4 from './assests/imgs/host.png';
import img5 from './assests/imgs/testing.png';
export default function Stack(){

    return (

<section className="section" id="pricing">
        <div className="container text-center">
            <h6 className="section-title mb-6">Skill Set</h6>
            <div className="pricing-wrapper">
                <div className="pricing-card">
                    <div className="pricing-card-header">
                        <img className="pricing-card-icon" src={img1}
                            />
                    </div>
                    <div className="pricing-card-body">
                        <h6 className="pricing-card-title">Front-End</h6>
                        <div className="pricing-card-list">
                        
                            <p>HTML and CSS</p>
                            <p>JavaScript</p>
                            <p>Bootstrap</p>
                            <p>jQuery</p>
                            <p>Vue.js</p>
                            <p>React JS</p>
                            <p><i className="ti-close"></i></p>
                            <p><i className="ti-close"></i></p>
                        </div>
                    </div>
                </div>
                <div className="pricing-card">
                    <div className="pricing-card-header">
                        <img className="pricing-card-icon" src={img2}
                            />
                    </div>
                    <div className="pricing-card-body">
                        <h6 className="pricing-card-title">BackEnd</h6>
                        <div className="pricing-card-list">
                            <p>Laravel</p>
                            <p>Symfony</p>
                            <p>WordPress</p>
                            <p>Magento</p>
                            <p>Node JS</p>
                            <p>Yii2</p>
                            <p>PHP</p>
                            <p>API</p>
                        </div>
                    </div>
                </div>
                <div className="pricing-card">
                    <div className="pricing-card-header">
                        <img className="pricing-card-icon" src={img3}
                            />
                    </div>
                    <div className="pricing-card-body">
                        <h6 className="pricing-card-title">Database</h6>
                        <div className="pricing-card-list">
                            <p>MySQL</p>
                            <p>SQL Server</p>
                            <p>PostgreSQL</p>
                            <p>MariaDB</p>
                        </div>
                    </div>
                </div>
                <div className="pricing-card">
                    <div className="pricing-card-header">
                        <img className="pricing-card-icon" src={img4}
                            />
                    </div>
                    <div className="pricing-card-body">
                        <h6 className="pricing-card-title">Hosting</h6>
                        <div className="pricing-card-list">
                            <p>Amazon web services</p>
                            <p>Microsoft Azure</p>
                            <p>Pleask</p>
                        </div>
                    </div>
                </div>
                <div className="pricing-card">
                    <div className="pricing-card-header">
                        <img className="pricing-card-icon" src={img5}
                            />
                    </div>
                    <div className="pricing-card-body">
                        <h6 className="pricing-card-title">Testing</h6>
                        <div className="pricing-card-list">
                            <p>Cypress</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
