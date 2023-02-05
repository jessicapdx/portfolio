import "./styling/Home.css";
import me from "./img/SelfTransparent.png";

export default function Home() {
  return (
    <div class="relative text-gray-800 bg-gray-50">
      <section class="flex items-center justify-between px-8 mb-20 tracking-wider">
        <div class="flex flex-col w-full md:w-1/3 space-y-12 text-center md:text-left">
          <div class="flex flex-col px-10 md:px-20">
            <div class="h-10"></div>
            <h3 class="text-xl font-bold">Skills</h3>
            <br />
            <span class="text-lg">Manual & Automated Web & Mobile Testing</span>
            <span class="text-lg">Backend/API Testing</span>
            <span class="text-lg">Test Planning</span>
            <span class="text-lg">Collaboration</span>
          </div>
          <div class="px-10 md:px-20">
            <h3 class="text-xl font-bold">Summary</h3>
            <br />
            <p class="w-full">
              I'm a first generation high school graduate and college attendee.
              I've always been driven to find what I'm passionate about, and I
              found my passion for QA in 2013 at my first QA job.
              <br />
              Since then, I've found a passion for writing code (specifically
              JavaScript) and really enjoy spending time on automation. I don't
              believe there's a replacement for manual QA, but I believe
              automated testing allows passionate testers to do more of what
              they love: test all the things!
            </p>
          </div>
          <div class="px-10 md:px-20">
            <br />
            <h3 class="text-xl font-bold">Contact</h3>
            <a
              class="text-xl hover:text-blue-600"
              href="mailto:hello@jessicabutler.io"
            >
              hello@jessicabutler.io
            </a>
          </div>
        </div>

        <img
          class="hidden md:block object-cover w-1/2 h-screen rounded-full"
          src={me}
          alt="Jessica Butler"
        />

        <div class="hidden md:flex flex-col w-1/3 space-y-12 text-right">
          <div class="px-20">
            <h4 class="text-xl font-bold">Years of Experience</h4>
            <br />
            <p class="text-6xl">+8</p>
          </div>
          <div class="px-20">
            <h4 class="text-xl font-bold">Apps & Services Tested</h4>
            <br />
            <p class="text-6xl">+14</p>
          </div>
          <div class="px-20">
            <h4 class="text-xl font-bold">Software Bugs Filed</h4>
            <br />
            <p class="text-6xl">+2000</p>
          </div>
        </div>
      </section>

      <hr class="border-gray-400 mx-44" />

      <section class="px-20 mt-10">
        <h4 class="mb-8 text-3xl font-bold text-center md:text-left">
          Experience
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-6 my-10">
          <div class="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 class="text-xl md:text-2xl font-bold">QA Engineer</h5>
            <h6 class="text-lg font-bold">Cross River Bank</h6>
            <p>Sept 2022 - present</p>
          </div>
          <div class="flex flex-col col-span-4">
            <p>
              Driving manual and automated testing efforts on an agile team
              supporting 8 developers with bi-weekly releases. Frontend testing
              on two web apps and backend testing using SQL and REST API. Built
              and use daily a Postman collection to expedite testing setup.
              Integrate Cypress and Postman test repos with TestRail.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-6 my-10">
          <div class="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 class="text-xl md:text-2xl  font-bold">
              Senior Mobile Test Engineer
            </h5>
            <h6 class="text-lg font-bold">Northwestern Mutual</h6>
            <p>Jan 2021 - Sept 2022</p>
          </div>
          <div class="flex flex-col col-span-4">
            <p>
              Automated test maintenance and creation using JavaScript, Mocha
              and Node. Script creation to assist in test data generation on the
              QA environment. Manual testing of a financial mobile app driven
              heavily by microservices. Test planning and test case creation for
              new features. Utilize Xcode and Android Studio for testing and
              debugging. API testing new and existing microservices using
              Postman. Participate in stand up, grooming, retrospective and
              other agile scrum ceremonies. Investigate and report product
              defects using Jira. Create test cases and subtest executions using
              Xray. Interview candidates for Test Engineer roles. New hire
              training and mentorship for new full time employees and
              contractors. Lead QA on multiple initiatives such as in-app chat,
              account linking and more.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-6 my-10">
          <div class="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 class="text-xl md:text-2xl  font-bold">QA Engineer</h5>
            <h6 class="text-lg font-bold">AltSource</h6>
            <p>July 2020 - Jan 2021</p>
          </div>
          <div class="flex flex-col col-span-4">
            <p>
              Manual testing of a telecommunications web app. Smoke and
              regression testing for bi-weekly releases. Participated in stand
              up, grooming, retrospective and other agile scrum ceremonies. API
              testing utilizing Postman. Investigate and report product defects
              using Jira. Work with an offshore QA team to coordinate testing
              efforts. Documenting mock service usage and other vital QA
              activities in Confluence.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-6 my-10">
          <div class="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 class="text-xl md:text-2xl  font-bold">Senior QA Analyst</h5>
            <h6 class="text-lg font-bold">Acorns</h6>
            <p>Sept 2018 - June 2020</p>
          </div>
          <div class="flex flex-col col-span-4">
            <p>
              Automated mobile testing utilizing Appium, Ruby and Cucumber.
              Automated backend testing utilizing Ruby and Rspec. Automated web
              testing utilizing Ruby and Cucumber. Manual testing of a Chrome
              Extension, mobile app (iOS and Android) and web app. API testing
              utilizing Postman and GraphQL. Performance testing utilizing
              JMeter and Taurus. Smoke and regression testing manually across
              all platforms. Investigated, reported and triaged product defects
              using Jira. Test case creation in TestRail.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-6 my-10">
          <div class="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 class="text-xl md:text-2xl  font-bold">Software Tester 2</h5>
            <h6 class="text-lg font-bold">Shasta QA</h6>
            <p>May 2015 - Sept 2018</p>
          </div>
          <div class="flex flex-col col-span-4">
            <p>
              Frontend/web and API testing on a SaaS team. Frontend/web and
              mobile testing on an asthmatic medical device. Worked within a
              team on agile scrum SDLC. Assisted QA Manager in creating weekly,
              monthly and quarterly reports for clients in preparation for a
              potential promotion to QA Manager. Conducted new hire training for
              newly hired employees, teaching QA methodologies to green tech/QA
              hires.
            </p>
          </div>
        </div>
      </section>
      <hr class="border-gray-400 mx-44" />
      <section class="px-20 mt-10">
        <h4 class="mb-8 text-3xl font-bold text-center md:text-left">
          Certifications
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-6 my-10">
          <div class="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 class="text-xl md:text-2xl  font-bold">SheCodes React</h5>
            <h6 class="text-lg font-bold">SheCodes</h6>
            <p>May 2022 - July 2022</p>
            <a href="https://www.shecodes.io/certificates/3e4a4d0ba1fdd1beae9a2c97ca97c0c1">
              Verified Certificate
            </a>
          </div>
          <div class="flex flex-col col-span-4 ">
            <p>
              Studied advanced HTML, CSS, Bootstrap, JavaScript and React
              concepts, along with Git and GitHub. Deepened knowledge of
              Bootstrap and learned to use other advanced development tools to
              complete two final projects utilizing external APIs using Axios.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-6 my-10">
          <div class="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 class="text-xl md:text-2xl  font-bold">SheCodes Plus</h5>
            <h6 class="text-lg font-bold">SheCodes</h6>
            <p>Aug 2021 - Oct 2021</p>
            <a href="https://www.shecodes.io/certificates/cc3fc368e104ead85e10fd283d6ba051">
              Verified Certificate
            </a>
          </div>
          <div class="flex flex-col col-span-4 ">
            <p>
              Studied advanced HTML, CSS, Bootstrap, and JavaScript concepts,
              along with Git and GitHub. Deepened knowledge of Visual Studio
              Code and learned to use other advanced development tools that are
              relevant in the workplace today.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-6 my-10">
          <div class="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 class="text-xl md:text-2xl  font-bold">SheCodes Basics</h5>
            <h6 class="text-lg font-bold">SheCodes</h6>
            <p>June 2021 - July 2021</p>
            <a href="https://www.shecodes.io/certificates/731c174f9364f875517bc515f34134e2">
              Verified Certificate
            </a>
          </div>
          <div class="flex flex-col col-span-4 ">
            <p>
              Studied basic coding concepts using HTML 5, CSS 3 and VS Code.
              Limited exposure to JavaScript with a small beginner project.
              Primary focus was to develop a good understand of the basics in
              frontend web development.
            </p>
          </div>
        </div>
      </section>

      <div class="h-80"></div>
    </div>
  );
}
