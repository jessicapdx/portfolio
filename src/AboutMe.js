import React from "react";
import "./styling/About.css";
import me from "./img/SelfTransparent.png";

export default function About() {
  return (
    <div>
      <br />
      <h3 className="text-xl font-bold">Contact</h3>
      <a
        className="text-xl hover:text-blue-600"
        href="mailto:hello@jessicabutler.io"
      >
        hello@jessicabutler.io
      </a>

      <img
        className="hidden md:block object-cover w-1/2 h-screen rounded-full"
        src={me}
        alt="Jessica Butler"
      />

      <h4 className="text-xl font-bold">Years of Experience</h4>
      <br />
      <p className="text-6xl">+8</p>
      <h4 className="text-xl font-bold">Apps & Services Tested</h4>
      <br />
      <p className="text-6xl">+14</p>
      <h4 className="text-xl font-bold">Software Bugs Filed</h4>
      <br />
      <p className="text-6xl">+2000</p>
      <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
        Experience
      </h4>
      <h5 className="text-xl md:text-2xl font-bold">QA Engineer</h5>
      <h6 className="text-lg font-bold">Cross River Bank</h6>
      <p>Sept 2022 - present</p>
      <p>
        Driving manual and automated testing efforts on an agile team supporting
        8 developers with bi-weekly releases. Frontend testing on two web apps
        and backend testing using SQL and REST API. Built and use daily a
        Postman collection to expedite testing setup. Integrate Cypress and
        Postman test repos with TestRail.
      </p>
      <h5 className="text-xl md:text-2xl  font-bold">
        Senior Mobile Test Engineer
      </h5>
      <h6 className="text-lg font-bold">Northwestern Mutual</h6>
      <p>Jan 2021 - Sept 2022</p>
      <p>
        Automated test maintenance and creation using JavaScript, Mocha and
        Node. Script creation to assist in test data generation on the QA
        environment. Manual testing of a financial mobile app driven heavily by
        microservices. Test planning and test case creation for new features.
        Utilize Xcode and Android Studio for testing and debugging. API testing
        new and existing microservices using Postman. Participate in stand up,
        grooming, retrospective and other agile scrum ceremonies. Investigate
        and report product defects using Jira. Create test cases and subtest
        executions using Xray. Interview candidates for Test Engineer roles. New
        hire training and mentorship for new full time employees and
        contractors. Lead QA on multiple initiatives such as in-app chat,
        account linking and more.
      </p>
      <h5 className="text-xl md:text-2xl  font-bold">QA Engineer</h5>
      <h6 className="text-lg font-bold">AltSource</h6>
      <p>July 2020 - Jan 2021</p>
      <p>
        Manual testing of a telecommunications web app. Smoke and regression
        testing for bi-weekly releases. Participated in stand up, grooming,
        retrospective and other agile scrum ceremonies. API testing utilizing
        Postman. Investigate and report product defects using Jira. Work with an
        offshore QA team to coordinate testing efforts. Documenting mock service
        usage and other vital QA activities in Confluence.
      </p>
      <h5 className="text-xl md:text-2xl  font-bold">Senior QA Analyst</h5>
      <h6 className="text-lg font-bold">Acorns</h6>
      <p>Sept 2018 - June 2020</p>
      <p>
        Automated mobile testing utilizing Appium, Ruby and Cucumber. Automated
        backend testing utilizing Ruby and Rspec. Automated web testing
        utilizing Ruby and Cucumber. Manual testing of a Chrome Extension,
        mobile app (iOS and Android) and web app. API testing utilizing Postman
        and GraphQL. Performance testing utilizing JMeter and Taurus. Smoke and
        regression testing manually across all platforms. Investigated, reported
        and triaged product defects using Jira. Test case creation in TestRail.
      </p>
      <h5 className="text-xl md:text-2xl  font-bold">Software Tester 2</h5>
      <h6 className="text-lg font-bold">Shasta QA</h6>
      <p>May 2015 - Sept 2018</p>
      <p>
        Frontend/web and API testing on a SaaS team. Frontend/web and mobile
        testing on an asthmatic medical device. Worked within a team on agile
        scrum SDLC. Assisted QA Manager in creating weekly, monthly and
        quarterly reports for clients in preparation for a potential promotion
        to QA Manager. Conducted new hire training for newly hired employees,
        teaching QA methodologies to green tech/QA hires.
      </p>
      <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
        Certifications
      </h4>
      <h5 className="text-xl md:text-2xl  font-bold">SheCodes React</h5>
      <h6 className="text-lg font-bold">SheCodes</h6>
      <p>May 2022 - July 2022</p>
      <a href="https://www.shecodes.io/certificates/3e4a4d0ba1fdd1beae9a2c97ca97c0c1">
        Verified Certificate
      </a>
      <p>
        Studied advanced HTML, CSS, Bootstrap, JavaScript and React concepts,
        along with Git and GitHub. Deepened knowledge of Bootstrap and learned
        to use other advanced development tools to complete two final projects
        utilizing external APIs using Axios.
      </p>
      <h5 className="text-xl md:text-2xl  font-bold">SheCodes Plus</h5>
      <h6 className="text-lg font-bold">SheCodes</h6>
      <p>Aug 2021 - Oct 2021</p>
      <a href="https://www.shecodes.io/certificates/cc3fc368e104ead85e10fd283d6ba051">
        Verified Certificate
      </a>
      <p>
        Studied advanced HTML, CSS, Bootstrap, and JavaScript concepts, along
        with Git and GitHub. Deepened knowledge of Visual Studio Code and
        learned to use other advanced development tools that are relevant in the
        workplace today.
      </p>
      <h5 className="text-xl md:text-2xl  font-bold">SheCodes Basics</h5>
      <h6 className="text-lg font-bold">SheCodes</h6>
      <p>June 2021 - July 2021</p>
      <a href="https://www.shecodes.io/certificates/731c174f9364f875517bc515f34134e2">
        Verified Certificate
      </a>
      <p>
        Studied basic coding concepts using HTML 5, CSS 3 and VS Code. Limited
        exposure to JavaScript with a small beginner project. Primary focus was
        to develop a good understand of the basics in frontend web development.
      </p>
    </div>
  );
}
