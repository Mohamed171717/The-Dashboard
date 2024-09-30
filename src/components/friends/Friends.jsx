import React from "react";
import friend1 from '../../images/friend1.png';
import friend2 from '../../images/friend2.jpg';
import friend3 from '../../images/friend3.png';
import friend4 from '../../images/friend4.png';
import friend5 from '../../images/friend5.png';
import friend6 from '../../images/friend6.png';
import friend7 from '../../images/friend7.png';
import friend8 from '../../images/friend8.png';


export default function Friends() {
  return (
    <>
      {/* <h2 className="p-relative">Friends</h2> */}
      <div className="friends-page d-grid m-20 gap-20">
        <div className="friend p-relative rad-6 bg-white p-20">
          <div className="contact">
            <i className="fa-solid fa-phone rad-6"></i>
            <i className="fa-regular fa-envelope rad-6 right"></i>
          </div>
          <div className="txt-c mt-20">
            <img className="rad-half mt-10 mb-10 w-100 h-100" src={friend1} alt=""/>
            <h5 className="m-0">Fouad</h5>
            <p className="c-grey mt-5 mb-0 fs-13">Javascript Developer</p>
          </div>
          <div className="icons fs-14 p-relative">
            <div className="mb-10">
              <i className="fa-solid fa-users fa-fw"></i>
              <span className="c-grey fs-13">900 Friend</span>
            </div>
            <div className="mb-10">
              <i className="fa-solid fa-sheet-plastic fa-fw"></i>
              <span className="c-grey fs-13">30 Project</span>
            </div>
            <div className="mb-10">
              <i className="fa-regular fa-newspaper fa-fw"></i>
              <span className="c-grey fs-13">13 Article</span>
            </div>
            <span className="vip f-bold c-orange">VIP</span>
          </div>
          <div className="info between-flex fs-13">
            <span className="c-grey">Joined 11/6/2015</span>
            <div className="around-flex">
              <a href="profile.html" className="pro btn-shape c-white bg-green">
                Profile
              </a>
              <a href="h" className="re btn-shape c-white bg-red">
                Remove
              </a>
            </div>
          </div>
        </div>
        <div className="friend p-relative rad-6 bg-white p-20">
          <div className="contact">
            <i className="fa-solid fa-phone rad-6"></i>
            <i className="fa-regular fa-envelope rad-6"></i>
          </div>
          <div className="txt-c mt-20">
            <img className="rad-half mt-10 mb-10 w-100 h-100" src={friend2} alt=""/>
            <h5 className="m-0">Ahmed</h5>
            <p className="c-grey mt-5 mb-0 fs-13">Full Stack Developer</p>
          </div>
          <div className="icons fs-14 p-relative">
            <div className="mb-10">
              <i className="fa-solid fa-users fa-fw"></i>
              <span className="c-grey fs-13">750 Friend</span>
            </div>
            <div className="mb-10">
              <i className="fa-solid fa-sheet-plastic fa-fw"></i>
              <span className="c-grey fs-13">33 Project</span>
            </div>
            <div className="mb-10">
              <i className="fa-regular fa-newspaper fa-fw"></i>
              <span className="c-grey fs-13">22 Article</span>
            </div>
          </div>
          <div className="info between-flex fs-13">
            <span className="c-grey">Joined 14/6/2016</span>
            <div className="around-flex">
              <a href="h" className="pro btn-shape c-white bg-green">
                Profile
              </a>
              <a href="h" className="re btn-shape c-white bg-red">
                Remove
              </a>
            </div>
          </div>
        </div>
        <div className="friend p-relative rad-6 bg-white p-20">
          <div className="contact">
            <i className="fa-solid fa-phone rad-6"></i>
            <i className="fa-regular fa-envelope rad-6"></i>
          </div>
          <div className="txt-c mt-20">
            <img className="rad-half mt-10 mb-10 w-100 h-100" src={friend3} alt=""/>
            <h5 className="m-0">Mohamed</h5>
            <p className="c-grey mt-5 mb-0 fs-13">HTML Developer</p>
          </div>
          <div className="icons fs-14 p-relative">
            <div className="mb-10">
              <i className="fa-solid fa-users fa-fw"></i>
              <span className="c-grey fs-13">500 Friend</span>
            </div>
            <div className="mb-10">
              <i className="fa-solid fa-sheet-plastic fa-fw"></i>
              <span className="c-grey fs-13">33 Project</span>
            </div>
            <div className="mb-10">
              <i className="fa-regular fa-newspaper fa-fw"></i>
              <span className="c-grey fs-13">75 Article</span>
            </div>
          </div>
          <div className="info between-flex fs-13">
            <span className="c-grey">Joined 26/8/2015</span>
            <div className="around-flex">
              <a href="h" className="pro btn-shape c-white bg-green">
                Profile
              </a>
              <a href="j" className="re btn-shape c-white bg-red">
                Remove
              </a>
            </div>
          </div>
        </div>
        <div className="friend p-relative rad-6 bg-white p-20">
          <div className="contact">
            <i className="fa-solid fa-phone rad-6"></i>
            <i className="fa-regular fa-envelope rad-6"></i>
          </div>
          <div className="txt-c mt-20">
            <img className="rad-half mt-10 mb-10 w-100 h-100" src={friend4} alt=""/>
            <h5 className="m-0">Kareem</h5>
            <p className="c-grey mt-5 mb-0 fs-13">Css Developer</p>
          </div>
          <div className="icons fs-14 p-relative">
            <div className="mb-10">
              <i className="fa-solid fa-users fa-fw"></i>
              <span className="c-grey fs-13">615 Friend</span>
            </div>
            <div className="mb-10">
              <i className="fa-solid fa-sheet-plastic fa-fw"></i>
              <span className="c-grey fs-13">47 Project</span>
            </div>
            <div className="mb-10">
              <i className="fa-regular fa-newspaper fa-fw"></i>
              <span className="c-grey fs-13">65 Article</span>
            </div>
          </div>
          <div className="info between-flex fs-13">
            <span className="c-grey">Joined 29/2/2015</span>
            <div className="around-flex">
              <a href="tg" className="pro btn-shape c-white bg-green">
                Profile
              </a>
              <a href="jy" className="re btn-shape c-white bg-red">
                Remove
              </a>
            </div>
          </div>
        </div>
        <div className="friend p-relative rad-6 bg-white p-20">
          <div className="contact">
            <i className="fa-solid fa-phone rad-6"></i>
            <i className="fa-regular fa-envelope rad-6"></i>
          </div>
          <div className="txt-c mt-20">
            <img className="rad-half mt-10 mb-10 w-100 h-100" src={friend5} alt=""/>
            <h5 className="m-0">Hamza</h5>
            <p className="c-grey mt-5 mb-0 fs-13">Python Developer</p>
          </div>
          <div className="icons fs-14 p-relative">
            <div className="mb-10">
              <i className="fa-solid fa-users fa-fw"></i>
              <span className="c-grey fs-13">1100 Friend</span>
            </div>
            <div className="mb-10">
              <i className="fa-solid fa-sheet-plastic fa-fw"></i>
              <span className="c-grey fs-13">80 Project</span>
            </div>
            <div className="mb-10">
              <i className="fa-regular fa-newspaper fa-fw"></i>
              <span className="c-grey fs-13">55 Article</span>
            </div>
            <span className="vip f-bold c-orange">VIP</span>
          </div>
          <div className="info between-flex fs-13">
            <span className="c-grey">Joined 1/3/2014</span>
            <div className="around-flex">
              <a href="k" className="pro btn-shape c-white bg-green">
                Profile
              </a>
              <a href="r" className="re btn-shape c-white bg-red">
                Remove
              </a>
            </div>
          </div>
        </div>
        <div className="friend p-relative rad-6 bg-white p-20">
          <div className="contact">
            <i className="fa-solid fa-phone rad-6"></i>
            <i className="fa-regular fa-envelope rad-6"></i>
          </div>
          <div className="txt-c mt-20">
            <img className="rad-half mt-10 mb-10 w-100 h-100" src={friend6} alt=""/>
            <h5 className="m-0">Faddy</h5>
            <p className="c-grey mt-5 mb-0 fs-13">PHP Developer</p>
          </div>
          <div className="icons fs-14 p-relative">
            <div className="mb-10">
              <i className="fa-solid fa-users fa-fw"></i>
              <span className="c-grey fs-13">1500 Friend</span>
            </div>
            <div className="mb-10">
              <i className="fa-solid fa-sheet-plastic fa-fw"></i>
              <span className="c-grey fs-13">66 Project</span>
            </div>
            <div className="mb-10">
              <i className="fa-regular fa-newspaper fa-fw"></i>
              <span className="c-grey fs-13">75 Article</span>
            </div>
          </div>
          <div className="info between-flex fs-13">
            <span className="c-grey">Joined 10/9/2015</span>
            <div className="around-flex">
              <a href="hj" className="pro btn-shape c-white bg-green">
                Profile
              </a>
              <a href="j" className="re btn-shape c-white bg-red">
                Remove
              </a>
            </div>
          </div>
        </div>
        <div className="friend p-relative rad-6 bg-white p-20">
          <div className="contact">
            <i className="fa-solid fa-phone rad-6"></i>
            <i className="fa-regular fa-envelope rad-6"></i>
          </div>
          <div className="txt-c mt-20">
            <img className="rad-half mt-10 mb-10 w-100 h-100" src={friend7} alt=""/>
            <h5 className="m-0">Tamer</h5>
            <p className="c-grey mt-5 mb-0 fs-13">Bootstrap Developer</p>
          </div>
          <div className="icons fs-14 p-relative">
            <div className="mb-10">
              <i className="fa-solid fa-users fa-fw"></i>
              <span className="c-grey fs-13">150 Friend</span>
            </div>
            <div className="mb-10">
              <i className="fa-solid fa-sheet-plastic fa-fw"></i>
              <span className="c-grey fs-13">6 Project</span>
            </div>
            <div className="mb-10">
              <i className="fa-regular fa-newspaper fa-fw"></i>
              <span className="c-grey fs-13">5 Article</span>
            </div>
          </div>
          <div className="info between-flex fs-13">
            <span className="c-grey">Joined 1/9/2015</span>
            <div className="around-flex">
              <a href="h" className="pro btn-shape c-white bg-green">
                Profile
              </a>
              <a href="k" className="re btn-shape c-white bg-red">
                Remove
              </a>
            </div>
          </div>
        </div>
        <div className="friend p-relative rad-6 bg-white p-20">
          <div className="contact">
            <i className="fa-solid fa-phone rad-6"></i>
            <i className="fa-regular fa-envelope rad-6"></i>
          </div>
          <div className="txt-c mt-20">
            <img className="rad-half mt-10 mb-10 w-100 h-100" src={friend8} alt=""/>
            <h5 className="m-0">Handy</h5>
            <p className="c-grey mt-5 mb-0 fs-13">React Developer</p>
          </div>
          <div className="icons fs-14 p-relative">
            <div className="mb-10">
              <i className="fa-solid fa-users fa-fw"></i>
              <span className="c-grey fs-13">1545 Friend</span>
            </div>
            <div className="mb-10">
              <i className="fa-solid fa-sheet-plastic fa-fw"></i>
              <span className="c-grey fs-13">24 Project</span>
            </div>
            <div className="mb-10">
              <i className="fa-regular fa-newspaper fa-fw"></i>
              <span className="c-grey fs-13">85 Article</span>
            </div>
          </div>
          <div className="info between-flex fs-13">
            <span className="c-grey">Joined 30/12/2015</span>
            <div className="around-flex">
              <a href="j" className="pro btn-shape c-white bg-green">
                Profile
              </a>
              <a href="e" className="re btn-shape c-white bg-red">
                Remove
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
