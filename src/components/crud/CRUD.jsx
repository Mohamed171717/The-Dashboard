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
      {/* <h2 className="p-relative">CRUD Project</h2> */}
      <div className="cruds-page p-20 m-20 rad-10 bg-white">
        <div className="row">
          <div className="col-12 bg-f0 rad-6 p-15 mb-15">
            <ul className="center-flex">
              <li>
                <Link
                  className="fs-6 fw-bolder c-black" id="all-products" to="all-products">
                  All Products
                </Link>
              </li>
              <li>
                <Link className="fs-6 fw-bolder c-black" to="clothes" id="clothes">
                  Clothes
                </Link>
              </li>
              <li>
                <Link className="fs-6 fw-bolder c-black" to="electronics" id="electronics">
                  Electronics
                </Link>
              </li>
              <li>
                <Link className="fs-6 fw-bolder c-black" to="furniture" id="furniture">
                  Furniture
                </Link>
              </li>
              <li>
                <Link className="fs-6 fw-bolder c-black" to="shoes" id="shoes">
                  Shoes
                </Link>
              </li>
              <li>
                <Link className="fs-6 fw-bolder c-black" to="miscellaneous" id="miscellaneous">
                  Miscellaneous
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
