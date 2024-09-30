import React from "react";

export default function Settings() {
  return (
    <>
      <div className="settings-page m-20 d-grid gap-20">
        {/* start setting box */}
        <div className="p-20 bg-white rad-10">
          <h4 className="mt-0 mb-10">Site Control</h4>
          <p className="mt-0 mb-20 fs-15">
            Control The Website If There Is Maintenance
          </p>
          <div className="between-flex mb-15">
            <div className="con">
              <span>Website Control</span>
              <p className="c-grey mt-5 m-0 fs-13">
                Open/Close Website And Type The Reason
              </p>
            </div>
            <div>
              <label>
                <input className="toggle-checkbox" type="checkbox" defaultChecked />
                <div className="toggle-switch"></div>
              </label>
            </div>
          </div>
          <textarea
            className="close-message p-10 rad-6 d-block w-full"
            placeholder="Close Message Content"
          ></textarea>
        </div>
        {/* start setting box2 */}
        <div className="p-20 bg-white rad-10">
          <h4 className="mt-0 mb-10">General Information</h4>
          <p className="mt-0 mb-20 fs-15">General Info About Your Account</p>
          <div className="mb-15">
            <label className="fs-14 d-block mb-10" htmlFor="first">
              First Name
            </label>
            <input
              className="b-none bg-f1 p-10 d-block rad-6 w-full"
              type="text"
              id="first"
              placeholder="First Name"
            />
          </div>
          <div className="mb-15">
            <label className="fs-14 d-block mb-10" htmlFor="last">
              Last Name
            </label>
            <input
              className="b-none bg-f1 p-10 d-block rad-6 w-full"
              type="text"
              id="last"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-15">
            <label className="fs-14 d-block mb-10" htmlFor="email">
              Email
            </label>
            <input
              className="email b-none p-10 d-block rad-6 w-full"
              type="email"
              id="email"
              value="fo@nn.sa"
              disabled
            />
            <a className="ml-10 fs-13 c-green fw-bold" href="u">
              Change
            </a>
          </div>
        </div>
        {/* start setting box3 */}
        <div className="p-20 bg-white rad-10">
          <h4 className="mt-0 mb-10">Security Information</h4>
          <p className="mt-0 mb-20 fs-15">
            Security Info About Your Account
          </p>
          <div className="sec-box mb-15 between-flex">
            <div>
              <span>Password</span>
              <p className="c-grey mt-5 mb-0 fs-13">Last Update on 22/5/2021</p>
            </div>
            <a
              className="button bg-green c-white btn-shape fw-bold fs-13"
              href="yh"
            >
              Change
            </a>
          </div>
          <div className="sec-box mb-15 between-flex">
            <div>
              <span>Two-Factor Authentication</span>
              <p className="c-grey mt-5 mb-0 fs-13">Enable/Disable The Features</p>
            </div>
            <label>
              <input className="toggle-checkbox" type="checkbox" defaultChecked />
              <div className="toggle-switch"></div>
            </label>
          </div>
          <div className="sec-box between-flex">
            <div>
              <span>Devices</span>
              <p className="c-grey mt-5 mb-0 fs-13">Check The Login Devices List</p>
            </div>
            <a className="bg-ccc c-black btn-shape fw-bold fs-13" href="u">
              Change
            </a>
          </div>
        </div>
        {/* start setting box4 */}
        <div className="social-boxes p-20 bg-white rad-10">
          <h4 className="mt-0 mb-10">Social Information</h4>
          <p className="mt-0 mb-20 fs-15">Social Media Information</p>
          <div className="d-flex align-center mb-15">
            <i className="inst fa-brands fa-square-instagram center-flex"></i>
            <input
              className="w-full bg-ccc"
              type="text"
              placeholder="Instagram Username"
            />
          </div>
          <div className="d-flex align-center mb-15">
            <i className="face fa-brands fa-facebook center-flex"></i>
            <input
              className="w-full bg-ccc"
              type="text"
              placeholder="Facebook Username"
            />
          </div>
          <div className="d-flex align-center mb-15">
            <i className="whats fa-brands fa-square-whatsapp center-flex"></i>
            <input
              className="w-full bg-ccc"
              type="number"
              placeholder="Whatsapp number"
            />
          </div>
          <div className="d-flex align-center mb-15">
            <i className="twits fa-brands fa-twitter center-flex"></i>
            <input
              className="w-full bg-ccc"
              type="text"
              placeholder="Twitter Username"
            />
          </div>
        </div>
        {/* start settings box5 */}
        <div className="widget-control p-20 bg-white rad-10">
          <h4 className="mt-0 mb-10">Widget Control</h4>
          <p className="mt-0 mb-20 fs-15">Show/Hide Widget</p>
          <div className="control d-flex align-center mb-15">
            <input id="one" type="checkbox" defaultChecked />
            <label className="fs-14 c-grey" htmlFor="one">
              Quick Draft
            </label>
          </div>
          <div className="control d-flex align-center mb-15">
            <input id="two" type="checkbox" />
            <label className="fs-14 c-grey" htmlFor="two">
              Yearly Targets
            </label>
          </div>
          <div className="control d-flex align-center mb-15">
            <input id="three" type="checkbox" />
            <label className="fs-14 c-grey" htmlFor="three">
              Tickets Statistics
            </label>
          </div>
          <div className="control d-flex align-center mb-15">
            <input id="four" type="checkbox" defaultChecked />
            <label className="fs-14 c-grey" htmlFor="four">
              Latest News
            </label>
          </div>
          <div className="control d-flex align-center mb-15">
            <input id="five" type="checkbox" defaultChecked />
            <label className="fs-14 c-grey" htmlFor="five">
              Latest Tasks
            </label>
          </div>
          <div className="control d-flex align-center mb-15">
            <input id="six" type="checkbox" />
            <label className="fs-14 c-grey" htmlFor="six">
              Top Search Items
            </label>
          </div>
        </div>
        {/* start settings box6 */}
        <div className="backup-control p-20 bg-white rad-10">
          <h4 className="mt-0 mb-10">Backup Manager</h4>
          <p className="mt-0 mb-20 fs-15">
            Control Backup Time And Location
          </p>
          <div className="date d-flex align-center mb-15">
            <input id="daily" name="time" type="radio" defaultChecked />
            <label className="fs-14 c-grey" htmlFor="daily">
              Daily
            </label>
          </div>
          <div className="date d-flex align-center mb-15">
            <input id="weekly" name="time" type="radio" />
            <label className="fs-14 c-grey" htmlFor="weekly">
              Weekly
            </label>
          </div>
          <div className="date d-flex align-center mb-15">
            <input id="monthly" name="time" type="radio" />
            <label className="fs-14 c-grey" htmlFor="monthly">
              Monthly
            </label>
          </div>
          <div className="servers gap-10 d-flex align-center txt-c">
            <input id="server-one" name="server" type="radio" />
            <div className="server mb-15 rad-10 w-full">
              <label className="fs-14 d-block m-15 fw-bold c-grey" htmlFor="server-one">
                <i className="fa-solid fa-server d-block mb-10 c-grey"></i>
                Megaron
              </label>
            </div>
            <input id="server-two" name="server" type="radio" defaultChecked />
            <div className="server mb-15 rad-10 w-full">
              <label className="fs-14 d-block m-15 fw-bold c-grey" htmlFor="server-two">
                <i className="fa-solid fa-list d-block mb-10 c-grey"></i>
                Fouad
              </label>
            </div>
            <input id="server-three" name="server" type="radio" />
            <div className="server mb-15 rad-10 w-full">
              <label className="fs-14 d-block m-15 fw-bold c-grey" htmlFor="server-three">
                <i className="fa-solid fa-rectangle-list d-block mb-10 c-grey"></i>
                Sigma
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
