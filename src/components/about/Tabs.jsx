import React from 'react'
import { useState } from "react";
import "./about.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tab-container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          About Me
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          My Education
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <p>
            Hi I am Xingchen! <br></br>

            I'm a year 3  Computer Science undergraduate studying at the National 
            University of Singapore, expected to graduate by Dec 2023. I have 
            experience in working in full stack development but my main interests 
            lie in distributed systems and mobile development.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>National University of Singapore</h2>
          <h4>Bachelor of Computing in Computer Science (Honours)</h4>
          <h5>Aug 2020 - Dec 2023</h5>
          <hr />
          <p>
            Relevant Coursework: Object-Oriented Programming, Linear Algebra, 
            Data Structure and Algorithms, Software Engineering, Operating System, 
            Computer Networks
          </p>
          <h2>Raffles Institution</h2>
          <h4>Science Stream</h4>
          <h5>Jan 2018 - Nov 2019</h5>
          <hr />
          <p>
            Subjects Taken: Physcis, Chemistry, Mathematics, Economics <br></br>
            A-Level results: AAA/A
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;