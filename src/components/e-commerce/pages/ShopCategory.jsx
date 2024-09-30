import React, { useContext } from 'react';
import '../CSS/EcommerceMaster.css';
import { ShopContext } from '../context/ShopContext';
import Item from '../item/Item';


export default function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);

  return (
    <>
    <div className="shop-cat">
      <img src={props.banner} alt=''/>
      <div className="shopCat-indexSort">
        <p><span>Showing 1-12</span> Out Of 36 Products</p>
        <div className="shopCat-sort">
          Sort By <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
      <div className="shopCat-products">
        {all_product.map((item,i) => {
          if ( props.category === item.category ) {
            return <Item
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price}
            old_price={item.old_price}
            />
          }
          else {
            return null
          }
        })}
      </div>
      <div className="shopCat-loadMore">Explore More</div>
    </div>
    </>
  )
}
