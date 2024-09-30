import React from "react";

import profile from "../../images/profile.jpg";
import cover from "../../images/cover.gif";
import news1 from "../../images/news1.jpg";
import news2 from "../../images/news2.jpg";
import news3 from "../../images/news3.jpg";
import news4 from "../../images/news4.jpg";

import team1 from "../../images/team1.jpg";
import team2 from "../../images/team2.png";
import team3 from "../../images/team3.jpg";
import team4 from "../../images/team4.png";
import team5 from "../../images/team5.png";
import team6 from "../../images/team6.jpg";

export default function Dashboard() {
  return (
    <>
      {/* start dashboard */}
      <div className="wrapper d-grid gap-20 mt-20 mb-20">
        {/* <!-- start welcome --> */}
        <div className="welcome bg-white rad-10 txt-c-mobile block-mobile">
          <div className="intro d-flex space-between bg-eee p-relative">
            <img className="cover rad-10" src={cover} alt="" />
            <img className="avatar" src={profile} alt="" />
          </div>
          <div className="body d-flex txt-c p-20 mt-20 mb-20 block-mobile">
            <div>
              Mohamed Fouad
              <span className="d-block fs-14 mt-10 c-grey">Web Developer</span>
            </div>
            <div>
              50 <span className="d-block fs-14 mt-10 c-grey">Projects</span>
            </div>
            <div>
              $3000 <span className="d-block fs-14 mt-10 c-grey">Earned</span>
            </div>
          </div>
          <a
            href="profile.html"
            className="visit d-block fs-14 btn-shape bg-green c-white w-fit"
          >
            Profile
          </a>
        </div>
        {/* <!-- start draft --> */}
        <div className="quick-draft p-20 bg-white rad-10">
          <h4 className="mt-0 mb-10">Quick Draft</h4>
          <p className="mt-0 mb-20 c-grey fs-15">Write A Draft To Your Ideas</p>
          <form id="draft">
            <input
              className="d-block mb-20 w-full p-10 b-none bg-eee rad-6"
              type="text"
              placeholder="Title"
            />
            <textarea
              className="d-block mb-20 w-full p-10 b-none bg-eee rad-6"
              placeholder="Your Thought"
            ></textarea>
            <input
              className="save d-block fs-14 bg-green c-white b-none w-fit btn-shape"
              type="submit"
              value="Save"
            />
          </form>
        </div>
        {/* <!-- start targets --> */}
        <div className="targets p-20 bg-white rad-10">
          <h4 className="mt-0 mb-10 ">Targets</h4>
          <p className="mt-0 mb-20 c-grey fs-15">Your Targets In The Year</p>
          <div className="target-row mb-20 green center-flex ">
            <div className="icons center-flex">
              <i className="fa-solid fa-dollar-sign fa-lg c-green"></i>
            </div>
            <div className="details">
              <span className="fs-14 c-grey">Money</span>
              <span className="d-block mt-5 mb-10 fw-bold">$10.000</span>
              <div className="progress p-relative">
                <span className="green bg-green" style={{ width: "70%" }}>
                  <span className="bg-green">70%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="target-row mb-20 orange center-flex ">
            <div className="icons center-flex">
              <i className="fa-solid fa-bars-progress fa-lg c-orange"></i>
            </div>
            <div className="details">
              <span className="fs-14 c-grey">Projects</span>
              <span className="d-block mt-5 mb-10 fw-bold">30</span>
              <div className="progress p-relative">
                <span className="orange bg-orange" style={{ width: "50%" }}>
                  <span className="bg-orange">50%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="target-row mb-20 blue center-flex ">
            <div className="icons center-flex">
              <i className="fa-solid fa-people-group fa-lg c-blue"></i>
            </div>
            <div className="details">
              <span className="fs-14 c-grey">Team</span>
              <span className="d-block mt-5 mb-10 fw-bold">6</span>
              <div className="progress p-relative">
                <span className="blue bg-blue" style={{ width: "90%" }}>
                  <span className="bg-blue">90%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- start tickets --> */}
        <div className="tickets p-20 bg-white rad-10">
          <h4 className="mt-0 mb-10">Tickets Status</h4>
          <p className="c-grey fs-15 mt-0 mb-20">
            Everything About Support Tickets{" "}
          </p>
          <div className="d-flex txt-c gap-20 f-wrap">
            <div className="box green p-20 fs-14 rad-10 c-grey ">
              <i className="fa-solid fa-layer-group fa-2x mb-10 c-green"></i>
              <span className="d-block c-black fs-25 fw-bold mb-5">2500</span>
              Total
            </div>
            <div className="box red p-20 fs-14 rad-10 c-grey">
              <i className="fa-solid fa-spinner fa-2x mb-10 c-red"></i>
              <span className="d-block c-black fs-25 fw-bold mb-5">500</span>
              Pending
            </div>
            <div className="box blue p-20 fs-14 rad-10 c-grey">
              <i className="fa-solid fa-store-slash fa-2x mb-10 c-blue"></i>
              <span className="d-block c-black fs-25 fw-bold mb-5">1900</span>
              Closed
            </div>
            <div className="box orange p-20 fs-14 rad-10 c-grey">
              <i className="fa-solid fa-trash fa-2x mb-10 c-orange "></i>
              <span className="d-block c-black fs-25 fw-bold mb-5">100</span>
              Deleted
            </div>
          </div>
        </div>
        {/* <!-- start latest news --> */}
        <div className="latest-news p-20 bg-white rad-10 txt-c-mobile">
          <h4 className="mt-0 mb-20">Latest News</h4>
          <div className="news-row d-flex align-center">
            <img src={news1} alt="" />
            <div className="info">
              <h4>Created SASS Section</h4>
              <p className="m-0 fs-13 c-grey">New SASS Examples & Tutorials</p>
            </div>
            <div className="label fs-13 bg-eee btn-shape">3 Days Ago</div>
          </div>
          <div className="news-row d-flex align-center">
            <img src={news2} alt="" />
            <div className="info">
              <h4>Changed The Design</h4>
              <p className="m-0 fs-13 c-grey">A Brand New Website Design</p>
            </div>
            <div className="label fs-13 bg-eee btn-shape">5 Days Ago</div>
          </div>
          <div className="news-row d-flex align-center">
            <img src={news3} alt="" />
            <div className="info">
              <h4>Team Increased</h4>
              <p className="m-0 fs-13 c-grey">3 Developers Join The Team</p>
            </div>
            <div className="fs-13 bg-eee btn-shape">8 Days Ago</div>
          </div>
          <div className="news-row d-flex align-center">
            <img src={news4} alt="" />
            <div className="info">
              <h4>Add Payment Gateway</h4>
              <p className="m-0 fs-13 c-grey">
                Many New Payment Gateways Added
              </p>
            </div>
            <div className=" fs-13 bg-eee btn-shape label">10 Days Ago</div>
          </div>
        </div>
        {/* <!-- start tasks --> */}
        <div className="tasks p-20 bg-white rad-10">
          <h4 className="mt-0 mb-20">Latest Tasks</h4>
          <div className="task-row between-flex">
            <div className="info">
              <h4 className="mt-0 mb-5 fs-15">Record One New Video</h4>
              <p className="m-0 c-grey fs-13">Record Python Create Projects</p>
            </div>
            <i className="fa-solid fa-check mr-15 true"></i>
            <i className="fa-solid fa-trash-can delete"></i>
          </div>
          <div className="task-row between-flex">
            <div className="info">
              <h4 className="mt-0 mb-5 fs-15">Write Article</h4>
              <p className="m-0 c-grey fs-13">
                Write Low Level VS High Level Lang
              </p>
            </div>
            <i className="fa-solid fa-check mr-15 true c-green"></i>
            <i className="fa-solid fa-trash-can delete "></i>
          </div>
          <div className="task-row between-flex done">
            <div className="info">
              <h4 className="mt-0 mb-5 fs-15">Finish Projects</h4>
              <p className="m-0 c-grey fs-13">
                Publish Academy Programming Projects
              </p>
            </div>
            <i className="fa-solid fa-check mr-15 true"></i>
            <i className="fa-solid fa-trash-can delete"></i>
          </div>
          <div className="task-row between-flex">
            <div className="info">
              <h4 className="mt-0 mb-5 fs-15">Attend Meetings</h4>
              <p className="m-0 c-grey fs-13">
                Attend The Projects Analysis Meetings
              </p>
            </div>
            <i className="fa-solid fa-check mr-15 true c-green"></i>
            <i className="fa-solid fa-trash-can delete"></i>
          </div>
          <div className="task-row between-flex done">
            <div className="info">
              <h4 className="mt-0 mb-5 fs-15">Finish Lessons</h4>
              <p className="m-0 c-grey fs-13">Record Python Create Projects</p>
            </div>
            <i className="fa-solid fa-check mr-15 true"></i>
            <i className="fa-solid fa-trash-can delete"></i>
          </div>
          <div className="task-row between-flex">
            <div className="info">
              <h4 className="mt-0 mb-5 fs-15">Learn HTML & CSS</h4>
              <p className="m-0 c-grey fs-13">Lessons For Learn HTML % CSS</p>
            </div>
            <i className="fa-solid fa-check mr-15 true"></i>
            <i className="fa-solid fa-trash-can delete"></i>
          </div>
        </div>
        {/* <!-- start reminder --> */}
        <div className="reminders p-20 bg-white rad-10 p-relative">
          <h4 className="mt-0 mb-25">Reminders</h4>
          <ul className="m-0">
            <li className="d-flex align-center mt-15">
              <span className="key d-block bg-green rad-half mr-15"></span>
              <div className="pl-15 green">
                <p className="fs-14 fw-bold mt-0 mb-5">Check My Projects</p>
                <span className="c-grey fs-13">15/6/2023 - 07.00am</span>
              </div>
            </li>
            <li className="d-flex align-center mt-15">
              <span className="key d-block bg-blue rad-half mr-15"></span>
              <div className="pl-15 blue">
                <p className="fs-14 fw-bold mt-0 mb-5">Call All My Clients</p>
                <span className="c-grey fs-13">20/5/2023 - 11.00am</span>
              </div>
            </li>
            <li className="d-flex align-center mt-15">
              <span className="key d-block bg-red rad-half mr-15"></span>
              <div className="pl-15 red">
                <p className="fs-14 fw-bold mt-0 mb-5">Check My Tasks List</p>
                <span className="c-grey fs-13">5/5/2023 - 16.00pm</span>
              </div>
            </li>
            <li className="d-flex align-center mt-15">
              <span className="key d-block bg-orange rad-half mr-15"></span>
              <div className="pl-15 orange">
                <p className="fs-14 fw-bold mt-0 mb-5">Finish Development</p>
                <span className="c-grey fs-13">25/5/2023 - 09.00am</span>
              </div>
            </li>
          </ul>
        </div>
        {/* <!-- start social --> */}
        <div className="social-media p-20 bg-white rad-10 p-relative">
          <h4 className="mt-0 mb-25">Social Media Stats</h4>
          <div className="box facebook p-15 between-flex mb-15 p-relative">
            <i className="fa-brands fa-facebook fa-2x c-white center-flex h-full"></i>
            <span className="fs-13 fw-bold">90K Likes</span>
            <a className="btn-shape fs-13 c-white fw-bold" href="like">
              Like
            </a>
          </div>
          <div className="box twitter p-15 between-flex mb-15 p-relative">
            <i className="fa-brands fa-twitter fa-2x c-white center-flex h-full"></i>
            <span className="fs-13 fw-bold">150K Followers</span>
            <a className="btn-shape fs-13 c-white fw-bold" href="follow">
              Follow
            </a>
          </div>
          <div className="box youtube p-15 between-flex mb-15 p-relative">
            <i className="fa-brands fa-youtube fa-2x c-white center-flex h-full"></i>
            <span className="fs-13 fw-bold">1M Subs</span>
            <a className="btn-shape fs-13 c-white fw-bold" href="sub">
              Subscribe
            </a>
          </div>
          <div className="box instagram p-15 between-flex mb-15 p-relative">
            <i className="fa-brands fa-instagram fa-2x c-white center-flex h-full"></i>
            <span className="fs-13 fw-bold">50K Followers</span>
            <a className="btn-shape fs-13 c-white fw-bold" href="follow">
              Follow
            </a>
          </div>
        </div>
      </div>
      {/* start projects */}
      <div className="projects p-20 m-20 rad-10 bg-white">
        <h4 className="mt-0 mb-20">Projects</h4>
        <div className="responsive-table">
          <table className="fs-13 w-full">
            <thead>
              <tr className="fs-15">
                <td>Name</td>
                <td>Finish Date</td>
                <td>Client</td>
                <td>Price</td>
                <td>Team</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ministry Wikipedia</td>
                <td>5 may 2022</td>
                <td>Ministry</td>
                <td>$4000</td>
                <td>
                  <img src={team1} alt="" />
                  <img src={team2} alt="" />
                  <img src={team3} alt="" />
                </td>
                <td className="bg-orange txt-c">
                  <span className="label c-white">Pending</span>
                </td>
              </tr>
              <tr>
                <td>Mark Website</td>
                <td>10 may 2022</td>
                <td>Mark</td>
                <td>$5500</td>
                <td>
                  <img src={team1} alt="" />
                  <img src={team2} alt="" />
                  <img src={team3} alt="" />
                  <img src={team4} alt="" />
                </td>
                <td className="bg-green txt-c">
                  <span className="label c-white">Completed</span>
                </td>
              </tr>
              <tr>
                <td>Arena Application</td>
                <td>15 may 2022</td>
                <td>Arena Company</td>
                <td>$3600</td>
                <td>
                  <img src={team1} alt="" />
                  <img src={team2} alt="" />
                </td>
                <td className="bg-red txt-c">
                  <span className="label c-white">Rejected</span>
                </td>
              </tr>
              <tr>
                <td>Max Secure System</td>
                <td>25 may 2022</td>
                <td>Max</td>
                <td>$1500</td>
                <td>
                  <img src={team3} alt="" />
                  <img src={team4} alt="" />
                  <img src={team1} alt="" />
                  <img src={team5} alt="" />
                  <img src={team6} alt="" />
                </td>
                <td className="bg-green txt-c">
                  <span className="label c-white">Completed</span>
                </td>
              </tr>
              <tr>
                <td>Fouad Shop</td>
                <td>25 sep 2022</td>
                <td>Fouad</td>
                <td>$4500</td>
                <td>
                  <img src={team6} alt="" />
                  <img src={team4} alt="" />
                  <img src={team1} alt="" />
                  <img src={team5} alt="" />
                </td>
                <td className="bg-blue txt-c">
                  <span className="label c-white">In Progress</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
