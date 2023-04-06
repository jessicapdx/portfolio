import * as React from "react";
import "./styling/Portfolio.css";
import cypressProj from "./img/cypressproj.png";
import dictionaryApp from "./img/dictionaryapp.png";
import weatherApp from "./img/weatherapp.png";

export default function Portfolio() {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h1 className="">Portfolio</h1>
          <div className="">
            <p>
              I enjoy projects using JavaScript, including frontend development
              and API & Web testing. All projects listed below are available on
              my{" "}
              <a href="https://github.com/jessicapdx" className="font-bold">
                GitHub profile
              </a>
              , including the site you're on now (that I made from scratch using
              JS, React, Tailwind CSS and daisyUI).
              <br />
              See links below for the source code as well as a live hosted site
              using Netlify.
            </p>
          </div>
          <div className="">
            <div>
              <h2 className="">Development Projects</h2>
              <div className="">
                <a href="https://jb-shecodes-final-project.netlify.app/">
                  Weather App Live
                </a>
                <img
                  src={weatherApp}
                  alt="Screenshot of weather application"
                  className=""
                ></img>
                <a href="https://github.com/jessicapdx/react-weather-v2">
                  Source Code
                </a>
              </div>
              <div className="">
                <a href="https://jb-react-dictionary-app.netlify.app/">
                  Dictionary App Live
                </a>
                <br />
                <img
                  src={dictionaryApp}
                  alt="Dictionary application screenshot"
                  className=""
                ></img>
                <a href="https://github.com/jessicapdx/dictionary-project">
                  Source Code
                </a>
              </div>
            </div>
            <div>
              <h2 className="">QA Projects</h2>
              <div className="">
                <a href="https://github.com/jessicapdx/parabank-cypress-example">
                  Web Tests using
                  <br />
                  Cypress + TypeScript
                </a>
                <img
                  src={cypressProj}
                  alt="Screenshot of Cypress test execution"
                  className=""
                ></img>
                <a href="https://github.com/jessicapdx/parabank-cypress-example">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
