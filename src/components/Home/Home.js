import React from "react";
import "./home.css";
import HeroImage from "../HeroImage/HeroImage";
import HomeContent from "../HomeContent/HomeContent";
import HomeSocials from "../HomeSocials/HomeSocials";

const Home = () => {
  return (
    <>
    {console.log(window.innerWidth)}
      {window.innerWidth > 600 ? (
        
        <div className="home">
          <HomeSocials />
          <HomeContent />
          <HeroImage />
        </div>
      ) : (
        <div className="home">
          <HeroImage />
          <HomeContent />
          <HomeSocials />
        </div>
      )}
    </>
  );
};

export default Home;
