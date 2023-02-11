import "./styling/Home.css";
import React from "react";
import me from "./img/SelfTransparent.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="content flex py-2">
        <div className="m-">
          <h2 className="absolute left-0 m-8 text-5xl">Hi! I'm Jessica! 👋</h2>
        </div>
      </div>
      <div className="">
        <div className="">
          <img
            src={me}
            className="w-1/2 m-2 rounded-full float-right"
            alt="Jessica Butler"
          />
        </div>
        <p className="m-8 mt-36">
          I'm a first generation high school graduate and college attendee. I've
          always been driven to find what I'm passionate about, and I found my
          passion for QA in 2013 at my first QA job.
          <br />
          <br />
          Since then, I've found a passion for writing code (specifically
          JavaScript) and really enjoy spending time on automation. I don't
          believe there's a replacement for manual QA, but I believe automated
          testing allows passionate testers to do more of what they love: test
          all the things!
        </p>
      </div>
      <div className="flex flex-col items-center my-15">
        <button className="btn btn-primary justify-center">
          <Link to="/about-me">More About Me</Link>
        </button>
      </div>
    </div>
  );
}
