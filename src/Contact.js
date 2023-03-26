import "./styling/Contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="text-center justify-content-center grid grid-rows-2">
        <h1 className="mb-5 text-4xl font-bold">Contact Me</h1>
        <div className="bg-white opacity-75 rounded-lg p-3 ">
          <p className="mb-5">
            Feel free to connect with me on LinkedIn or email me at
            <br />
            <a href="mailto:hello@jessicabutler.io" className="font-bold">
              💌 hello@jessicabutler.io 💌
            </a>
          </p>
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
