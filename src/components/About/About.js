import React, { useContext } from "react";
import "./about.css";
import { useRef } from "react";
import handleScroll from "../../context/handleScroll";

const About = () => {
  const context = useContext(handleScroll)
  const {ref1} = context 
  // const ref1 = useRef(null);

  return (
    <div ref1={ref1} className="about">
      <div className="heading"><h1>About Me</h1></div>
      <div className="mystory">MY STORY</div>
      <div className="para1">
        Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus
        feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
        lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
      </div>
      <div className="para2">
        Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus
        feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
        lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
        Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
      </div>
      <div className="myself">
        <div className="col1">
            <div>Age:</div>
            <div>Freelance:</div>
            <div>Phone:</div>
        </div>
        <div className="col2">
            <div>23</div>
            <div>Available</div>
            <div>+91 8779237334</div>
        </div>
        <div className="col3">
            <div>Residence:</div>
            <div>Address:</div>
            <div>Email:</div>
        </div>
        <div className="col4">
            <div>India</div>
            <div>Mumbai</div>
            <div>akashdevelops1@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default About;