import * as React from "react";
import "./styling/About.css";
import acorns from "./img/acorns.png";
import altsource from "./img/altsource.png";
import codingCert from "./img/CodingIntroCert.png";
import crb from "./img/crb.png";
import me from "./img/SelfTransparent.png";
import nm from "./img/nm.png";
import reactCert from "./img/ReactCert.png";
import shastaqa from "./img/shastaqa.png";
import webDevCert from "./img/WebDevCert.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="">
      <h1 className="">About Me</h1>
      <div className="">
        <div className="">
          <div className="">
            <div className="grid grid-cols-1 m-5 p-3">
              <p className="font-bold text-center text-3xl">Jessica Butler</p>
              <p className="text-center">Senior QA Engineer</p>
              <img
                className="rounded-full w-30 col-span-1 drop-shadow-2xl"
                src={me}
                alt="Jessica Butler"
              />
            </div>
          </div>
          <ul className="">
            <li className="font-bold">Experience</li>
            <li className="m-4">8 Years</li>
            <li className="font-bold">Apps & Services Tested</li>
            <li className="m-4">14+</li>
            <li className="font-bold">Tools & Languages</li>
            <li className="p-5">
              <li>Postman</li>
              <li>JavaScript</li>
              <li>SQL Web</li>
              <li>Mobile & Backend Testing</li>
              <li>Xcode</li>
              <li>Android Studio</li>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="">
            <h4 className="">Current & Previous Experiences</h4>
            <div className="">
              <div className="">
                <div>
                  <img src={crb} alt="Cross River Bank Logo"></img>
                </div>
                <div>
                  <h5 className="md:text-lg font-bold">QA Engineer</h5>
                  <h6 className="md:text-base font-bold">Cross River Bank</h6>
                  <p>Sept 2022 - Present</p>
                </div>
              </div>
              <div className="">
                <div>
                  <img src={nm} alt="Northwestern Mutual Logo"></img>
                </div>
                <div>
                  <h5 className="md:text-lg  font-bold">
                    Senior Mobile Test Engineer
                  </h5>
                  <h6 className="md:text-base font-bold">
                    Northwestern Mutual
                  </h6>
                  <p>Jan 2021 - Sept 2022</p>
                </div>
              </div>
              <div className="">
                <div>
                  <img src={altsource} alt="AltSource Logo"></img>
                </div>
                <div>
                  <h5 className="">QA Engineer</h5>
                  <h6 className="">AltSource</h6>
                  <p>July 2020 - Jan 2021</p>
                </div>
              </div>
              <div className="">
                <div>
                  <img src={acorns} alt="Acorns Logo"></img>
                </div>
                <div>
                  <h5 className="md:text-lg font-bold">Senior QA Analyst</h5>
                  <h6 className="md:text-base font-bold">Acorns</h6>
                  <p>Sept 2018 - June 2020</p>
                </div>
              </div>
              <div className="">
                <div className="p-3 bg-error rounded-lg">
                  <img src={shastaqa} alt="Shasta QA Logo" className=""></img>
                </div>
                <div>
                  <h5 className="md:text-lg font-bold">Software Tester 2</h5>
                  <h6 className="md-text-base font-bold">Shasta QA</h6>
                  <p>May 2015 - Sept 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <h4 className="">Certifications</h4>
            <div className="">
              <div className="">
                <h5 className="">SheCodes React</h5>
                <h6 className="">SheCodes</h6>
                <p>May 2022 - July 2022</p>
                <img
                  src={reactCert}
                  alt="React Certificate for Jessica Butler"
                  ref="https://www.shecodes.io/certificates/3e4a4d0ba1fdd1beae9a2c97ca97c0c1"
                ></img>
                <div className="">
                  <button className="">
                    <Link to="https://www.shecodes.io/certificates/3e4a4d0ba1fdd1beae9a2c97ca97c0c1">
                      View Certificate
                    </Link>
                  </button>
                </div>
              </div>
              <div className="">
                <h5 className="">SheCodes Plus</h5>
                <h6 className="">SheCodes</h6>
                <p>Aug 2021 - Oct 2021</p>
                <img
                  src={webDevCert}
                  ref="https://www.shecodes.io/certificates/cc3fc368e104ead85e10fd283d6ba051"
                  alt="Web Development Certificate"
                ></img>
                <div className="">
                  <button className="">
                    <Link to="https://www.shecodes.io/certificates/cc3fc368e104ead85e10fd283d6ba051">
                      View Certificate
                    </Link>
                  </button>
                </div>
              </div>
              <div className="">
                <h5 className="">SheCodes Basics</h5>
                <h6 className="">SheCodes</h6>
                <p>June 2021 - July 2021</p>
                <img
                  src={codingCert}
                  ref="https://www.shecodes.io/certificates/731c174f9364f875517bc515f34134e2"
                  alt="Introduction to Coding Certificate"
                ></img>
                <div className="">
                  <button className="">
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
      <div className="">
        <div className="">
          <p className="m-5">Have questions? Just want to say hi?</p>
          <div className="">
            <button className="rounded-full btn btn-primary">
              <Link to="mailto:hello@jessicabutler.io">Email me! 💌</Link>
            </button>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
