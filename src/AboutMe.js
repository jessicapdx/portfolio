import React from "react";
import "./styling/About.css";
import me from "./img/SelfTransparent.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="">
      <div className="bg-primary grid grid-cols-3">
        <div className="m-5">
          <h4 className="text-2xl font-bold">Experience</h4>
          <br />
          <p className="text-4xl m-4">8 Years</p>
          <br />
          <h4 className="text-2xl font-bold">Apps & Services Tested</h4>
          <br />
          <p className="text-4xl m-4">14+</p>
          <br />
          <h4 className="text-2xl font-bold">Tools & Languages</h4>
          <br />
          <p className="text-4xl m-4">
            Postman
            <br />
            JavaScript
            <br />
            SQL
            <br />
            Web, Mobile & Backend Testing
            <br />
            Xcode & Android Studio
          </p>
        </div>
        <div className="grid m-5 text-center justify-items-center">
          <div className="m-8">
            <p className="m-5">Have questions? Just want to say hi?</p>
            <div className="">
              <button className="rounded-full btn btn-primary">
                <Link to="mailto:hello@jessicabutler.io">Email me! 💌</Link>
              </button>
            </div>
          </div>
          <div className="">
            <img className="rounded-full w-80" src={me} alt="Jessica Butler" />
          </div>
        </div>
        <div className="m-5 grid justify-items-end pr-5 text-end">
          <h4 className="mb-8 text-2xl font-bold md:text-left">
            Current & Previous Experiences
          </h4>
          <h5 className="text-xl md:text-2xl font-bold">QA Engineer</h5>
          <h6 className="text-lg font-bold">Cross River Bank</h6>
          <p>Sept 2022 - Present</p>
          <br />
          <h5 className="text-xl md:text-2xl  font-bold">
            Senior Mobile Test Engineer
          </h5>
          <h6 className="text-lg font-bold">Northwestern Mutual</h6>
          <p>Jan 2021 - Sept 2022</p>
          <br />
          <h5 className="text-xl md:text-2xl  font-bold">QA Engineer</h5>
          <h6 className="text-lg font-bold">AltSource</h6>
          <p>July 2020 - Jan 2021</p>
          <br />
          <h5 className="text-xl md:text-2xl  font-bold">Senior QA Analyst</h5>
          <h6 className="text-lg font-bold">Acorns</h6>
          <p>Sept 2018 - June 2020</p>
          <br />
          <h5 className="text-xl md:text-2xl  font-bold">Software Tester 2</h5>
          <h6 className="text-lg font-bold">Shasta QA</h6>
          <p>May 2015 - Sept 2018</p>
        </div>
      </div>
      <div className="flex items-stretch">
        <div className="m-5">
          <h4 className="mb-5 text-3xl font-bold text-center">
            Certifications
          </h4>
          <div className="grid grid-cols-3 text-center">
            <div>
              <h5 className="text-xl md:text-2xl  font-bold">SheCodes React</h5>
              <h6 className="text-lg font-bold">SheCodes</h6>
              <p>May 2022 - July 2022</p>
              <p>
                Studied advanced HTML, CSS, Bootstrap, JavaScript and React
                concepts, along with Git and GitHub. Deepened knowledge of
                Bootstrap and learned to use other advanced development tools to
                complete two final projects utilizing external APIs using Axios.
              </p>
              <div className="place-self-center m-2">
                <button className="rounded-full btn btn-ghost">
                  <Link to="https://www.shecodes.io/certificates/3e4a4d0ba1fdd1beae9a2c97ca97c0c1">
                    View Certificate
                  </Link>
                </button>
              </div>
            </div>
            <div>
              <h5 className="text-xl md:text-2xl  font-bold">SheCodes Plus</h5>
              <h6 className="text-lg font-bold">SheCodes</h6>
              <p>Aug 2021 - Oct 2021</p>
              <p>
                Studied advanced HTML, CSS, Bootstrap, and JavaScript concepts,
                along with Git and GitHub. Deepened knowledge of Visual Studio
                Code and learned to use other advanced development tools that
                are relevant in the workplace today.
              </p>
              <div className="place-self-center m-2">
                <button className="rounded-full btn btn-ghost">
                  <Link to="https://www.shecodes.io/certificates/cc3fc368e104ead85e10fd283d6ba051">
                    View Certificate
                  </Link>
                </button>
              </div>
            </div>
            <div>
              <h5 className="text-xl md:text-2xl  font-bold">
                SheCodes Basics
              </h5>
              <h6 className="text-lg font-bold">SheCodes</h6>
              <p>June 2021 - July 2021</p>
              <p>
                Studied basic coding concepts using HTML 5, CSS 3 and VS Code.
                Limited exposure to JavaScript with a small beginner project.
                Primary focus was to develop a good understand of the basics in
                frontend web development.
              </p>
              <div className="place-self-center m-2">
                <button className="rounded-full btn btn-ghost">
                  <Link to="https://www.shecodes.io/certificates/731c174f9364f875517bc515f34134e2">
                    View Certificate
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
