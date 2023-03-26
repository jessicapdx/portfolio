import "./styling/Portfolio.css";
import dictionaryApp from "./img/dictionaryapp.png";
import weatherApp from "./img/weatherapp.png";

export default function Portfolio() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Portfolio</h1>
          <div className="p-5">
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
          <div>
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
      </div>
    </div>
  );
}
