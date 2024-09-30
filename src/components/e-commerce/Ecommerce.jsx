import React from 'react';
import Navbar from './navbar/Navbar';
import { Outlet } from 'react-router-dom';
import ShopContextProvider from './context/ShopContext';

export default function Ecommerce() {
  return (
    <>
    <ShopContextProvider>
      <Navbar/>
      <Outlet/>
    </ShopContextProvider>
    </>
  )
}
