import React from "react";
import "../CSS/EcommerceMaster.css";
import exclusive from '../assets/exclusive_image1.png'

export default function Offers() {
  return (
    <>
      <div className="offers">
        <div className="offer-left">
          <img src={exclusive} alt=""/>
        </div>
        <div className="offer-right">
          <h2>Exclusive</h2>
          <h2>Offers For You</h2>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button>Check Now</button>
        </div>
      </div>
    </>
  );
}
