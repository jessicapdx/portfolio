import "./styling/Contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Contact Me</h1>
          <p className="mb-5">
            Feel free to connect with me on LinkedIn or email me at
            <br />
            <a href="mailto:hello@jessicabutler.io">hello@jessicabutler.io</a>
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
