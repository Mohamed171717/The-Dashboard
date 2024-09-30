import React from 'react';
import '../CSS/EcommerceMaster.css';
import data_product from '../assets/data';
import Item from '../item/Item';


export default function RelatedProducts() {
  return (
    <>
      <div className="related-products">
        <h2>RELATED PRODUCTS</h2>
        <hr />
        <div className="relatedProducts-item">
          {data_product.map((item, i) => {
            return <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price}
            old_price={item.old_price}
            />
          })}
        </div>
      </div>
    </>
  )
}
