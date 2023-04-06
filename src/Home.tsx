import "./styling/Home.css";
import * as React from "react";
import me from "./img/SelfTransparent.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <div className="">
          <img src={me} className="" alt="Jessica Butler" />
          <div className="">
            <h2 className="">Hi! I'm Jessica! 👋</h2>
            <p className="">
              I've been in the tech industry for 8 years, with a focus on
              Quality Assurance. I truly enjoy detective work and learning from
              the developers that I work with. I am <i>always</i> learning
              something new (even in my personal time, like the hours I invested
              to build this website by myself)!
              <br />
              <br />
              Before QA, I was in the medical field and studied Medical Office
              Administration. While working in the medical field, I was
              motivated by coworkers and friends to pursue an opportunity in
              tech, and that's when I discovered my passion for QA.
            </p>
            <div className="">
              <button className="">
                <Link to="/about-me">More About Me</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
