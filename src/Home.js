import "./styling/Home.css";
import React from "react";
import me from "./img/SelfTransparent.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen justify-center m-auto">
      <div className="h-full bg-primary rounded-[175px] w-screen">
        <div className="grid grid-cols-12 grid-rows-2">
          <img
            src={me}
            className="rounded-full col-span-12 sm:col-span-6 -mt-20 p-8 row-span-1"
            alt="Jessica Butler"
          />
          <div className="grid grid-rows-12 col-span-12 sm:col-span-6 m-5 p-5">
            <h2 className="text-4xl row-span-4 sm:row-span-2 text-center">
              Hi! I'm Jessica! 👋
            </h2>
            <p className="row-span-6">
              I'm a first generation high school graduate and college attendee.
              I've always been driven to find what I'm passionate about, and I
              found my passion for QA in 2013 at my first QA job.
              <br />
              <br />
              Since then, I've found a passion for writing code (specifically
              JavaScript) and really enjoy spending time on automation. I don't
              believe there's a replacement for manual QA, but I believe
              automated testing allows passionate testers to do more of what
              they love: test all the things!
            </p>
            <div className="place-self-center row-span-1">
              <button className="rounded-full btn btn-primary">
                <Link to="/about-me">More About Me</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
