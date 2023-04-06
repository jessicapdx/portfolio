import * as React from "react";
import "./styling/Contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="">
      <h1 className="">Contact Me</h1>
      <div className="">
        <div className="">
          <p className="">
            Feel free to connect with me on LinkedIn or email me at
            <br />
            <a href="mailto:hello@jessicabutler.io" className="">
              💌 hello@jessicabutler.io 💌
            </a>
          </p>
        </div>
        <div>
          <button className="">
            <Link to="https://www.linkedin.com/in/jessicabbutler/">
              LinkedIn
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
