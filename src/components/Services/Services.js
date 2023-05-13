import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="heading">
        <h1>Services</h1>
      </div>
      <div className="mystory">WHAT I DO</div>

      {window.innerWidth <= 600 ? (
        <>
          <div className="service-row1">
            <div className="service-col">
              <i className="fa-brands fa-chrome chrome"></i>
              <h2>
                Web <br /> Development
              </h2>
             
            </div>
            <div className="service-col">
              <i className="fa-brands fa-wordpress chrome"></i>
              <h2>
                WordPress <br /> Development
              </h2>
              
            </div>
          </div>
          <div className="service-row1">
            <div className="service-col">
              <i className="fa-sharp fa-solid fa-palette chrome"></i>
              <h2>
                Web <br /> Design
              </h2>
             
            </div>
            <div className="service-col">
              <i className="fa-solid fa-rectangle-ad chrome"></i>
              <h2>
                Social media <br /> Marketing
              </h2>
              
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="service-row1">
            <div className="service-col">
              <i className="fa-brands fa-chrome chrome"></i>
              <h2>
                Web <br /> Development
              </h2>
              <p>
                The web development process includes: web design, web content,
                client-side / server-side scripting and network security
                configuration.
              </p>
            </div>
            <div className="service-col">
              <i className="fa-brands fa-wordpress chrome"></i>
              <h2>
                WordPress <br /> Development
              </h2>
              <p>
                The web development process includes: web design, web content,
                client-side / server-side scripting and network security
                configuration.
              </p>
            </div>
          </div>
          <div className="service-row1">
            <div className="service-col">
              <i className="fa-sharp fa-solid fa-palette chrome"></i>
              <h2>
                Web <br /> Design
              </h2>
              <p>
                The web development process includes: web design, web content,
                client-side / server-side scripting and network security
                configuration.
              </p>
            </div>
            <div className="service-col">
              <i className="fa-solid fa-rectangle-ad chrome"></i>
              <h2>
                Social media <br /> Marketing
              </h2>
              <p>
                The web development process includes: web design, web content,
                client-side / server-side scripting and network security
                configuration.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
