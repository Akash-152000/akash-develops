import React from "react";
import "./navigationSidebar.css";
import Button from "../Button/Button";
import pdf from "../../resume/resume.pdf";

const NavigationSidebar = (props) => {
  return (
    <div className="navigation-sidebar" style={{ width: `${props.width}` }}>
      <ul style={{ width: `${props.width}` }}>
        <li>Home</li>
        <li onClick={props.handleRef1}>About</li>
        <li onClick={props.handleRef2} >Services</li>
        <li onClick={props.handleRef4}>Portfolio</li>
        <li onClick={props.handleRef5}>Contact</li>
        <li>
          <div >
            <a href={pdf} download="Akash's Resume" target="_blank">
              <Button
                content="Download CV"
                color="#585d65"
                borderColor="#f5f5f5"
                name="download"
              />
            </a>
          </div>
        </li>
      </ul>
      <div className="cross">
        <i onClick={props.handleSidebar} className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default NavigationSidebar;
