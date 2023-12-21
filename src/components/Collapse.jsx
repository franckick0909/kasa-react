import arrowSvg from "../assets/images/arrow.svg";
import { useState } from "react";
import PropTypes from "prop-types";
import React from "react";

const Collapse = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isArrow, setIsArrow] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsArrow(!isArrow);
  };

  const collapse__content = isOpen
    ? "collapse__content"
    : "collapse__content--open";
  const arrow = isArrow ? "arrow" : "arrow--open";

  return (
    <>
      <div className="collapse">
        <button className="collapse__btn" onClick={handleClick}>
          <h3>{title}</h3>
          <img className={arrow} src={arrowSvg} alt="arrow" />
        </button>

        <div className={collapse__content}>
          <ul className="text">{text}</ul>
        </div>
      </div>
    </>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Collapse;
