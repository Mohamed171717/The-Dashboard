import React from 'react';
import '../CSS/EcommerceMaster.css';
import { Link } from 'react-router-dom';

export default function Item(props) {
  return (
    <>
    <div className="item">
        <Link to={`/e-commerce/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt=''/></Link> 
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="price-new">${props.new_price}</div>
            <div className="price-old">${props.old_price}</div>
        </div>
    </div>
    </>
  )
}
