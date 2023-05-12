import React from "react";
import "./portfolio.css";
import aqua from "../../images/aqua.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="heading">
        <h1>Portfolio</h1>
      </div>
      <div className="mystory">MY WORK</div>
      <div className="row">
        <div className="col">
          <a href="https://aaquapurifierservices.com/" target="_blank">
            <div className="portfolio-image aqua"></div>
          </a>
          <div className="name">
            <a
              className="name"
              href="https://aaquapurifierservices.com/"
              target="_blank"
            >
              aaquapurifierservices.com
            </a>
          </div>
        </div>
        <div className="col">
          <a href="https://showtimescoop.in/">
            <div className="portfolio-image showtime"></div>
          </a>
          <div className="name">
            <a
              className="name"
              href="https://showtimescoop.in/"
              target="_blank"
            >
              showtimescoop.in
            </a>{" "}
          </div>
        </div>
        <div className="col">
          <a href="https://desiginingagency.online/">
            <div className="portfolio-image agency"></div>
          </a>
          <div className="name">
            <a
              className="name"
              href="https://desiginingagency.online/"
              target="_blank"
            >
              desiginingagency.online
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a href="https://booksnbarbells.in/">
            <div className="portfolio-image books"></div>
          </a>
          <div className="name">
            <a
              className="name"
              href="https://booksnbarbells.in/"
              target="_blank"
            >
              booksnbarbells.in
            </a>
          </div>
        </div>
        <div className="col">
          <a href="https://simplyaesthetic.shop//">
            <div className="portfolio-image aesthetic"></div>
          </a>
          <div className="name">
            <a className="name" href="https://simplyaesthetic.shop/" target="_blank">
            simplyaesthetic.shop
            </a>
          </div>
        </div>
        <div className="col">
          <a href="https://roomsandshrooms.online/">
            <div className="portfolio-image rooms"></div>
          </a>
          <div className="name">
            <a className="name" href="https://roomsandshrooms.online/" target="_blank">
            roomsandshrooms.online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
