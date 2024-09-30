import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {

  useEffect(() => {

    // put active in the links
    const linkList = document.querySelectorAll(".links-list a");
    let prevActive = localStorage.getItem("activeId");
    if( prevActive ) document.getElementById(prevActive).classList.add('active');

    for (let i = 0; i < linkList.length; i++) {
      linkList[i].onclick = function() {
          for (let j = 0; j < linkList.length; j++) {
            linkList[j].classList.remove('active');
          }
          this.classList.add('active');
          localStorage.setItem( "activeId", this.id );
      }
  }


  }, []);

  return (
    <>
      <div className="sidebar bg-white p-20 p-relative">
        <h1 className="p-relative mt-0 txt-c">Fouad</h1>
        <ul className="links-list">
          <Link
            className="d-flex align-center fs-14 c-black rad-6 p-10" to="dashboard" id="dashboard">
            <i className="fa-solid fa-bars fa-fw"></i><span>Dashboard</span>
          </Link>
          <Link className="d-flex align-center fs-14 c-black rad-6 p-10" to="crud" id="crud">
            <i className="fa-solid fa-lightbulb"></i><span>CRUD Project</span>
          </Link>
          <Link className="d-flex align-center fs-14 c-black rad-6 p-10" to="e-commerce" id="e-commerce">
            <i className="fa-solid fa-cart-shopping"></i><span>E-Commerce</span>
          </Link>
          <Link
            className="d-flex align-center fs-14 c-black rad-6 p-10" to="settings" id="settings">
            <i className="fa-solid fa-gear fa-fw"></i><span>Settings</span>
          </Link>
          <Link className="d-flex align-center fs-14 c-black rad-6 p-10" to="profile" id="profile">
            <i className="fa-solid fa-user fa-fw"></i><span>Profile</span>
          </Link>
          <Link className="d-flex align-center fs-14 c-black rad-6 p-10" to="projects" id="projects">
            <i className="fa-solid fa-diagram-project fa-fw"></i><span>Projects</span>
          </Link>
          <Link className="d-flex align-center fs-14 c-black rad-6 p-10" to="courses" id="courses">
            <i className="fa-brands fa-discourse fa-fw"></i><span>Courses</span>
          </Link>
          <Link className="d-flex align-center fs-14 c-black rad-6 p-10" to="friends" id="friends">
            <i className="fa-solid fa-user-group fa-fw"></i><span>Friends</span>
          </Link>
          <Link className="d-flex align-center fs-14 c-black rad-6 p-10" to="files" id="files">
            <i className="fa-solid fa-file fa-fw"></i><span>Files</span>
          </Link>
          <Link className="d-flex align-center fs-14 c-black rad-6 p-10" to="plans" id="plans">
            <i className="fa-solid fa-paper-plane fa-fw"></i><span>Plans</span>
          </Link>
        </ul>
      </div>
    </>
  );
}
