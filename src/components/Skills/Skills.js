import React from "react";
import "./skills.css";
import css from "../../tech/css.png";
import reactjs from "../../tech/reactjs.png";
import nodejs from "../../tech/nodejs.png";
import javascript from "../../tech/javascript.png";
import tailwind from "../../tech/tailwind.png";
import mongodb from "../../tech/mongodb.png";
import typescript from "../../tech/typescript.png";

const Skills = () => {
  return (
    <div className="skills">
      <div className="heading">
        <h1>Coding Skills</h1>
      </div>
      <div className="mystory">DEVELOPING ON</div>

      {window.innerWidth <= 600 ? (
        <>
          <>
            <div className="skill-row">
              <div className="skill-col">
                <img src={reactjs} alt="" height={50} width={50} />
                <div className="skill">
                  <h3>ReactJs</h3>
                </div>
              </div>
              <div className="skill-col">
                <img src={nodejs} alt="" height={50} width={50} />
                <div className="skill">
                  <h3>NodeJs</h3>
                </div>
              </div>
              <div className="skill-col">
                <img src={javascript} alt="" height={50} width={50} />
                <div className="skill">
                  <h3>Javascript</h3>
                </div>
              </div>
            </div>
            <div className="skill-row">
              <div className="skill-col">
                <img src={tailwind} alt="" height={50} width={50} />
                <div className="skill">
                  <h3>Tailwind</h3>
                </div>
              </div>
              <div className="skill-col">
                <img src={mongodb} alt="" height={50} width={50} />
                <div className="skill">
                  <h3>Mongodb</h3>
                </div>
              </div>
              <div className="skill-col">
                <img src={typescript} alt="" height={50} width={50} />
                <div className="skill">
                  <h3>TypeScript</h3>
                </div>
              </div>
            </div>
          </>
        </>
      ) : (
        <>
          <div className="skill-row">
            <div className="skill-col">
              <img src={reactjs} alt="" height={100} width={100} />
              <div className="skill">
                <h2>ReactJs</h2>
              </div>
            </div>
            <div className="skill-col">
              <img src={nodejs} alt="" height={100} width={100} />
              <div className="skill">
                <h2>NodeJs</h2>
              </div>
            </div>
            <div className="skill-col">
              <img src={javascript} alt="" height={100} width={100} />
              <div className="skill">
                <h2>Javascript</h2>
              </div>
            </div>
          </div>
          <div className="skill-row">
            <div className="skill-col">
              <img src={tailwind} alt="" height={100} width={100} />
              <div className="skill">
                <h2>Tailwind</h2>
              </div>
            </div>
            <div className="skill-col">
              <img src={mongodb} alt="" height={100} width={100} />
              <div className="skill">
                <h2>Mongodb</h2>
              </div>
            </div>
            <div className="skill-col">
              <img src={typescript} alt="" height={100} width={100} />
              <div className="skill">
                <h2>TypeScript</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Skills;
