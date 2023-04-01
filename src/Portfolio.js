import "./styling/Portfolio.css";
import cypressProj from "./img/cypressproj.png";
import dictionaryApp from "./img/dictionaryapp.png";
import weatherApp from "./img/weatherapp.png";

export default function Portfolio() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Portfolio</h1>
          <div className="p-2 m-2 bg-white opacity-75 rounded-lg">
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
          <div className="grid grid-cols-2 font-bold">
            <div>
              <h2 className="text-xl">Development Projects</h2>
              <div className="p-2 bg-white opacity-75 m-2 rounded-lg">
                <a
                  href="https://jb-shecodes-final-project.netlify.app/"
                  alt="Link to live Weather application website"
                >
                  Weather App Live
                </a>
                <img
                  src={weatherApp}
                  alt="Screenshot of weather application"
                  className="p-3"
                ></img>
                <a
                  href="https://github.com/jessicapdx/react-weather-v2"
                  alt="Weather App built with React, JS, Bootstrap"
                >
                  Source Code
                </a>
              </div>
              <div className="p-2 bg-white opacity-75 m-2 rounded-lg">
                <a
                  href="https://jb-react-dictionary-app.netlify.app/"
                  alt="Link to live Dictionary app website"
                >
                  Dictionary App Live
                </a>
                <br />
                <img
                  src={dictionaryApp}
                  alt="Dictionary application screenshot"
                  className="p-5"
                ></img>
                <a href="https://github.com/jessicapdx/dictionary-project">
                  Source Code
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">QA Projects</h2>
              <div className="p-2 bg-white opacity-75 m-2 rounded-lg">
                <a
                  href="https://github.com/jessicapdx/parabank-cypress-example"
                  alt="Link to Cypress test source code"
                >
                  Web Tests using
                  <br />
                  Cypress + TypeScript
                </a>
                <img
                  src={cypressProj}
                  alt="Screenshot of Cypress test execution"
                  className="p-3"
                ></img>
                <a
                  href="https://github.com/jessicapdx/parabank-cypress-example"
                  alt="Front End test framework built using Cypress and TypeScript"
                >
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
