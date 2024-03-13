import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="heading">
        <h1>Portfolio</h1>
      </div>
      <div className="mystory">MY WORK</div>
      <div className="row">
        <div className="col">
          <a
            href="https://blueorb.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="portfolio-image blueorb"></div>
          </a>
          <div className="name">
            <a
              className="name"
              href="https://blueorb.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              blueorb.netlify.app
            </a>
          </div>
        </div>
        <div className="col">
          <a
            href="https://inckfoundation.org/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="portfolio-image inck"></div>
          </a>
          <div className="name">
            <a
              className="name"
              href="https://inckfoundation.org/"
              target="_blank"
              rel="noreferrer"
            >
              inckfoundation.org
            </a>
          </div>
        </div>
        <div className="col">
          <a href="https://alpha-modern.in/" target="_blank" rel="noreferrer">
            <div className="portfolio-image alpha"></div>
          </a>
          <div className="name">
            <a
              className="name"
              href="https://alpha-modern.in/"
              target="_blank"
              rel="noreferrer"
            >
              alpha-modern.in
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a href="https://showtimescoop.in/">
            <div className="portfolio-image showtime"></div>
          </a>
          <div className="name">
            <a
              className="name"
              href="https://showtimescoop.in/"
              target="_blank"
              rel="noreferrer"
            >
              showtimescoop.in
            </a>{" "}
          </div>
        </div>

        <div className="col">
          <a href="https://kdexpo.in/">
            <div className="portfolio-image kdexpo"></div>
          </a>
          <div className="name">
            <a
              className="name"
              href="https://kdexpo.in/"
              target="_blank"
              rel="noreferrer"
            >
              kdexpo.in
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
