import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="heading">
        <h1>Contact</h1>
      </div>
      <div className="mystory">LET'S TALK</div>

    
    <a className="call-btn" href="tel:8779237334">
      <button className="call-btn">
        <i className={`fa-solid fa-phone`} ></i>
        {" "}8779237334 
      </button>
    </a>
    <a className="call-btn" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDffjfwMjKdNwHJXJZTCjXhctNwTZfkBjXJjvdCxwvPLtMPlKhLSLhcrJkMMcxjmsDXbCM" target="_blank">
      <button className="call-btn">
        <i className={`fa-solid fa-envelope`} ></i>
        {" "}akashdevelops1@gmail.com 
      </button>
    </a>
      
    </div>
  );
};

export default Contact;
