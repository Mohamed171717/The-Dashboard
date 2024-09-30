import React from "react";
import team1 from "../../images/team1.jpg";
import team2 from "../../images/team2.png";
import team3 from "../../images/team3.jpg";
import team4 from "../../images/team4.png";
import team5 from "../../images/team5.png";
import team6 from "../../images/team6.jpg";

export default function Projects() {
  return (
    <>
      <div className="projects-page d-grid gap-20 m-20">
        <div className="project bg-white p-20 rad-6 p-relative">
          <span className="date fs-13 c-grey">20/3/2022</span>
          <h5 className="mt-10 fw-normal">Fouad Shop</h5>
          <p className="c-grey fs-14 mt-10 mb-10">
            Fouad Dashboard Project For Designing & Programming & Hosting
          </p>
          <div className="team">
            <a href="t">
              <img src={team2} alt="" />
            </a>
            <a href="t">
              <img src={team1} alt="" />
            </a>
            <a href="t">
              <img src={team5} alt="" />
            </a>
            <a href="t">
              <img src={team4} alt="" />
            </a>
            <a href="t">
              <img src={team6} alt="" />
            </a>
          </div>
          <div className="tech d-flex">
            <span className="fs-13 rad-6 bg-eee">Programming</span>
            <span className="fs-13 rad-6 bg-eee">Hosting</span>
            <span className="fs-13 rad-6 bg-eee">Design</span>
            <span className="fs-13 rad-6 bg-eee">Marketing</span>
          </div>
          <div className="info between-flex">
            <div className="prog">
              <span style={{ width: "80%" }} className="bg-blue"></span>
            </div>
            <div className="c-grey fs-13">
              <i className="fa-solid fa-dollar-sign"></i>
              4500
            </div>
          </div>
        </div>
        <div className="project bg-white p-20 rad-6 p-relative">
          <span className="date fs-13 c-grey">28/5/2022</span>
          <h5 className="mt-10 fw-normal">Academy Portal</h5>
          <p className="c-grey fs-14 mt-10 mb-10">Academy Portal Designing</p>
          <div className="team">
            <a href="t">
              <img src={team5} alt="" />
            </a>
            <a href="t">
              <img src={team4} alt="" />
            </a>
            <a href="t">
              <img src={team6} alt="" />
            </a>
          </div>
          <div className="tech d-flex">
            <span className="fs-13 rad-6 bg-eee">Design</span>
          </div>
          <div className="info between-flex">
            <div className="prog">
              <span style={{ width: "30%" }} className="bg-red"></span>
            </div>
            <div className="c-grey fs-13">
              <i className="fa-solid fa-dollar-sign"></i>
              1000
            </div>
          </div>
        </div>
        <div className="project bg-white p-20 rad-6 p-relative">
          <span className="date fs-13 c-grey">10/9/2022</span>
          <h5 className="mt-10 fw-normal">Chatting Application</h5>
          <p className="c-grey fs-14 mt-10 mb-10">
            Chatting Application Project Design
          </p>
          <div className="team">
            <a href="t">
              <img src={team6} alt="" />
            </a>
            <a href="t">
              <img src={team1} alt="" />
            </a>
            <a href="t">
              <img src={team4} alt="" />
            </a>
            <a href="t">
              <img src={team5} alt="" />
            </a>
          </div>
          <div className="tech d-flex">
            <span className="fs-13 rad-6 bg-eee">Programming</span>
            <span className="fs-13 rad-6 bg-eee">Hosting</span>
            <span className="fs-13 rad-6 bg-eee">Design</span>
          </div>
          <div className="info between-flex">
            <div className="prog">
              <span style={{ width: "90%" }} className="bg-green"></span>
            </div>
            <div className="c-grey fs-13">
              <i className="fa-solid fa-dollar-sign"></i>
              5500
            </div>
          </div>
        </div>
        <div className="project bg-white p-20 rad-6 p-relative">
          <span className="date fs-13 c-grey">15/7/2022</span>
          <h5 className="mt-10 fw-normal">Mark Application</h5>
          <p className="c-grey fs-14 mt-10 mb-10">
            Mark Application Project Design
          </p>
          <div className="team">
            <a href="t">
              <img src={team4} alt="" />
            </a>
            <a href="t">
              <img src={team1} alt="" />
            </a>
            <a href="t">
              <img src={team2} alt="" />
            </a>
            <a href="t">
              <img src={team6} alt="" />
            </a>
            <a href="t">
              <img src={team3} alt="" />
            </a>
          </div>
          <div className="tech d-flex">
            <span className="fs-13 rad-6 bg-eee">Programming</span>
            <span className="fs-13 rad-6 bg-eee">Design</span>
            <span className="fs-13 rad-6 bg-eee">Marketing</span>
          </div>
          <div className="info between-flex">
            <div className="prog">
              <span style={{ width: "80%" }} className="bg-blue"></span>
            </div>
            <div className="c-grey fs-13">
              <i className="fa-solid fa-dollar-sign"></i>
              3500
            </div>
          </div>
        </div>
        <div className="project bg-white p-20 rad-6 p-relative">
          <span className="date fs-13 c-grey">2/10/2022</span>
          <h5 className="mt-10 fw-normal">Ahmed Dashboard</h5>
          <p className="c-grey fs-14 mt-10 mb-10">
            Ahmed Dashboard Project Programming
          </p>
          <div className="team">
            <a href="t">
              <img src={team4} alt="" />
            </a>
            <a href="t">
              <img src={team6} alt="" />
            </a>
            <a href="t">
              <img src={team2} alt="" />
            </a>
          </div>
          <div className="tech d-flex">
            <span className="fs-13 rad-6 bg-eee">Programming</span>
          </div>
          <div className="info between-flex">
            <div className="prog">
              <span style={{ width: "40%" }} className="bg-red"></span>
            </div>
            <div className="c-grey fs-13">
              <i className="fa-solid fa-dollar-sign"></i>
              500
            </div>
          </div>
        </div>
        <div className="project bg-white p-20 rad-6 p-relative">
          <span className="date fs-13 c-grey">06/3/2022</span>
          <h5 className="mt-10 fw-normal">Mohamed Portal</h5>
          <p className="c-grey fs-14 mt-10 mb-10">
            Mohamed Portal Project For Designing & Programming
          </p>
          <div className="team">
            <a href="t">
              <img src={team2} alt="" />
            </a>
            <a href="t">
              <img src={team1} alt="" />
            </a>
            <a href="t">
              <img src={team4} alt="" />
            </a>
            <a href="t">
              <img src={team6} alt="" />
            </a>
          </div>
          <div className="tech d-flex">
            <span className="fs-13 rad-6 bg-eee">Programming</span>
            <span className="fs-13 rad-6 bg-eee">Design</span>
            <span className="fs-13 rad-6 bg-eee">Marketing</span>
          </div>
          <div className="info between-flex">
            <div className="prog">
              <span style={{ width: "95%" }} className="bg-green"></span>
            </div>
            <div className="c-grey fs-13">
              <i className="fa-solid fa-dollar-sign"></i>
              6000
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
