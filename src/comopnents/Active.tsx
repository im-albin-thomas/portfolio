import React from "react";
import img1 from './assests/imgs/pencil-case.svg';
import img2 from './assests/imgs/responsive.svg';
import img3 from './assests/imgs/toolbox.svg';
import img4 from './assests/imgs/analytics.svg';
export default function Stack(){

    return (

        <section className="section" id="service">
        <div className="container text-center">
            <p className="section-subtitle">What I Do ?</p>
            <h6 className="section-title mb-6">Service</h6>
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src={img1}
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                                className="icon"/>
                            <h6 className="title">Adipisicing</h6>
                            <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam
                                molestias dolorem iste quod.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src={img2}
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                                className="icon"/>
                            <h6 className="title">Sapiente</h6>
                            <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam
                                molestias dolorem iste quod.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src={img3}
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                                className="icon"/>
                            <h6 className="title">Placeat</h6>
                            <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam
                                molestias dolorem iste quod.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src={img4}
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                                className="icon"/>
                            <h6 className="title">Iusto</h6>
                            <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam
                                molestias dolorem iste quod.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
