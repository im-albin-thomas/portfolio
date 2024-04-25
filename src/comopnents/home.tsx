import React from 'react';
export default function Home(){

    return (
        <header id="home" className="header">
        <div className="overlay"></div>
        <div className="header-content container">
            <h1 className="header-title">
                {/*<span className="up">HI!</span>*/}
                <span className="down">I am </span>
                <span className="down">Albin Thomas</span>
            </h1>
            <p className="header-subtitle">FULL STACK DEVELOPER</p>
            <a href='https://www.linkedin.com/in/albin-thomas-142165155/' target="_blank">
            <button className="btn btn-primary">LinkedIn</button></a>
        </div>
    </header>
    )
}