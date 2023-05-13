import React from "react";
import "./homesocials.css";

const HomeSocials = () => {
  return (
    <div className="homeSocials">
      {window.innerWidth <= 600 ? (
        <>
          {/* <div className="blank"></div> */}
          
            <div className="linkdin">
              <a
                href="https://www.linkedin.com/in/akash-yadav-59b63817a/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin socials"></i>
              </a>
            </div>
            <div className="github">
              <a href="https://github.com/Akash-152000" target="_blank">
                <i className="fa-brands fa-github socials"></i>
              </a>
            </div>
            <div className="instagram">
              <a
                href="https://www.instagram.com/akashdevelops/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram socials"></i>
              </a>
            </div>
          
        </>
      ) : (
        <>
          <div className="blank"></div>
          <div className="homesocial">
            <div className="linkdin">
              <a
                href="https://www.linkedin.com/in/akash-yadav-59b63817a/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin socials"></i>
              </a>
            </div>
            <div className="github">
              <a href="https://github.com/Akash-152000" target="_blank">
                <i className="fa-brands fa-github socials"></i>
              </a>
            </div>
            <div className="instagram">
              <a
                href="https://www.instagram.com/akashdevelops/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram socials"></i>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeSocials;
