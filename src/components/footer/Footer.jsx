import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-alt-green padding-20 d-flex align-center">
        <div className="logo c-white fw-bold mt-20 p-10">Fouad</div>
        <div className="icon mt-20 p-10">
          <ul>
            <li>
              <a href="face" className="facebook">
                <i className="fab fa-facebook-f c-blue fs-20 mt-15"></i>
              </a>
            </li>
            <li>
              <a href="whats" className="whatsapp">
                <i className="fa-brands fa-square-whatsapp c-green fs-20 mt-15"></i>
              </a>
            </li>
            <li>
              <a href="twit" className="twitter">
                <i className="fab fa-twitter c-alt-blue fs-20 mt-15"></i>
              </a>
            </li>
            <li>
              <a href="you" className="youtube">
                <i className="fab fa-youtube c-red fs-20 mt-15"></i>
              </a>
            </li>
          </ul>
        </div>
        <span className="c-white fs-13 fw-bold">
          Made With Love By Fouad All Rights Reserved
          <i className="fa-regular fa-copyright fs-13 ml-2"></i>
        </span>
      </footer>
    </>
  );
}
