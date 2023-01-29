import "./styling/About.css";

export default function About() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">About Me</h1>
          <p className="mb-5">About me body text</p>
          <button className="btn btn-primary">Contact Me</button>
        </div>
      </div>
    </div>
  );
}
