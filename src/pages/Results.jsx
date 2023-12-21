import Footer from "../components/Footer";
import Logement from "../components/Logement";
import Navigation from "../components/Navigation";
import Portrait from "../components/Portrait";
import Collapse from "../components/Collapse";
import React from "react";
import data from "../datas/data.json";
import Stars from "../components/Stars";
import Slideshow from "../components/Slideshow";
import { useParams } from "react-router-dom";

const Results = () => {
  const { id } = useParams();

  const property = data.find((data) => data.id === id);


  const equipments = property.equipments.map((equipment) => (
    <li key={equipment}>{equipment}</li>
  ));
  

    return (
      <>
        <div className="block-container">
          <Navigation />

          <Slideshow images={property.pictures} title={property.title} />

          <div className="logement-content">
            <div className="left">
              <Logement />
            </div>

            <div className="right">
              <Portrait
                picture={property.host.picture}
                name={property.host.name}
              />

              <div className="etoiles">
                <Stars rating={property.rating} />
              </div>
            </div>
          </div>

          <div className="collapse-content">
            <Collapse title="Description" text={property.description} />
            <Collapse title="Équipements" text={equipments} />
          </div>
        </div>
        <Footer />
      </>
    );
  
};

export default Results;
