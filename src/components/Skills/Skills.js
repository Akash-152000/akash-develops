import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="heading">
        <h1>Coding Skills</h1>
      </div>
      <div className="mystory">DEVELOPING ON</div>
      <div className="skill-row">
        <div className="skill-col">
          <progress min="0" max="100" value="80" />
          <div className="skill"><h2>ReactJs</h2></div>
          <div className="skill-desc">
            Etiam sit amet orci eget eros faucibus tincidunt.
          </div>
        </div>
        <div className="skill-col">
          <progress min="0" max="100" value="63" />
          <div className="skill"><h2>NodeJs</h2></div>
          <div className="skill-desc">
            Etiam sit amet orci eget eros faucibus tincidunt.
          </div>
        </div>
        <div className="skill-col">
          <progress min="0" max="100" value="70" />
          <div className="skill"><h2>WordPress</h2></div>
          <div className="skill-desc">
            Etiam sit amet orci eget eros faucibus tincidunt.
          </div>
        </div>
      </div>
      <div className="skill-row">
        <div className="skill-col">
          <progress min="0" max="100" value="60" />
          <div className="skill"><h2>Javascript</h2></div>
          <div className="skill-desc">
            Etiam sit amet orci eget eros faucibus tincidunt.
          </div>
        </div>
        <div className="skill-col">
          <progress min="0" max="100" value="40" />
          <div className="skill"><h2>Figma</h2></div>
          <div className="skill-desc">
            Etiam sit amet orci eget eros faucibus tincidunt.
          </div>
        </div>
        <div className="skill-col">
          <progress min="0" max="100" value="80" />
          <div className="skill"><h2>HTML5/CSS3</h2></div>
          <div className="skill-desc">
            Etiam sit amet orci eget eros faucibus tincidunt.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
