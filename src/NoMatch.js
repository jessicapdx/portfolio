import "./styling/NoMatch.css";

export default function NoMatch() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Bad news bears 🧸</h1>
          <p className="mb-5">We couldn't find what you're looking for!</p>
          <button className="btn btn-primary">Go Back 🏡</button>
        </div>
      </div>
    </div>
  );
}
