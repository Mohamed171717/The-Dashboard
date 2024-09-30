import React, { createContext, useState } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext();


const getDefaultCart = () => {
  // Create an empty object to represent the cart
  return {};
};

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());

const addToCart = (itemId) => {
  setCartItems((prevCart) => ({
    // Spread operator to create a new object, preserving existing state
    ...prevCart,
    // Update the quantity for the specific itemId using bracket notation
    [itemId]: (prevCart[itemId] || 0) + 1, // Initialize to 0 if not present
  }));
};

const removeFromCart = (itemId) => {
  setCartItems((prevCart) => {
    const newCart = { ...prevCart }; // Create a new object

    // Decrement the quantity, ensuring it doesn't go below 0
    newCart[itemId] = Math.max(newCart[itemId] - 1, 0);

    // Optionally: Remove item from cart if quantity becomes 0
    if (newCart[itemId] === 0) {
      delete newCart[itemId];
    }
    return newCart;
  });
};

const getTotalCartAmount = () => {
  let totalAmount = 0;
  for( const item in cartItems  ) {
    if ( cartItems[item] > 0) {
      let itemInfo = all_product.find((product) => product.id === Number(item))
      totalAmount += itemInfo.new_price * cartItems[item]
    }
  }
  return totalAmount;
}

const getTotalCartItem = () => {
  let totalItem = 0;
  for( const item in cartItems  ) {
    if ( cartItems[item] > 0) {
      totalItem += cartItems[item];
    }
  }
  return totalItem;
}


  const contextValue = { getTotalCartAmount, getTotalCartItem, all_product, cartItems, addToCart, removeFromCart  };
  
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;


// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 0; i < all_product.length +1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
//   ;
// };


// const [cartItems, setCartItems] = useState(getDefaultCart());
  
// const addToCart = (itemId) => {
//   setCartItems((prev) => ( {...prev, [itemId]:prev[itemId] +1 }))
// }
// const removeFromCart = (itemId) => {
//   setCartItems((prev) => ( {...prev, [itemId]:prev[itemId] -1 }))
// }