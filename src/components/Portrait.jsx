import React from "react";
import "../styles/components/_portrait.scss";
import PropTypes from "prop-types";

const Portrait = ({ name, picture }) => {



  return (
    <>
      
      <div className="content-host">
          <div className="name">
            <h3>
              <span>{name.split(" ")[0]}</span>
              <span>{name.split(" ")[1]}</span>
            </h3>
          </div>
      
        <div className="picture">
            <img src={picture} alt={name} />
        </div>
      </div>
    </>
  );
};

Portrait.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Portrait;
