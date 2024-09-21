import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function CRUD() {


  // put acted on the links 
  useEffect(() => {
    let linkList = document.querySelectorAll(".cruds-page ul a");
    let preActive = localStorage.getItem("actedId");
    if(preActive) document.getElementById(preActive).classList.add("acted");

    for( let i=0; i < linkList.length; i++) {
      linkList[i].onclick = ( function() {
        for( let j=0; j < linkList.length; j++) {
          linkList[j].classList.remove("acted");
        } 
        this.classList.add("acted");
        localStorage.setItem( "actedId", this.id );
      })
    }
  },[])



  return (
    <>
      <h2 className="p-relative">CRUD Project</h2>
      <div className="cruds-page p-20 m-20 rad-10 bg-white">
        <div className="row">
          <div className="col-12 bg-f0 rad-6 p-15 mb-15">
            <ul className="center-flex gap-10">
              <li>
                <Link
                  className="fs-6 fw-bolder c-black" id="all-products" to="all-products">
                  All Products
                </Link>
              </li>
              <li>
                <Link className="fs-6 fw-bolder c-black" to="computers" id="computers">
                  Computers
                </Link>
              </li>
              <li>
                <Link className="fs-6 fw-bolder c-black" to="laptops" id="laptops">
                  Laptops
                </Link>
              </li>
              <li>
                <Link className="fs-6 fw-bolder c-black" to="tablets" id="tablets">
                  Tablets
                </Link>
              </li>
              <li>
                <Link className="fs-6 fw-bolder c-black" to="smart-phone" id="smart-phone">
                  Smart Phone
                </Link>
              </li>
              <li>
                <Link className="fs-6 fw-bolder c-black" to="accessories" id="accessories">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 bg-f0 rad-6 p-15">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
