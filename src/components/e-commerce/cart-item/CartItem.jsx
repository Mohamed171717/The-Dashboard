import React, { useContext } from "react";
import "../CSS/EcommerceMaster.css";
import { ShopContext } from "../context/ShopContext";

export default function CartItem() {

  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  return (
    <>
      <div className="cart-item">
        <div className="cart-items">
          <table>
          <thead>
            <tr className="cart-item-format-main">
              <th>Products</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
          {all_product.map((e) => { 
            if (cartItems[e.id] > 0) {
              return (
                <tr key={e.id} className="cart-item-format" >
                      <td><img className="item-image" src={e.image} alt="" /></td>
                      <td>{e.name.slice(0, 15)}...</td>
                      <td>${e.new_price}</td>
                      <td><button className="cart-item-quantity">{cartItems[e.id]}</button></td>
                      <td>${e.new_price * cartItems[e.id]}</td>
                      <td onClick={() => {removeFromCart(e.id);}}><i className="fa-solid fa-xmark"></i></td>
                </tr>
              );
            }
            return null;
          })}
          </tbody>
          </table>
        </div>
        <div className="cart-total d-flex">
          <div className="cart-total-left">
            <h2>Cart Total</h2>
            <p>Subtotal<span>${getTotalCartAmount()}</span></p>
            <p>Shipping<span>Free</span></p>
            <p className="fw-bold fs-15">Total<span>${getTotalCartAmount()}</span></p>
          </div>
          <div className="cart-total-right">
            <p>If You Have A Promo Code, Enter It Here</p>
            <input type="text" placeholder="Promo Code"/>
            <button>Submit</button>
          </div>
        </div>
      </div>
      <button className="proceed">PROCEED TO CHECKOUT</button>
    </>
  );
}
