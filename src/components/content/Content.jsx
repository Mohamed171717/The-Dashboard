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
import Computers from "../crud/crud-products/product-category/Computers";
import Laptops from "../crud/crud-products/product-category/Laptops";
import Tablets from "../crud/crud-products/product-category/Tablets";
import SmartPhone from "../crud/crud-products/product-category/SmartPhone";
import Accessories from "../crud/crud-products/product-category/Accessories";
import ProductDetails from "../crud/crud-products/product-handle/ProductDetails";
import AddProduct from "../crud/crud-products/product-handle/AddProduct";
import EditProduct from "../crud/crud-products/product-handle/EditProduct";

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
              <Route path="computers" element={<Computers />} />
              <Route path="laptops" element={<Laptops />} />
              <Route path="tablets" element={<Tablets />} />
              <Route path="smart-phone" element={<SmartPhone />} />
              <Route path="accessories" element={<Accessories />} />
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
            <Route path="e-commerce" element={<Ecommerce />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
