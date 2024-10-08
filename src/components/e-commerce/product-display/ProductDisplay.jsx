import React, { useContext } from 'react';
import '../CSS/EcommerceMaster.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../context/ShopContext';


export default function ProductDisplay(props) {
  const {product} = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <>
      <div className="product-display">
        <div className="product-display-left">
          <div className="productDisplay-img-list">
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
          </div>
          <div className="productDisplay-img">
          <img className='productDisplay-main-img' src={product.image} alt=''/>
          </div>
        </div>
        <div className="product-display-right">
          <h2>{product.name}</h2>
          <div className="productDisplay-right-stars">
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_dull_icon} alt=''/>
            <p>(122)</p>
          </div>
          <div className="productDisplay-right-prices">
            <div className="productDisplay-right-price-oldPrice">${product.old_price}</div>
            <div className="productDisplay-right-price-newPrice">${product.new_price}</div>
          </div>
          <div className="productDisplay-right-description">
            A lightweight, Usually Knitted, Pullover Shirt, 
            Cross Fitting & Around Neckline And Short Sleeves, Warn As Undershirt Or Outer Garment.
            By providing a convenient and secure online shopping experience, 
            e-commerce websites have become an essential tool for businesses to reach a global customer 
            base and drive sales.
          </div>
          <div className="productDisplay-right-size">
            <h2>Select Size</h2>
            <div className="productDisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
          {/* <p className="productDisplay-right-category"><span>Category:</span> Women, T-Shirt, Crop Top</p>
          <p className="productDisplay-right-category"><span>Tags:</span> Modern, Latest</p> */}
        </div>
      </div>
    </>
  )
}
