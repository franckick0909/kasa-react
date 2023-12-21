import data from "../datas/data.json";
import React from "react";
import { useParams } from "react-router-dom";

const Logement = () => {

  const { id } = useParams();

    return (
      <>
        
          <div className="left">
          {data
            .filter((logement) => logement.id === id)
            .slice(0, 1)
            .map((logement, index) => {
              const { title, location, tags } = logement;
              return (
                <div key={index}>
                  <h2>{title}</h2>
                  <p>{location}</p>
                  <ul>
                    {tags.map((tag, index) => {
                      return <li key={index}>{tag}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
      </>
    );
};

export default Logement;