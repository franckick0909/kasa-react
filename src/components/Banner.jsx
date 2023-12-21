import PropTypes from "prop-types";
import React from "react";

const Banner = ({ ban, legend, span }) => {
  return (
    <div className="banner">
      <img src={ban} alt="banner" className="banner__image" />
      <h2>{legend} <span>{span}</span></h2>
        
       
          
    </div>
  );
};

Banner.propTypes = {
  ban: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
};

export default Banner;
