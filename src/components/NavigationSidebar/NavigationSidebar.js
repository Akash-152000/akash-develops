import React from "react";
import "./navigationSidebar.css";

const NavigationSidebar = (props) => {
  return (
    <div className="navigation-sidebar" style={{ width: `${props.width}` }}>
      <ul style={{ width: `${props.width}` }}>
        <li >Home</li>
        <li onClick={props.handleRef1}>About</li>
        <li>Resume</li>
        <li onClick={props.handleRef4}>Portfolio</li>
        <li onClick={props.handleRef5}>Contact</li>
      </ul>
        <div className="cross"><i onClick={props.handleSidebar} className="fa-solid fa-xmark"></i></div>
    </div>
  );
};

export default NavigationSidebar;
