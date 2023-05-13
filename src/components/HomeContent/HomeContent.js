import React from "react";
import "./homecontent.css";
import Button from "../Button/Button";
import About from "../About/About";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import { useRef } from "react";

const HomeContent = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)

  const handleRef1 = () => {
    ref1.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleRef2 = () => {
    ref2.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleRef3 = () => {
    ref3.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleRef4 = () => {
    ref4.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleRef5 = () => {
    ref5.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
      <div className="homeContent">
      <Navbar handleRef1={handleRef1} handleRef2={handleRef2} handleRef3={handleRef3} handleRef4={handleRef4} handleRef5={handleRef5}/> 
        
        <div className="nameContainer">
          <h1 >Akash Yadav</h1>
        </div>
        <div className="designation">
          <div className="designation-text"> Web Developer</div>
        </div>
        <div className="description">
          Hello! I am Web Developer from United States, New York. I have rich
          experience in web site design and building, also I am good at
          wordpress. I love to talk with you about our unique.
        </div>
        
        <div className="button">
          <Button content="Contact me" color="#373B40" name="chevron-right" />
          {/* <Button content="Scroll down" color="#373B40" name="arrow-down" /> */}
        </div>
        <hr />
        <div ref={ref1} >
          <About  />
        </div>
        <hr />
        <div ref={ref2} >
          <Services />
        </div>
        <hr />
        <div ref={ref3}>
          <Skills />
        </div>
        <hr />
        <div ref={ref4}>
          <Portfolio/>
        </div>
        <hr />
        <div ref={ref5}>
          <Contact/>
        </div>
        <hr />
        
      </div>
    </>
  );
};

export default HomeContent;
