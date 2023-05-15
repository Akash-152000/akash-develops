import React, { useContext } from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="heading">
        <h1>About Me</h1>
      </div>
      <div className="mystory">MY STORY</div>
      <div className="para1">
        I have Completed my Engineering Graduation in Information Technology from Mumbai university, I always loved writing code that could be usefull and from 3rd semester I started coding websites.
      </div>
      <div className="para2">
        Now I can build any website or web application using the latest tools and technology, I can also build a website using wordpress, I have learned a bit of desiging as well. I am currently in a job and will quit it soon to work as web desveloper or would do full time freelancing.
      </div>
      {window.innerWidth <= 600 ? (
        <div className="myself">
          <div className="col1">
            <div>Age:</div>
            <div>Freelance:</div>
            <div>Phone:</div>
            <div>Residence:</div>
            <div>Address:</div>
            <div>Email:</div>
          </div>
          <div className="col2">
            <div>23</div>
            <div>Available</div>
            <div>+91 8779237334</div>
            <div>India</div>
            <div>Mumbai</div>
            <div>akashdevelops1 <br />@gmail.com</div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default About;
