import "./styling/NavBar.css";
import * as React from "react";
import { Outlet, Link } from "react-router-dom";

// resources
import "./styling/NavBar.css";
import logo from "./img/TransparentLogo.png";

export default function NavBar() {
  return (
    <div>
      <nav>
        <div className="">
          <div className="">
            <Link to="home">
              <img
                src={logo}
                className=""
                alt="Jessica Butler, Software Test Engineer"
              />
            </Link>
          </div>
          <div className=" ">
            <ul className="">
              <li tabIndex={0}>
                <Link to="portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="about-me">About Me</Link>
              </li>
              <li>
                <Link to="contact-me">Contact Me</Link>
              </li>
              <li>
                <Link to="home">🏡</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
