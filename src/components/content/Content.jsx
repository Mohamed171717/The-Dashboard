import React from "react";
import Error from "../Error";
import { Route, Routes } from "react-router-dom";
import profile from "../../images/profile.jpg";
import Dashboard from ".././dashboard/Dashboard";
import Courses from "../courses/Courses";
import Files from "../files/Files";
import Friends from "../friends/Friends";
import Plans from "../plans/Plans";
import Profile from "../profile/Profile";
import Projects from "../projects/Projects";
import Settings from "../settings/Settings";
import CRUD from "../crud/CRUD";
import Ecommerce from "../e-commerce/Ecommerce";
import AllProducts from "../crud/crud-products/product-category/AllProducts";
import Clothes from "../crud/crud-products/product-category/Clothes";
import Electronics from "../crud/crud-products/product-category/Electronics";
import Shoes from "../crud/crud-products/product-category/Shoes";
import Furniture from "../crud/crud-products/product-category/Furniture";
import Miscellaneous from "../crud/crud-products/product-category/Miscellaneous";
import ProductDetails from "../crud/crud-products/product-handle/ProductDetails";
import AddProduct from "../crud/crud-products/product-handle/AddProduct";
import EditProduct from "../crud/crud-products/product-handle/EditProduct";
import Shop from "../e-commerce/pages/Shop";
import ShopCategory from "../e-commerce/pages/ShopCategory";
import Product from "../e-commerce/pages/Product";
import Cart from "../e-commerce/pages/Cart";
import men_banner from "../e-commerce/assets/banner_mens.png";
import women_banner from "../e-commerce/assets/banner_women.png";
import kids_banner from "../e-commerce/assets/banner_kids.png";
import SignUp from "../e-commerce/pages/SignUp";



export default function Content() {
  return (
    <>
      <div className="content w-full">
        {/* start head */}
        <div className="head p-15 bg-white between-flex">
          <div className="search p-relative">
            <input id="search" className="p-10" type="search" placeholder="Search" />
          </div>
          <div className="icons d-flex align-center">
            <span className="notification p-relative">
              <i className="fa-solid fa-bell fa-lg"></i>
            </span>
            <img src={profile} alt="" />
          </div>
        </div>
        <Routes>
          <Route>
            <Route path="/" element={<Dashboard />} />
            <Route path="The-Dashboard" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="courses" element={<Courses />} />
            <Route path="files" element={<Files />} />
            <Route path="friends" element={<Friends />} />
            <Route path="plans" element={<Plans />} />
            <Route path="profile" element={<Profile />} />
            <Route path="projects" element={<Projects />} />
            <Route path="settings" element={<Settings />} />
            <Route path="crud" element={<CRUD />}>
              <Route path="/crud" element={<AllProducts />} />
              <Route path="all-products" element={<AllProducts />} />
              <Route path="clothes" element={<Clothes />} />
              <Route path="electronics" element={<Electronics />} />
              <Route path="shoes" element={<Shoes />} />
              <Route path="furniture" element={<Furniture />} />
              <Route path="miscellaneous" element={<Miscellaneous />} />
              <Route
                path="/crud/all-products/:productID"
                element={<ProductDetails />}
              />
              <Route
                path="/crud/all-products/add"
                element={<AddProduct/>}
              />
              <Route
                path="/crud/all-products/edit/:productID"
                element={<EditProduct/>}
              />
            </Route>
            <Route path="e-commerce" element={ <Ecommerce /> }>
              <Route path="/e-commerce" element={<Shop />}/>
              <Route path="shop" element={<Shop />}/>
              <Route path="men" element={<ShopCategory category="men" banner={men_banner} />}/>
              <Route path="woman" element={<ShopCategory category="women" banner={women_banner} />}/>
              <Route path="kids" element={<ShopCategory category="kid" banner={kids_banner} />}/>
              <Route path="product" element={<Product />} />
              <Route path="product/:productId" element={<Product />} />
              <Route path="cart" element={<Cart />}/>
              <Route path="signUp" element={<SignUp />}/>
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
