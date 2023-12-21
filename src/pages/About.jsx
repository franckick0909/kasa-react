import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Navigation from "../components/Navigation";
import banner2 from "../assets/images/banner2.png";
import Footer from "../components/Footer";
import React from "react";
import description from "../datas/description.json";

const About = () => {



  return (
    <>
      <div className="block-container">
        <Navigation />
        <Banner
          ban={banner2}
          legend=""
          span=""/>


        <div className="container-collapse">
          {description.map((item, id) => (
            <Collapse key={id} title={item.title} text={item.description}/>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
