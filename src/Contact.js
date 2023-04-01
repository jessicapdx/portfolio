import "./styling/Contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="h-screen">
      <h1 className="mb-5 text-4xl font-bold m-3 text-center">Contact Me</h1>
      <div className="text-center grid grid-rows-2 bg-white opacity-75 rounded-lg p-3 m-3 justify-center h-100">
        <div className="">
          <p className="mb-5">
            Feel free to connect with me on LinkedIn or email me at
            <br />
            <a href="mailto:hello@jessicabutler.io" className="font-bold">
              💌 hello@jessicabutler.io 💌
            </a>
          </p>
        </div>
        <div>
          <button className="rounded-full btn btn-primary">
            <Link to="https://www.linkedin.com/in/jessicabbutler/">
              LinkedIn
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
