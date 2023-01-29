import "./styling/Portfolio.css";
import myPic from "./img/SelfTransparent.png";

export default function Portfolio() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Portfolio</h1>
          <p className="mb-5">Portfolio body text</p>
          <button className="btn btn-primary">Contact Me</button>
        </div>
      </div>
    </div>
  );
}
