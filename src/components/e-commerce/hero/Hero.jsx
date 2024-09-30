import React from 'react';
import '@fortawesome/fontawesome-svg-core';
import '../CSS/EcommerceMaster.css';
import landing from '../assets/landing.gif';

export default function Hero() {
  return (
    <>
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVAL ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <i className="fa-solid fa-hands-clapping"></i>
                </div>
                <p>Collection</p>
                <p>For Everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <i className="fa-solid fa-angles-right"></i>
            </div>
        </div>
        <div className="hero-right">
            <img src={landing} alt=''/>
        </div>
    </div>
    </>
  )
}
