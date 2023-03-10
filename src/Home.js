import "./styling/Home.css";
import React from "react";
import me from "./img/SelfTransparent.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full h-full bg-primary rounded-[175px] p-3">
      <div className="grid grid-cols-12">
        <img
          src={me}
          className="rounded-full float-top right-0 col-span-3 m-10"
          alt="Jessica Butler"
        />
        <div className="col-span-1"></div>
        <div className="grid grid-rows-5 col-span-7 m-12">
          <h2 className="text-5xl row-span-1 place-self-center">
            Hi! I'm Jessica! 👋
          </h2>
          <p className="row-span-3">
            I'm a first generation high school graduate and college attendee.
            I've always been driven to find what I'm passionate about, and I
            found my passion for QA in 2013 at my first QA job.
            <br />
            <br />
            Since then, I've found a passion for writing code (specifically
            JavaScript) and really enjoy spending time on automation. I don't
            believe there's a replacement for manual QA, but I believe automated
            testing allows passionate testers to do more of what they love: test
            all the things!
          </p>
          <div className="place-self-center row-span-1">
            <button className="rounded-full btn btn-primary">
              <Link to="/about-me">More About Me</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
