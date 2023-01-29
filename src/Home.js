import "./styling/Home.css";
import bgImg from "./img/HomeBG.jpg";

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">I'm Jessica 💖</h1>
          <p className="mb-5">
            I'm a Software QA Engineer with 8 years in the software testing
            industry. Software testing allows me to be creative, use critical
            thinking skills and empowers me to make a significant impact in a
            subtle yet important way. <br />I truly love what I do!
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
}
