import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <div>
      <button style={{"background": props.color,"border": `1px solid ${props.borderColor}`}}>
        {props.content}
        <i className={`fa-solid fa-${props.name} icon`} ></i>
        
      </button>
    </div>
  );
};

export default Button;
