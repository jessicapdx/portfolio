import "./styling/Home.css";
import React from "react";
import me from "./img/SelfTransparent.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen justify-center m-auto">
      <div className="h-full bg-primary rounded-[175px] w-screen p-2">
        <div className="grid grid-cols-12 sm:grid-rows-1">
          <img
            src={me}
            className="rounded-full col-span-12 sm:col-span-6 -mt-20 p-8 row-span-1"
            alt="Jessica Butler"
          />
          <div className="grid grid-rows-12 col-span-12 sm:col-span-6 m-5 p-5">
            <h2 className="text-4xl row-span-4 sm:row-span-2 text-center p-2">
              Hi! I'm Jessica! 👋
            </h2>
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
            <div className="place-self-center row-span-1 p-3">
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
