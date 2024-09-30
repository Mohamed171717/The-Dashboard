import React from "react";
import active1 from "../../images/active1.gif";
import active2 from "../../images/active2.gif";
import active3 from "../../images/active3.gif";
import active4 from "../../images/active4.gif";
import profile from "../../images/profile.jpg";

export default function Profile() {
  return (
    <>
      <div className="profile-page m-20">
        <div className="overview d-flex align-center bg-white rad-10">
          <div className="avatar-box txt-c p-20">
            <img className="mb-10 rad-half" src={profile} alt="" />
            <h4 className="mt-0">Fouad</h4>
            <p className="c-grey mt-10">Level 5</p>
            <div className="level p-relative rad-6 bg-eee">
              <span style={{ width: "70%" }}></span>
            </div>
            <div className="rating mt-10 mb-10">
              <i className="fa-solid fa-star fs-13 c-gold"></i>
              <i className="fa-solid fa-star fs-13 c-gold"></i>
              <i className="fa-solid fa-star fs-13 c-gold"></i>
              <i className="fa-solid fa-star fs-13 c-gold"></i>
              <i className="fa-solid fa-star fs-13 c-gold"></i>
            </div>
            <p className="c-grey m-0 fs-13">500 Rate</p>
          </div>
          <div className="info-box w-full">
            <div className="box between-flex p-20">
              <h3 className="fw-900 m-0 fs-15 w-full">General Information</h3>
              <div className="fs-13">
                <span>Full Name:</span>
                <span className="c-grey"> Mohamed Fouad</span>
              </div>
              <div className="fs-13">
                <span>Gender:</span>
                <span className="c-grey"> Male</span>
              </div>
              <div className="fs-13">
                <span>Country:</span>
                <span className="c-grey"> Egypt</span>
              </div>
              <div className="fs-13">
                {/* <label>
                  <input className="toggle-checkbox" type="checkbox" checked />
                  <div className="toggle-switch"></div>
                </label> */}
              </div>
            </div>
            <div className="box between-flex p-20">
              <h3 className="fw-900 m-0 fs-15 w-full">Personal Information</h3>
              <div className="fs-13">
                <span>Email:</span>
                <span className="c-grey"> Mohamed@.com</span>
              </div>
              <div className="fs-13">
                <span>Phone:</span>
                <span className="c-grey"> 0244678543</span>
              </div>
              <div className="fs-13">
                <span>Date Of Birth:</span>
                <span className="c-grey"> 23/5/1998</span>
              </div>
              <div className="fs-13">
                {/* <label>
                  <input className="toggle-checkbox" type="checkbox" />
                  <div className="toggle-switch"></div>
                </label> */}
              </div>
            </div>
            <div className="box between-flex p-20">
              <h3 className="fw-900 m-0 fs-15 w-full">Job Information</h3>
              <div className="fs-13">
                <span>Title:</span>
                <span className="c-grey"> Full Stack Dev</span>
              </div>
              <div className="fs-13">
                <span>Programming Lang:</span>
                <span className="c-grey"> Python</span>
              </div>
              <div className="fs-14">
                <span>Years Of Experience:</span>
                <span className="c-grey"> 4+</span>
              </div>
              <div className="fs-13">
                {/* <label>
                  <input className="toggle-checkbox" type="checkbox" defaultChecked />
                  <div className="toggle-switch"></div>
                </label> */}
              </div>
            </div>
            <div className="box between-flex p-20">
              <h3 className="fw-900 m-0 fs-15 w-full">Billing Information</h3>
              <div className="fs-13">
                <span>Payment Method:</span>
                <span className="c-grey"> Paypal</span>
              </div>
              <div className="fs-13">
                <span>Email:</span>
                <span className="c-grey"> Person.@email.com</span>
              </div>
              <div className="fs-13">
                <span>Subscription:</span>
                <span className="c-grey"> Monthly</span>
              </div>
              <div className="fs-13">
                {/* <label>
                  <input className="toggle-checkbox" type="checkbox" defaultChecked />
                  <div className="toggle-switch"></div>
                </label> */}
              </div>
            </div>
          </div>
        </div>
        <div className="other-data d-flex gap-20">
          <div className="skills-card p-20 bg-white mt-20 rad-10">
            <h4 className="mt-0 mb-10">My Skills</h4>
            <p className="mt-0 mb-20 c-grey fs-15">Complete Skills List</p>
            <ul className="m-0 txt-c-mobile">
              <li>
                <span>HTML</span>
                <span>Pug.js</span>
              </li>
              <li>
                <span>CSS</span>
                <span>SASS</span>
                <span>Stylus</span>
              </li>
              <li>
                <span>Javascript</span>
                <span>Typescript</span>
              </li>
              <li>
                <span>Vue.js</span>
                <span>React.js</span>
              </li>
              <li>
                <span>Jest</span>
                <span>Jasmine</span>
              </li>
              <li>
                <span>PHP</span>
                <span>Larval</span>
              </li>
              <li>
                <span>Python</span>
                <span>Django</span>
              </li>
            </ul>
          </div>
          <div className="activities p-20 bg-white mt-20 rad-10">
            <h4 className="mt-0 mb-10">My Activities</h4>
            <p className="mt-0 mb-20 c-grey fs-15">
              Latest Activities Done By User
            </p>
            <div className="activity d-flex align-center txt-c-mobile">
              <img src={active1} alt="" />
              <div className="info">
                <span className="d-block mb-10">Store</span>
                <span className="c-grey fs-13">
                  Bought The Mastering Python Course
                </span>
              </div>
              <div className="date">
                <span className="d-block mb-10 fs-13">10:30</span>
                <span className="c-grey fs-13">Yesterday</span>
              </div>
            </div>
            <div className="activity d-flex align-center txt-c-mobile">
              <img src={active2} alt="" />
              <div className="info">
                <span className="d-block mb-10">Badges</span>
                <span className="c-grey fs-13">
                  Unlocked The 10 Skills Badge
                </span>
              </div>
              <div className="date">
                <span className="d-block mb-10 fs-13">9:40</span>
                <span className="c-grey fs-13">Two Days Ago</span>
              </div>
            </div>
            <div className="activity d-flex align-center txt-c-mobile">
              <img src={active3} alt="" />
              <div className="info">
                <span className="d-block mb-10">Academy</span>
                <span className="c-grey fs-13">Got The PHP Certificate</span>
              </div>
              <div className="date">
                <span className="d-block mb-10 fs-13">6:30</span>
                <span className="c-grey fs-13">Week Ago</span>
              </div>
            </div>
            <div className="activity d-flex align-center txt-c-mobile">
              <img src={active4} alt="" />
              <div className="info">
                <span className="d-block mb-10">Store</span>
                <span className="c-grey fs-13">Bought Typescript Course</span>
              </div>
              <div className="date">
                <span className="d-block mb-10 fs-13">11:55</span>
                <span className="c-grey fs-13">Three Days Ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
