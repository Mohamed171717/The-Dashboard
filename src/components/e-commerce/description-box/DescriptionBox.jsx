import React from 'react';
import '../CSS/EcommerceMaster.css';

export default function DescriptionBox() {
  return (
    <>
      <div className="description-box">
        <div className="description-box-navigator">
          <div className="description-box-nav-box">Description</div>
          <div className="description-box-nav-box fade">Reviews (122)</div>
        </div>
        <div className="description-box-description">
          <p>
            An e-commerce website is an online platform that allows businesses to sell products or services 
            directly to consumers via the internet. 
          </p>
          <p>
            It provides a virtual storefront where customers can browse, select, 
            and purchase items using electronic transactions.
          </p>
        </div>
      </div>
    </>
  )
}
