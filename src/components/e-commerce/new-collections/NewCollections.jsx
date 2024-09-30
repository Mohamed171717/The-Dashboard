import React from 'react';
import '../CSS/EcommerceMaster.css';
import newCollections from '../assets/new_collections';
import Item from '../item/Item';


export default function NewCollections() {
  return (
    <>
      <div className="new-collections">
        <h2>NEW COLLECTIONS</h2>
        <hr />
        <div className="collections">
          {newCollections.map((item, i) => {
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
