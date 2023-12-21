import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import banner1 from "../assets/images/banner1.png";
import data from "../datas/data.json";
import Footer from "../components/Footer";
import Card from "../components/Card";
import React from "react";

const Home = () => {
  
  return (
    <>
      <div className="block-container">
        <Navigation />
        <Banner
          ban={banner1}
          legend="Chez vous,"
          span="partout et ailleurs"
        />
        
           


        <ul className="card">
          {data.map((data, id) => (
            <Card key={id} data={data} />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Home;
